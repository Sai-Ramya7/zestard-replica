import React from "react";
// import { Link } from 'gatsby';

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './../assets/scss/index.scss'
// import Button from 'react-bootstrap/Button';

// const data = this.props.data
// console.log(data)
// const acfData = data.wordpressPage.acf;
const IndexPage = () => (
  <Layout>
    
    {/* <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What is a World</p>
      <img src="https://source.unsplash.com/random/400x200" alt="..."/>
    </div>
    <button className="primary-button">Click me</button>
    <br />
    <Link external to="/about">About</Link> */}
    {/* <Button>about</Button> */}
  </Layout>
  //   <SEO title="Home" />
  //   <h1>Hi Gatsby</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </div>
  // React.createElement("div", null, "Hello World!")
  
)

export default IndexPage

