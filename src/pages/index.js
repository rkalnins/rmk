import React from "react";
import Link from "gatsby-link";

export default () => (
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <div>
      <p>
        I am Roberts Kalnins.
      </p>
    </div>
    <div>
      <Link to="/newpage/">Link to another page</Link>
    </div>
    <div>
      <Link to="/page-3/">Link to page 3</Link>
    </div>
  </div>
);
