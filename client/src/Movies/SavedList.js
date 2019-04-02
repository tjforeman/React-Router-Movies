import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie"><NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink></span>
        ))}
        <Link to='/' >
        <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
