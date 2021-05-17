import React from 'react';
import { Link, NavLink } from "react-router-dom";

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink key={movie.id} to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}
      <Link className="home-button" to="/">Home</Link>
    </div>
  );
}
