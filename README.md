# Case Library

Case Library is a clean, fast, and easy-to-use legal research platform. Search through Indian legal cases, statutes, and documents, and get accurate results in a simple, minimalist interface. Results are displayed as neat cards, and popular searches are suggested when no query is entered.

## Features

- Keyword search for cases, statutes, and legal topics
- Ranked results with relevance scoring
- Clean card-style design
- Responsive dark-themed interface
- Popular searches displayed when query is empty

## Tech Stack

**Frontend:** React (JSX), TailwindCSS, Lucide-React icons  
**Backend:** Node.js, Express, CORS, JSON-based mock database, Regex-based search  

## Setup

Clone the repo and install dependencies for frontend and backend. Run the backend (`node index.js`) and frontend (`npm start`) servers. The app should open in your browser at `http://localhost:3000`.

## How It Works

Enter a keyword, submit, and the frontend queries the backend. The backend filters and ranks matches from the JSON database and returns them. Results appear in card format, and popular searches appear when no query is entered.

## Author

Mohd Shazil Raza