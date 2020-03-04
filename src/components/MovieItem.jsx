import React from "react";

class MovieItem extends React.Component {
  state = {
    willWatch: false
  };

  render() {
    const {data, deleteMovie, addMovie, removeMovie} = this.props;
    // props.data = {};
    return (
      <div className="card text-white bg-dark mb-3">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path || data.poster_path}`}
          alt=""/>
        <div className="card-body">
          <h6 className="card-title">{data.title}</h6>
          <h6 className="mb-3">Rating: {data.vote_average}</h6>
          <div className="d-flex justify-content-between align-items-center">
            {this.state.willWatch
              ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                  this.setState({willWatch: false});
                  removeMovie(data);
                }}>
                  Remove from Favorites
                </button>
              )
              : (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                  this.setState({willWatch: true});
                  addMovie(data);
                }}>
                  Add to Favorites
                </button>
              )}

            <button
              type="button"
              class="btn btn-danger"
              onClick={() => {
              deleteMovie(data);
            }}>
              Delete movie
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;

