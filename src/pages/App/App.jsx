import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorsListPage from '../ActorListPage/ActorListPage.jsx';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage';
import NavBar from '../NavBar/NavBar';
import { movies } from '../../data.js';

function App() {
  const [user, setUser] = useState(null);

  const [userLogin, setUserLogin] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  });

  function handleChange(event) {
    setUserLogin((prevUserLogin) => ({
      ...prevUserLogin,
      [event.target.name]: event.target.value,
      error: '',
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUser(userLogin.name);
  }

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route
              path="/actors"
              element={<ActorsListPage movies={movies} />}
            />
            <Route
              path="/actors/:actorName"
              element={<ActorDetailPage movies={movies} />}
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                userLogin={userLogin}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
