# WanderAsia - Client Side

WanderAsia is a web-based tourism platform focused on helping travelers explore destinations across Asia. This repository contains the client-side code of the WanderAsia project.

## About
WanderAsia provides a seamless experience for travelers looking to explore Asia. Our platform offers in-depth insights into top destinations, cultural experiences, and travel tips to make every journey memorable. We aim to connect travelers with authentic experiences through curated guides, user reviews, and interactive maps. 

### Live Website
Visit our live website here: [WanderAsia Live](https://wanderasia-41bae.web.app/)

### Why WanderAsia?
- **Comprehensive Destination Coverage**: Discover hidden gems and popular attractions across Asia.
- **User-Generated Reviews**: Get insights from real travelers who share their experiences.
- **Interactive Maps**: Navigate easily with integrated maps displaying key locations.
- **Personalized Recommendations**: Tailored suggestions based on user preferences and past activities.

## Features
- Browse and search for tourist destinations across Asia
- View detailed information about destinations, including images and descriptions
- User authentication (signup/login)
- User reviews and ratings for destinations
- Interactive maps for easy navigation
- Personalized travel suggestions
- Responsive design for seamless experience across devices

## Tech Stack
- **Frontend:** React.js, Redux (if used)
- **Styling:** Tailwind CSS / Bootstrap
- **Routing:** React Router
- **API Calls:** Axios / Fetch API
- **State Management:** Redux / Context API (if applicable)
- **Authentication:** Firebase/Auth0 (or custom authentication)

## Getting Started

### Prerequisites
- Node.js (>=16.x)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/wanderasia-client.git
   cd wanderasia-client
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```

3. Create a `.env` file in the root directory and add the necessary environment variables:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000/api  # Adjust for production
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Start the development server:
   ```sh
   npm start  # or yarn start
   ```

## Project Structure
```
wanderasia-client/
│── src/
│   │── components/  # Reusable UI components
│   │── pages/       # Main application pages
│   │── assets/      # Images, icons, and styles
│   │── context/     # Global state management
│   │── utils/       # Helper functions
│   │── App.js       # Main application file
│   │── index.js     # Entry point
│
│── public/
│── package.json
│── README.md
```

## API Integration
This frontend interacts with the backend via RESTful API calls. Ensure the backend is running before testing the client-side functionalities.

## Deployment
To build and deploy the client-side application, run:
```sh
npm run build  # or yarn build
```
The build files will be in the `build/` directory, ready for deployment on services like Vercel, Netlify, or AWS S3.

## Contributing
Feel free to submit issues and pull requests for improvements.

## License
MIT License. See `LICENSE` file for details.
