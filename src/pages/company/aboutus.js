import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../../components/layout"
import PageHeader from './../../components/page-header';

class AboutUs extends Component {
  
    render() {
      const data = this.props.data
      console.log(data)
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
            <div id="page" className="site about-page">
                <div id="content" className="site-content">
                    <PageHeader
                        headerMascot = {acfData.header_mascot.source_url}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
                    />
                </div>
            </div>
        </Layout>
        )
  }

}
export default AboutUs

export const query = graphql`
{
    wordpressPage(wordpress_id: {eq: 163}) {
        acf {
          header_page_title
          header_sub_text
          header_section_title
          header_mascot {
            source_url
          }
        }
    }
}
`