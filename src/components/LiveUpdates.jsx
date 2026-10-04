import { useEffect, useState } from "react";

function LiveUpdates() {
  const [socket, setSocket] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState("Connecting...");
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState([]);

 useEffect(() => {
  let ws;
  let reconnectTimer;

  const connectWebSocket = () => {
    setConnectionStatus("Connecting...");

    ws = new WebSocket("ws://localhost:5000/ws");

    ws.onopen = () => {
      console.log("WebSocket connected");

      setConnectionStatus("Connected");
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setUpdates((previous) => [
        ...previous,
        data.message,
      ]);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");

      setConnectionStatus("Disconnected");
      setSocket(null);

      reconnectTimer = setTimeout(() => {
        connectWebSocket();
      }, 3000);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);

      setConnectionStatus("Connection Error");
    };
  };

  connectWebSocket();

  return () => {
    clearTimeout(reconnectTimer);

    if (ws) {
      ws.close();
    }
  };
}, []);
  const sendMessage = () => {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      console.log("WebSocket is not connected");
      return;
    }

    if (!message.trim()) {
      return;
    }

    console.log("Sending message:", message);

    socket.send(message);

    setMessage("");
  };

  return (
    <section className="px-6 py-12">
      <div className="max-w-3xl mx-auto bg-[#EDE0CA] p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-2">
          BookNest Live Updates
        </h2>

        <p className="mb-4">
  Status:{" "}
  <span
    className={`font-semibold ${
      connectionStatus === "Connected"
        ? "text-green-700"
        : connectionStatus === "Connecting..."
        ? "text-yellow-700"
        : "text-red-700"
    }`}
  >
    {connectionStatus}
  </span>
</p>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter a message"
            className="flex-1 px-4 py-2 rounded border"
          />

          <button
            onClick={sendMessage}
            disabled={connectionStatus !== "Connected"}
            className="px-4 py-2 rounded bg-[#6B4226] text-white disabled:opacity-50"
          >
            Send
          </button>
        </div>

        <h3 className="font-semibold mb-2">
          Real-Time Messages
        </h3>

        {updates.length === 0 ? (
          <p>No updates yet.</p>
        ) : (
          <ul className="space-y-2">
            {updates.map((update, index) => (
              <li
                key={index}
                className="bg-[#F7F1E3] p-3 rounded"
              >
                {update}
              </li>
            ))}
          </ul>
        )}

      </div>
    </section>
  );
}

export default LiveUpdates;