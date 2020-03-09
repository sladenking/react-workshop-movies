import React from "react";

class Pagination extends React.Component {
  render() {
    const {increment, decrement, activePage, totalPages} = this.props;
    return (
      <div className="d-flex justify-content-around align-items-center">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
          decrement()
        }}
          disabled={activePage === 1}>
          Prev
        </button>

        <span>
          <strong>{activePage} - {totalPages}</strong>
        </span>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
          increment()
        }}
          disabled={activePage === totalPages}>
          Next
        </button>
      </div>
    );
  }
}
export default Pagination;