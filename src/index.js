import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import Blog from './routes/Blog';
import Chat from './routes/Chat';
import Conferences from './routes/Conferences';
import Counseling from './routes/Counseling';
import CulturalEvents from './routes/CulturalEvents';
import DigitalResources from './routes/DigitalResources';
import Entertainment from './routes/Entertainment';
import YourJourney from './routes/YourJourney';
import Home from './routes/Home';
import Mentorships from './routes/Mentorships';
import Trainings from './routes/Trainings';
import UserLogin from './components/UserLogin';
import EmotionalIntelligence from './helpers/EmotionalIntelligence';
import Leaderboard from './routes/Leaderboard';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "conferences",
        element: <Conferences />,
      },
      {
        path: "1-to-1-counseling",
        element: <Counseling />,
      },
      {
        path: "cultural-events",
        element: <CulturalEvents />,
      },
      {
        path: "digital-resources",
        element: <DigitalResources />,
      },
      {
        path: "entertainment",
        element: <Entertainment />,
      },
      {
        path: "your-journey",
        element: <YourJourney />,
      },
      {
        path: "mentorships",
        element: <Mentorships />,
      },
      {
        path: "trainings",
        element: <Trainings />,
      },
      {
        path: "sections",
        element: <Trainings />,
      },
      {
        path: "connect",
        element: <Chat />,
      },
      {
        path: "user-login",
        element: <UserLogin />,
      },
      {
        path: "trainings/emotional-intelligence",
        element: <EmotionalIntelligence />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
