import React from "react";

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true
    } else {
      return false
    }
  }

  render() {
    const {sort_by, updateSortBy} = this.props;
    // const handleClick = (value) => {   return (event) => { updateSortBy(value); }
    // };
    const handleClick = value => {
      return () => {
        updateSortBy(value);
      };
    };
    const getClassLink = value => {
      return `nav-link ${sort_by === value
        ? "active"
        : ""}`
    }

    return (
      <div>
        <ul className="tabs nav nav-pills">
          <li className="nav-item">
            <div
              className={getClassLink("popularity.desc")}
              onClick={handleClick("popularity.desc")}>
              Popular
            </div>
          </li>
          <li className="nav-item">
            <div
              className={getClassLink("revenue.desc")}
              onClick={handleClick("revenue.desc")}>
              Revenue
            </div>
          </li>
          <li className="nav-item">
            <div
              className={getClassLink("vote_average.desc")}
              onClick={handleClick("vote_average.desc")}>
              Vote Average
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default MovieTabs;