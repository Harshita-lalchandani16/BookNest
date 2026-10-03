import { useEffect, useState } from "react";

function LiveUpdates() {
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState("");
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000/ws");

    ws.onopen = () => {
      console.log("WebSocket connected");
      setConnected(true);
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
      setConnected(false);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      return;
    }

    if (!message.trim()) {
      return;
    }

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
          <span className="font-semibold">
            {connected ? "Connected" : "Disconnected"}
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
            disabled={!connected}
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