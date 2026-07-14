# Codeforces Visualizer

A React-based web application that visualizes a Codeforces user's profile and competitive programming statistics using the official Codeforces API.

This project was originally built using React and Parcel. It is being migrated to a modern React + Vite setup while adding new features and improving the overall architecture.

---

## Features

- Search any Codeforces user
- Modern dashboard UI
- View current and maximum rating
- View total solved problems
- View best contest rank
- View latest solved problem
- Analyze tag-wise solved problems
- Loading skeleton while fetching data
- Built with React and Vite
---
## Roadmap

- [x] Migrate project from Parcel to Vite
- [x] Modernize dashboard UI
- [ ] Compare two Codeforces users
- [ ] Rating comparison charts
- [ ] Tag comparison charts
- [ ] Responsive design
- [ ] Dark mode

---

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Codeforces REST API

---

## Codeforces APIs Used

### User Information

```
https://codeforces.com/api/user.info
```

Returns:

- Name
- Profile photo
- Current rating
- Maximum rating
- Organization
- Country
- City

---

### Rating History

```
https://codeforces.com/api/user.rating
```

Used to determine:

- Best contest rank
- Contest performance history

---

### Submission History

```
https://codeforces.com/api/user.status
```

Used to calculate:

- Last solved problem
- Total unique solved problems
- Tag-wise solved problem statistics

---

## Project Structure

```
src
│
├── components
│   ├── Header.jsx
│   ├── Body.jsx
│   ├── Footer.jsx
│   └── CartShimmer.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/sampadghane/codeforces-visualizer-v2.git
```

Move into the project

```bash
cd codeforces-visualizer-v2
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## Current Workflow

```
User enters Codeforces handle
            │
            ▼
Search button clicked
            │
            ▼
Fetch data from Codeforces API
            │
            ▼
Process response
            │
            ▼
Render profile statistics
```

---

## Planned Improvements

- Compare two Codeforces users
- Better error handling
- Responsive UI
- Rating comparison charts
- Tag comparison charts
- Contest history visualization
- Improved loading states
- Refactor API calls into reusable services
- Better project structure
- Dark mode

---

## Future Enhancements

- Side-by-side user comparison
- Shared solved problems
- Strongest topic analysis
- Weakest topic analysis
- Contest performance graphs
- Export statistics
- Bookmark favourite handles

---

## Learning Objectives

This project demonstrates:

- React functional components
- React Hooks
- State management using useState
- Side effects using useEffect
- REST API integration
- Asynchronous JavaScript
- Data processing using Map and Set
- Component-based architecture
- Modern React development using Vite

---

## License

This project is developed for learning purposes.