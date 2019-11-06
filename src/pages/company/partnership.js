import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../../components/layout"
import PageHeader from './../../components/page-header';

class Partnership extends Component {
  
    render() {
      const data = this.props.data
      console.log(data)
      const acfData = data.wordpressPage.acf;
      const offshore = data.wordpressPage.childWordPressAcfGenRightImageAndLeftDescription;
      return (
        <Layout>
          <div id="page" className="site ">
            <div id="content" className="site-content">
              <PageHeader
                headerMascot = {acfData.header_mascot.source_url}
                headerSubText = {acfData.header_sub_text}
                headerSectionTitle={acfData.header_section_title}
                headerPageTitle={acfData.header_page_title}
              />
              <section>
                <div className="partner-type  offshare">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-7">
                        <h2 className="title">{offshore.gen_left_heading}</h2>
                        <div 
                          dangerouslySetInnerHTML = {{ __html: offshore.gen_left_description }}
                        />
                      </div>
                      <div className="col-md-5 col-lg-5">
                        {offshore.gen_two_sec_image !== null &&
                          <img src={offshore.gen_two_sec_image.source_url} alt="img" />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Layout>
        )
  }

}
export default Partnership

export const query = graphql`
{
  wordpressPage(wordpress_id: {eq: 103}) {
    acf {
      header_page_title
      header_sub_text
      header_section_title
      header_mascot {
        source_url
      }
    }
    childWordPressAcfGenRightImageAndLeftDescription {
      gen_two_sec_image {
        source_url
      }
      gen_left_heading
      gen_left_description
    }
  }
}
`