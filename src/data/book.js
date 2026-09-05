const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    oldPrice: 399,
    category: "Fiction",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg",
    description:
      "A young shepherd follows his dreams and discovers valuable lessons about purpose, courage, and self-discovery."
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    oldPrice: 599,
    category: "Self Help",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
    description:
      "A practical guide to building good habits, breaking bad ones, and making small changes that lead to remarkable results."
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 399,
    oldPrice: 499,
    category: "Finance",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
    description:
      "A personal finance book that explores different approaches to money, investing, financial education, and building wealth."
  },
  {
    id: 4,
    title: "Ikigai",
    author: "Hector Garcia",
    price: 350,
    oldPrice: 450,
    category: "Self Help",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg",
    description:
      "An exploration of the Japanese concept of ikigai and how purpose, relationships, activity, and mindful living can contribute to a fulfilling life."
  },
  {
    id: 5,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: 450,
    oldPrice: 550,
    category: "Fantasy",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
    description:
      "Harry Potter discovers that he is a wizard and begins his magical journey at Hogwarts, where he forms friendships and encounters mysterious challenges."
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    price: 299,
    oldPrice: 399,
    category: "Classic",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
    description:
      "A dystopian story about surveillance, propaganda, political control, and an individual's struggle against an oppressive society."
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 450,
    oldPrice: 550,
    category: "Fantasy",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
    description:
      "Bilbo Baggins leaves his comfortable home and joins a dangerous adventure involving dwarves, a dragon, and a mysterious ring."
  },
  {
    id: 8,
    title: "Deep Work",
    author: "Cal Newport",
    price: 399,
    oldPrice: 499,
    category: "Productivity",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
    description:
      "A productivity guide that explains how focused, distraction-free work can improve concentration, creativity, and professional performance."
  },
  {
    id: 9,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 399,
    oldPrice: 499,
    category: "Finance",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
    description:
      "An insightful look at how emotions, behavior, experiences, and personal beliefs influence the way people think about and manage money."
  },
  {
    id: 10,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 350,
    oldPrice: 450,
    category: "Self Help",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/9780062457738-L.jpg",
    description:
      "A straightforward approach to personal growth that encourages accepting limitations, choosing meaningful values, and focusing on what truly matters."
  },
  {
    id: 11,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 280,
    oldPrice: 350,
    category: "Romance",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
    description:
      "A classic romantic novel following Elizabeth Bennet as she navigates relationships, social expectations, misunderstandings, and personal growth."
  },
  {
    id: 12,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    price: 399,
    oldPrice: 499,
    category: "Fiction",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9781594631931-L.jpg",
    description:
      "A moving story of friendship, family, guilt, and redemption set against the changing social and political landscape of Afghanistan."
  },
  {
    id: 13,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 299,
    oldPrice: 399,
    category: "Classic",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
    description:
      "A classic tale of wealth, ambition, love, and the American Dream told through the mysterious life of Jay Gatsby."
  },
  {
    id: 14,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 349,
    oldPrice: 449,
    category: "Classic",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    description:
      "A coming-of-age story that explores justice, prejudice, empathy, and morality through the experiences of a young girl and her family."
  },
  {
    id: 15,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 299,
    oldPrice: 399,
    category: "Finance",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
    description:
      "A classic personal-development work focused on mindset, persistence, goal setting, and principles associated with achieving success."
  },
  {
    id: 16,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 499,
    oldPrice: 599,
    category: "Self Help",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg",
    description:
      "A personal effectiveness framework that presents seven principles for developing stronger habits, relationships, responsibility, and leadership."
  },
  {
    id: 17,
    title: "A Man Called Ove",
    author: "Fredrik Backman",
    price: 399,
    oldPrice: 499,
    category: "Fiction",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9781476738017-L.jpg",
    description:
      "A heartfelt story about a grumpy widower whose life changes unexpectedly after new neighbors enter his world and form an unlikely friendship with him."
  },
  {
    id: 18,
    title: "The Book Thief",
    author: "Markus Zusak",
    price: 399,
    oldPrice: 499,
    category: "Fiction",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9780375842207-L.jpg",
    description:
      "Set during World War II, this story follows a young girl whose love of books and words provides comfort and connection during difficult times."
  },
  {
    id: 19,
    title: "Dune",
    author: "Frank Herbert",
    price: 499,
    oldPrice: 599,
    category: "Fantasy",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg",
    description:
      "An epic science-fiction adventure involving politics, power, prophecy, ecology, and the struggle for control of the desert planet Arrakis."
  },
  {
    id: 20,
    title: "The Fault in Our Stars",
    author: "John Green",
    price: 299,
    oldPrice: 399,
    category: "Romance",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/isbn/9780062208112-L.jpg",
    description:
      "A young romance between two teenagers who meet through a support group and discover love, friendship, humor, and meaning in their lives."
  },
  {
    id: 21,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    price: 299,
    oldPrice: 399,
    category: "Kids",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9780156012195-L.jpg",
    description:
      "A poetic tale about a young prince who travels between planets and learns important lessons about friendship, love, responsibility, and seeing beyond appearances."
  },
  {
    id: 22,
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    price: 350,
    oldPrice: 450,
    category: "Kids",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/isbn/9780142410318-L.jpg",
    description:
      "Charlie Bucket receives a golden ticket and enters Willy Wonka's extraordinary chocolate factory, where surprising adventures await."
  },
  {
    id: 23,
    title: "Matilda",
    author: "Roald Dahl",
    price: 299,
    oldPrice: 399,
    category: "Kids",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9780142410370-L.jpg",
    description:
      "A highly intelligent young girl discovers unusual abilities while dealing with difficult adults and finding courage, friendship, and independence."
  },
  {
    id: 24,
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: 250,
    oldPrice: 350,
    category: "Kids",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/isbn/9780399226908-L.jpg",
    description:
      "A colorful children's story following a hungry caterpillar as it eats through different foods before transforming into a beautiful butterfly."
  },
  {
    id: 25,
    title: "The Gruffalo",
    author: "Julia Donaldson",
    price: 280,
    oldPrice: 350,
    category: "Kids",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/isbn/9780333710937-L.jpg",
    description:
      "A clever little mouse uses imagination and quick thinking to protect itself while walking through a dangerous forest filled with predators."
  },
]

export default books