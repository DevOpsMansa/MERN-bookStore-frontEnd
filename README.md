# MERN-bookStore-frontEnd

                           ### Per Scholas 2024 capStone Project

## ** Project Description **

A Book Store App Website built on MERN Developer Stack (React JS, MongoDB, Express, and Node JS) with Inventory Management, is a sophisticated and dynamic web application designed to facilitate the operations of a modern book store.
this application offers a powerful combination of technologies to provide a seamless user experience for both customers and store managers.
The MERN Book Store App Website with Inventory Management provides a complete solution for both customers and store managers, offering a convenient and secure platform for book purchasing and inventory management. Its modern and efficient design ensures a delightful user experience and enables the smooth operation of a contemporary bookstore in the digital age.

## KEY:

Begin with the end in mind. Know where you want to go by planning with sketches and functionality ideas so you do not waste time building things that you do not need.

## Highlighted features of the MERN Book Store App Website with Inventory Management include:

### User-Friendly Interface

The front-end is developed using React, providing a responsive and intuitive user interface that works seamlessly on various devices, from desktops to smartphones.

### Inventory Management:

The application includes a comprehensive inventory management system that allows store managers to add, edit, and delete books, track stock levels, and manage book details such as title, author, genre, price, and more. Bringing in the CRUD effect to the application

### User Authentication

User authentication and authorization are implemented to ensure secure access to the system. Customers can create accounts, log in, and place orders, while store managers have access to advanced features for managing the inventory.

### Search and Filtering

Users can search for books using keywords and apply various filters, such as genre, author, and price range, to find the books they are interested in quickly.

### Responsive Design

The website is designed to be responsive, ensuring a consistent and user-friendly experience across various devices and screen sizes.

### Admin Dashboard

Store managers can access a dedicated admin dashboard where they can view real-time inventory status, monitor sales, and manage orders, customers, and user accounts.

## Project Phases:

### Project Timeline:

- Planning Phase: 1 day
- Backend Development: 1 days
- Frontend Development: 2 days
- Inventory Management: 2 days
- Testing: 1 days
- Deployment: 1 days
- Documentation and Training: N/A
- Maintenance and Support: N/A

### Planning Phase:

- Define project scope, objectives, and requirements.
- Identify key features and functionalities.
- Create wireframes and user interface designs.
- Set up project management tools and communication channels.

### Backend Development:

- Folder Structure
  bookStore - capStone
  Mern-Server (Back-end)
  index.js File - Main entry point
  .env file - Keep top secrets
  .gitignore - ignore top secret file in github and more
  README.md - Project details

* Set up the Node.js environment.
* Initialize Express.js framework for building RESTful APIs.
* Design MongoDB database schema for books and inventory management.
* Implement CRUD (Create, Read, Update, Delete) operations for books and inventory.
* Implement user authentication and authorization using JWT (JSON Web Tokens).
* Test API endpoints using Postman or similar tools.
* Include at least one form of user authentication/authorization within the application.

### Frontend Development:

Folder Structure
Set up React.js environment using Create React App.
Develop UI components based on wireframes and designs.
Implement routing using React Router.
Integrate APIs to fetch and display book data.
Implement user authentication and authorization flows.
Develop forms for user interaction such as login, registration, and checkout.
Use CSS to style the application.
Create at least four different views or pages for the application.
Create some form of navigation that is included across the application’s pages, utilizing React Router for page rendering.
Ensure responsiveness and cross-browser compatibility.

### Inventory Management:

Develop admin panel UI for inventory management.
Implement functionalities for adding, editing, and deleting books.
Incorporate search and filter options for easy inventory management.
Implement notifications for low stock or out-of-stock items.
Secure admin functionalities with appropriate authorization.

### Testing:

Conduct unit testing for backend APIs and frontend components.
Perform integration testing to ensure smooth interaction between front-end and back-end.
Carry out user acceptance testing (UAT) to validate the application against requirements.
Fix any bugs or issues identified during testing.

### Deployment:

Set up production environment for both frontend and backend.
Configure continuous integration and deployment (CI/CD) pipelines.
Deploy the application to a cloud platform such as AWS, Azure, or Heroku.
Set up domain and SSL certificate for secure access.
Monitor application performance and scalability.

### Documentation and Training:

Create user manuals and technical documentation.
Provide training sessions for store administrators on how to use the application.
Document API endpoints and data models for future reference.

### Maintenance and Support:

Establish a maintenance plan for regular updates and bug fixes.
Set up monitoring tools to track application performance and user activity.
Provide ongoing support to address user inquiries and issues.
Plan for future enhancements and feature updates based on user feedback. ### Project Status:
At this time this project is set to complete a capstone project for school. In the future am open to collaborating and bringing it to completion as a fully operational MERN stack website that is open to users as needed.

### Resources

- Tailwind CSS : https://tailwindcss.com/
  Setting up Tailwind CSS in a Vite project.

  Create your project
  Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

  Terminal
  npm create vite@latest my-project -- --template react
  cd my-project
  Install Tailwind CSS
  Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

  Terminal

  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  Configure your template paths
  Add the paths to all of your template files in your tailwind.config.js file.

  tailwind.config.js

  /** @type {import('tailwindcss').Config} \*/
  export default {
  content: [
  "./index.html",
  "./src/**/\*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  }
  Add the Tailwind directives to your CSS
  Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

  index.css

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  Start your build process
  Run your build process with npm run dev.

  Terminal

  npm run dev
  Start using Tailwind in your project
  Start using Tailwind’s utility classes to style your content.

  App.jsx

  export default function App() {
  return (
  <h1 className="text-3xl font-bold underline">
  Hello world!
  </h1>
  )
  
}

* react Router Dom: https://reactrouter.com/en/main/start/tutorial


* Vite: This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Author
Eric (Mansa) Marah
