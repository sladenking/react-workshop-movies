import React from "react";

const MovieTabs = props => {
    const {sort_by} = props;

    return (
        <div>
        <ul className="tabs nav nav-pills">
            <li className="nav-item">
            <div
                className={`nav-link ${sort_by === "popularity.desc"
                ? "active"
                : ""}`}>
                Popular
            </div>
            </li>
            <li className="nav-item">
            <div
                className={`nav-link ${sort_by === "revenue.desc"
                ? "active"
                : ""}`}>
                Revenue
            </div>
            </li>
            <li className="nav-item">
            <div
                className={`nav-link ${sort_by === "vote_average.desc"
                ? "active"
                : ""}`}>
                Vote Average
            </div>
            </li>
        </ul>
        </div>
    )
}

export default MovieTabs;