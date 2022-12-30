import React, { Component } from "react";
import { getMovies } from '../services/fakeMovieService'; // we need to import this method from the fakeMovieService file, so we go up with '..' then to the file path

class Movies extends Component {
  state = {
    movies: getMovies() // then we create a new property in state with this method name to activate it
  };

  render() {
    return <table className='table'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  }
}

export default Movies;