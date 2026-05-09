export const projects = [
  {
    id: 1,
    title: "Cryptocurrency Price Tracker",
    description:
      "Built a dashboard that fetches live cryptocurrency data with auto-refresh every 60 seconds using CoinGecko API. Integrated filters for market cap, price range, and volume; sortable in both ascending and descending order. Implemented interactive historical price charts with multiple timeframes using Chart.js. Added a categorized news feed using CryptoCompare API with dynamic data handling and fallback logic. Applied caching, code splitting, and virtualization to reduce load time and support large data sets.",
    image: "/images/CryptoTracker.webp",
    techStack: [
      "React.js",
      "Axios",
      "Chart.js",
      "CoinGecko API",
      "CryptoCompare API",
      "Vite",
      "CSS3",
    ],
    links: {
      github:
        "https://github.com/darshangaikwad4114/Cryptocurrency-Price-Tracker",
      live: "https://darshan-cryptocurrency-price-tracker.netlify.app/",
    },
  },
  {
    id: 2,
    title: "QuickCart E-Commerce App",
    description:
      "Created an online shopping platform that displays real-time product listings through FakeStoreAPI. Implemented advanced filters for category, price, and availability along with cart management functionality. Managed global state using Context API and hooks for consistent user data across components. Structured app using reusable components for product listing, filtering, and checkout. Integrated client-side routing with React Router and styled the interface with Tailwind CSS for cross-device support.",
    image: "/images/QuickCart.webp",
    techStack: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "FakeStoreAPI",
      "React Router",
      "Context API",
    ],
    links: {
      github: "https://github.com/darshangaikwad4114/ecommerce-app",
      live: "https://quick-cart-ecommerce-shop.netlify.app/",
    },
  },
  {
    id: 3,
    title: "FilmFinder Movie App",
    description:
      "Developed a movie search tool that retrieves and displays real-time data from OMDB API. Enabled categorized browsing and a local favorites list with state handled via useState and useEffect. Applied lazy loading, virtualization, and memoization techniques to improve render performance. Ensured accessibility through ARIA roles, keyboard navigation, and semantic HTML structure. Used custom hooks for API logic and error handling, and implemented client-side focus management.",
    image: "/images/FlimFinder.webp",
    techStack: [
      "React.js",
      "Axios",
      "OMDB API",
      "Bootstrap 5",
      "CSS Modules",
      "React Hooks",
    ],
    links: {
      github: "https://github.com/darshangaikwad4114/Movie-app",
      live: "https://darshan-movie-app.netlify.app/",
    },
  },
];
