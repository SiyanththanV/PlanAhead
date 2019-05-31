# Project Management App
Web based project management React app with Redux store for state management, for users in the same group to add, view and delete tasks existing in completing a project. Users can sign up and login into their accounts to view tasks displayed as cards and get real time notifications on what other team members are up to. Firebase development platform allows for access control by setting up rules depending on the status of a user. Only signed in users can view projects and notifications of the group they are part of.

## Technologies
- React framework with Redux implementation for managing states and component properties
	- JSX and ES6 support out of the box
- Google's Firebase development platform:
	- Firestore for NoSQL cloud database storage
	- Authentication for user authentication (email and password sign-in method)
	- Cloud functions for pushing notifications upon new user sign up or new project creation
	- Hosting for app deployment to the web

## How to Use App
1. Git clone the github project.
2. Run npm start to set up development environment and start server and allow for hot loading for code updates. App will run at localhost:3000.
