import React from "react";
import Link from "gatsby-link";
import Container from "../components/container"

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

export default ({ children, data }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding:  `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    <Container>
      {children()}
    </Container>

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

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`
  ;
