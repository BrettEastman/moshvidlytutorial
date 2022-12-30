import React, { Component } from "react";
import { getMovies } from '../services/fakeMovieService'; // we need to import this method from the fakeMovieService file, so we go up with '..' then to the file path

class Movies extends Component {
  state = {
    movies: getMovies() // then we create a new property in state with this method name to activate it
  };

  handleDelete = (movie) => {
    const moviesLeft = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: moviesLeft});
  }

  render() {
    return <table className='table'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {this.state.movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  }
}

export default Movies;