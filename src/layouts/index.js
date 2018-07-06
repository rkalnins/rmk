import React from "react";
import Link from "gatsby-link";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1.0rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);

const FooterLinks = props => (
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding:  `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Roberts Kalnins</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  {children()}
  <footer style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <br/>
    <ul style={{ listStyle: `none`, float: 'left' }}>
      <FooterLinks to="/">Home</FooterLinks>
      <FooterLinks to="/about/">About</FooterLinks>
      <FooterLinks to="/contact/">Contact</FooterLinks>
    </ul>
  </footer>
  </div>
);
