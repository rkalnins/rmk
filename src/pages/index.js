import React from "react";
import Link from "gatsby-link";

export default () => (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>Roberts Kalnins</h1>
    <div>
      <p>
        I am Roberts Kalnins.
      </p>
      <blockquote>
        <p>
          This is a website.
          <em>
            Testing.....
          </em>
        </p>
      </blockquote>
    </div>
    <p>Posted April 09, 2011</p>
    <div>
      <Link to="/newpage/">Link to another page</Link>
    </div>
    <div>
      <Link to="/page-3/">Link to page 3</Link>
    </div>
  </div>
);
