# Job Listing Web App
> **🚧 WIP: Work In Progress 🚧**  
> This project is currently under development. Features and functionalities are being added regularly.

A web application built with React, Tailwindcss, Redux and Firebase for managing and viewing job listings. This project serves as a platform for job seekers to browse available positions and for employers to post job offers.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (sign up, login, logout)
- Create, read, update, and delete job listings
- Filter job listings by category or location
- Responsive design for mobile and desktop
- Firebase Firestore for real-time data management
- User-friendly interface

## Technologies Used

- **Frontend:**
  - React
  - React Router
  - Tailwindcss/ (or styled-components)
  
- **Backend:**
  - Firebase (Authentication, Firestore)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Firebase project set up with Firestore and Authentication enabled.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abel-alx-github/jobslistingboard.git
  
Navigate to the project directory:
  ```bash
   cd job-listing-app
```
Install dependencies:
  ```bash
   npm install
```
Set up Firebase configuration:
Create a .env file in the root directory and add your Firebase configuration:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```
Start the development server:
```bash
npm start
```
