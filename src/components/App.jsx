import React from "react";
// import {moviesData} from "../moviesData";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
import {API_URL, API_KEY_3} from "../utils/api";
import Pagination from "./Pagination";

// UI = fn(state, props) App = new React.Component()

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc",
      activePage: 1,
      totalPages: 0
    }
  };

  componentDidMount() {
    this.getMovies();
  };

  deleteMovie = movie => {
    const updateMovies = this
      .state
      .movies
      .filter(item => item.id !== movie.id);

    // this.state.movies = updateMovies;
    this.setState({movies: updateMovies});
  };

  addMovie = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);

    this.setState({moviesWillWatch: updateMoviesWillWatch});
  };

  removeMovie = movie => {
    const updateMoviesWillWatch = this
      .state
      .moviesWillWatch
      .filter(item => item.id !== movie.id);

    this.setState({moviesWillWatch: updateMoviesWillWatch});
  };

  clearAll = () => {
    this.setState({moviesWillWatch: []});
  };

  updateSortBy = value => {
    this.setState({sort_by: value, activePage: 1});
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState!== this.state) {
      this.getMovies();
    };
  };

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}&page=${this.state.activePage}`).then(response => {
      return response.json()
    }).then(data => this.setState({movies: data.results, totalPages: data.total_pages}))
  };

  decrement = () => {
    this.setState({
      activePage: this.state.activePage - 1
    });
    console.log(this.state.activePage - 1)
  };

  increment = () => {
    this.setState({
      activePage: this.state.activePage + 1
    });
    console.log(this.state.activePage + 1)
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy}/>
          </div>
          <div className="col-9 mt-4 d-flex justify-content-between align-items-center">
            <Pagination
              activePage={this.state.activePage}
              totalPages={this.state.totalPages}
              increment={this.increment}
              decrement={this.decrement}/>
            {/* <span>Total pages: {this.state.totalPages}</span> */}
          </div>
          <div className="col-9">
            <div className="row mt-4">
              {this
                .state
                .movies
                .map(movie => {
                  return (
                    <div className="col-6 mb-4" key={movie.id}>
                      <MovieItem
                        data={movie}
                        deleteMovie={this.deleteMovie}
                        addMovie={this.addMovie}
                        removeMovie={this.removeMovie}/>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-3">
            <div className="row mt-3">
              <h4>Favorites: {this.state.moviesWillWatch.length}
                {" "}
                movies</h4>
              {/* <button
                type="button"
                className="btn btn-danger mb-2"
                onClick={() => {
                this.clearAll();
              }}>Clear All</button> */}
              <ul className="list-group w-100">
                {this
                  .state
                  .moviesWillWatch
                  .map(movie => (
                    <li key={movie.id} className="list-group-item">
                      <div className="d-flex justify-content-between">
                        <span>{movie.title}</span>
                        <span>{movie.vote_average}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
