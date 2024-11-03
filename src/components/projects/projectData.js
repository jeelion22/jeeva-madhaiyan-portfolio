import mentor_student from "./icons/mentor-student-api.png";
import hall_booking_api from "./icons/hall_booking_api.png";
import react_shopping_cart from "./icons/react-shopping-cart.png";
import library_mgmt from "./icons/library_mgmt.png";
import travelPlannerImg from "./travel-planner.png";
import reunitemeImg from "./reuniteme.png";

// project details

export const projectsInfo = [
  {
    name: "ReUniteME",
    img: reunitemeImg,
    purpose:
      "A platform connecting mentally ill and missing individuals with their families.",
    links: {
      client: "https://github.com/jeelion22/reuniteME-Frontend",
      server: "https://github.com/jeelion22/reuniteME-Backend",
      live: "https://reuniteme.netlify.app/",
    },
  },
  {
    name: "Travel Planner India",
    img: travelPlannerImg,
    purpose:
      "An Indian travel planning tool with itinerary and budget management.",
    links: {
      client: "https://github.com/jeelion22/travel-planner-frontend",
      server: "https://github.com/jeelion22/travel-planner-backend",
      live: "https://travel-planner-india.netlify.app/",
    },
  },
  {
    name: "Assigning-Mentor-Students-APIs-with-Database",
    img: mentor_student,
    purpose:
      "RESTful APIs for MongoDB databases tailored for mentors and students collections",
    links: {
      client: "",
      server:
        "https://github.com/jeelion22/Roadmap-Day39-Assigning-Mentor-Students-APIs-with-Database",
      live: "",
    },
  },
  {
    name: "Hall-Booking-APIs",
    img: hall_booking_api,
    purpose:
      "APIs for renting halls or rooms for events. Customers need to sign up to book seats.",
    links: {
      client: "",
      server: "https://github.com/jeelion22/Roadmap-Day38-Hall-Booking-API",
      live: "",
    },
  },
  {
    name: "React Shopping Cart App With Redux",
    img: react_shopping_cart,
    purpose:
      "A React-based shopping cart app with Redux for state management, featuring default products on load.",
    links: {
      client:
        "https://github.com/jeelion22/Roadmap-Day32-React-Shopping-Cart-with-Redux-Netlify-Deployment",
      server: "",
      live: "https://react-shopping-cart-with-redux-jeeva.netlify.app/",
    },
  },

  {
    name: "React Library Management System With Formik",
    img: library_mgmt,
    purpose:
      "The home page contains an inventory about the available books with author names. The books page contains all the available books currently in the library where users can remove or update book's information.",
    links: {
      client:
        "https://github.com/jeelion22/Roadmap-Day31-Library-Management-System-Formik-Netlify-Deployment?tab=readme-ov-file",
      server: "",
      live: "https://beautiful-trifle-bc8ef6.netlify.app/",
    },
  },
];
