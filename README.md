<img width="1902" height="881" alt="image" src="https://github.com/user-attachments/assets/22aadd79-3415-4fb8-a09f-5917515ac651" /># Bangalore Pincode Explorer 🚀

A full-stack web application that helps users quickly search for Bangalore postal information using a 6-digit pincode. The app validates the input, queries the backend, and displays key details such as the area, district, and state.

## Overview

Bangalore Pincode Explorer is a simple but practical project that demonstrates how to build a responsive frontend and a REST API backend together. It is designed for learning, experimentation, and easy extension into a production-ready location lookup tool.

## Features

- Search for Bangalore postal details using a 6-digit pincode
- Input validation for postal code format
- Clean and responsive user interface
- Loading state while the request is being processed
- Friendly error handling for invalid or unavailable pincodes
- Backend API built with Express for structured responses
- Frontend built with React and Vite for a modern UI experience

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- Axios
- CORS
- dotenv

## Project Structure

```text
bangalore-pincode-explorer/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchForm.jsx
│   │   │   └── ResultCard.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── backend/
│   ├── controllers/
│   │   └── pincodeController.js
│   ├── routes/
│   │   └── pincodeRoutes.js
│   ├── package.json
│   └── server.js
│
├── .gitignore
├── README.md
└── .git/
```

## How It Works

1. The user enters a 6-digit pincode in the frontend.
2. The frontend sends a request to the backend API.
3. The backend validates the pincode format.
4. The backend fetches postal information from an external postal service.
5. The backend returns a structured response to the client.
6. The frontend renders the result card with the details.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SanjivKumarPatel/bangalore-pincode-explorer.git
cd bangalore-pincode-explorer
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open a new terminal and run:

```bash
cd frontend
npm install
npm run dev
```

The Vite development server will start and show the local URL where the app is available.

## API Endpoint

### Get Pincode Details

```http
GET /api/pincode/:pincode
```

Example:

```http
GET /api/pincode/560001
```

## Example Response

```json
{
  "success": true,
  "message": "Pincode details fetched successfully",
  "data": {
    "pincode": "560001",
    "area": "Bangalore GPO",
    "district": "Bengaluru",
    "state": "Karnataka"
  }
}
```

## Error Handling

The application includes fallback handling for:

- Invalid 6-digit input
- Pincode not found
- External API failure
- Unexpected server-side errors

## Screenshots

A sample user flow includes:
![Uploading image.png…]()
![Uploading image.png…]()


- entering a pincode
- validation message for invalid input
- search result card with area details
- error state for unavailable pincodes

## Future Improvements

- Add support for multiple matching postal records
- Show recent search history
- Add export/share functionality
- Improve UI accessibility
- Add deployment setup for hosting on Vercel or Render

## Author

Sanjiv Kumar Patel

## Repository

https://github.com/SanjivKumarPatel/bangalore-pincode-explorer

## Notes

This project is intended for learning and demonstration purposes and can be extended into a more complete postal lookup platform.
