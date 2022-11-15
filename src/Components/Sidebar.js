import React, { useState, useEffect } from "react";
import "./Sidebar.css";
const Sidebar = ({ data, setSearchResults }) => {
  const [textinput, setTextinput] = useState("");
  const [scoreinput, setScoreinput] = useState(null);
  const [dropdownval, setDropdownval] = useState("orderby");
  const [asce, setAsce] = useState(true);
  var resultsArray = data;
  const handleSearchChange = () => {
    if (textinput) {
      resultsArray = resultsArray.filter(
        (post) =>
          post.name.toLowerCase().includes(textinput) ||
          post.summary.toLowerCase().includes(textinput)
      );
    }
    if (scoreinput) {
      resultsArray = resultsArray.filter(
        (post) => Math.ceil(post.rating / 10) >= scoreinput
      );
    }
    // =======================================================
    if (dropdownval === "name") {
      resultsArray = resultsArray.slice(0);
      asce
        ? resultsArray.sort(function (a, b) {
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
          })
        : resultsArray.sort(function (a, b) {
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            return x < y ? 1 : x > y ? -1 : 0;
          });
    }
    if (dropdownval === "score") {
      resultsArray = resultsArray.slice(0);
      asce
        ? resultsArray.sort(function (a, b) {
            return a.rating - b.rating;
          })
        : resultsArray.sort(function (a, b) {
            return b.rating - a.rating;
          });
    }
    if (dropdownval === "releasedate") {
      resultsArray = resultsArray.slice(0);
      asce
        ? resultsArray.sort(function (a, b) {
            var dateA = new Date(a.first_release_date),
              dateB = new Date(b.first_release_date);

            return dateA - dateB;
          })
        : resultsArray.sort(function (a, b) {
            var dateA = new Date(a.first_release_date),
              dateB = new Date(b.first_release_date);

            return dateB - dateA;
          });
    }

    // ===========================================================
    setSearchResults(resultsArray);
  };
  useEffect(() => {
    handleSearchChange();
  }, [textinput, scoreinput, dropdownval, asce]);
  const setsort = () => {
    setAsce(!asce);
  };

  return (
    <div className="Sidebar">
      <div style={{ display: "block" }}>
        <div className="SidebarContainer">
          <h1>Filter Results</h1>
          <p>
            <label className="form-label">Name(contains)</label>
            <input
              id="nameInput"
              placeholder="Text String"
              type="text"
              class="form-input"
              // value={search}
              onChange={(e) => setTextinput(e.target.value)}
            ></input>
          </p>
          <p>
            <label>Minimum Score</label>
            <input
              id="scoreValue"
              type="number"
              placeholder="1-10"
              class="form-input"
              onChange={(e) => setScoreinput(e.target.value)}
            ></input>
          </p>
          <p>
            <label>Order By</label>
            <div>
              <button className="sorting-btn" onClick={setsort}>
                {asce ? <span>↑</span> : <span>↓</span>}
              </button>
              <select
                id="orderByInput"
                value={dropdownval}
                onChange={(e) => setDropdownval(e.target.value)}
              >
                <option value="orderby">Order By</option>
                <option value="releasedate">Release Date</option>
                <option value="score">Score</option>
                <option value="name">Name</option>
              </select>
            </div>
          </p>
          <p className="button-container">
            <button type="button" className="clear-filter-btn">
              Clear
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
