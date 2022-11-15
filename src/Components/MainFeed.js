import React, { useState, useEffect } from "react";
import "./MainFeed.css";
const MainFeed = ({ searchResults }) => {
  const getDate = (mydate) => {
    let hi = new Date(mydate);
    let c,
      b,
      a = [hi.getFullYear(), "-", hi.getMonth() + 1, "-", hi.getDate()];
    return [c, b, a];
  };

  return (
    <div className="mainContent">
      {searchResults.length > 0 ? (
        searchResults.map((i, key) => {
          return (
            <div className="post" key={key}>
              {" "}
              <div className="card-content">
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <h3>{i.name}</h3>
                  <h3>{Math.ceil(i.rating / 10)}</h3>
                </div>

                <h4>Release Date:{getDate(i.first_release_date)}</h4>
                <p className="para">summary:{i.summary}</p>
              </div>
            </div>
          );
        })
      ) : (
        <article>
          <p>No Matching Posts</p>
        </article>
      )}
    </div>
  );
};

export default MainFeed;
