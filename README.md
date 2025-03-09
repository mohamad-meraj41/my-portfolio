## 📝 My Personal Portfolio
### 🚀 View Live Project
---
## 📖 Table of Contents
- About the Project
- Features
- Screenshots
- Installation
- Technologies Used
- Project Structure
- Usage
- Future Improvements
- Contact

---

## About the Project
This project is a personal portfolio website where visitors can explore my developed projects. They can view project details, development dates, utilized technologies, descriptions, and access links to my GitHub and LinkedIn profiles.

---
## 🎯 Features
- Add, view, and edit projects
- Uses local json-server as a database
- Responsive design with React-Bootstrap
- Display social media links using React-Icons
- Routing with React-Router-Dom

---

## 🛠 Technologies Used
- React: Main framework for building the UI
- React Router Dom: For routing between pages
- Axios: To interact with the local json-server
- Bootstrap & React-Bootstrap: For responsive design
- React-Icons: To add icons to the project
- JSON-Server: Local database for storing projects

---

## 🚀 Installation
1- Clone the Repository
```bash
git clone https://github.com/mohamad-meraj41/portfolio.git
cd portfolio
```
2- Install Dependencies
```bash
npm install
```
3- Install json-server
```bash
npm install -g json-server
```
4- Start json-server 
```bash
json-server --watch src/data/db.json --port 8000
```
The server will run now

5- Run the Ptoject
```bash
npm run dev
```

---

## 📂 Project Structure
```bash
portfolio/
├── public/                 # Public assets
├── src/                    # Source code
│   ├── components/         # Components (Navbar, ProjectCard, Footer)
│   ├── pages/              # Pages (Home, Projects, Contact)
│   ├── services/           # API services (axios)
│   ├── assets/             # Images and static files
│   ├── App.jsx             # Main App component
│   └── index.jsx           # Entry point
├── db.json                 # Local json-server database
├── package.json            # npm configuration
└── vite.config.js          # Vite configuration

```
---

## Usage
1- View all projects on the home page.

2- Click on a project to see more details.

3- Use the icons to visit GitHub or LinkedIn.

4- Contact me through the Contact Page.

--- 
## 🚧 Future Improvements
### Planned features for future versions:

- Add a blog page
- Implement light/dark theme toggle
- Add search and filter functionality for projects

---

## 📧 Contact
- Email: kashamd40@gmail.com
- GitHub: https://github.com/mohamad-meraj41
- LinkedIn: your-linkedin-profile

## Happy Coding!