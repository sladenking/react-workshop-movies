import React from "react";

class Pagination extends React.Component {
  render() {
    const {increment, decrement, activePage} = this.props;
    return (
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
          decrement()
        }}
          disabled={activePage === 1}>
          Prev
        </button>

        <span style={{
          margin: "50px"
        }}>
          <strong>{activePage}</strong>
        </span>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
          increment()
        }}>
          Next
        </button>
      </div>
    );
  }
}
export default Pagination;