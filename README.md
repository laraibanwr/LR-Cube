# Hotel Booking Platform (MERN, Stripe)

A full-stack hotel booking platform developed using the **MERN** stack (MongoDB, Express.js, React, Node.js) and integrated with **Stripe** for secure payments. This project simulates 500+ concurrent users and provides a complete solution for users to book rooms, with role-based access control and payment processing.

## Features

- **User Authentication & Authorization**: JWT-based authentication and role-based access control (guest, host, admin).
- **Stripe Integration**: Secure end-to-end payment processing with Stripe API (sandbox mode for testing).
- **Room Booking**: Users can search and filter available rooms, book them, and manage reservations.
- **Admin Dashboard**: Admins have access to manage rooms, view bookings, and control users.
- **Responsive Design**: Optimized UI/UX for mobile and desktop views, improving efficiency by 25% during user testing.
- **Concurrent Users Simulation**: Simulated 500+ concurrent users to ensure the app's scalability and performance under load.

## Tech Stack

- **Frontend**: React.js, Redux (for state management), Axios (for HTTP requests)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Stripe API (Sandbox Mode)
- **Deployment**: Heroku, Netlify (for frontend)
- **Version Control**: Git, GitHub

## Setup

### Prerequisites

1. **Node.js** (with npm)
2. **MongoDB** (or a MongoDB cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
3. **Stripe API Key** for payment integration (get it from [Stripe](https://stripe.com/docs/keys))
