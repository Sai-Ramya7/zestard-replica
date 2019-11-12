import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../../components/layout"
import PageHeader from './../../components/page-header';
import Technology from './../../components/technology'

class HireDedicated extends Component {
  
    render() {
      const data = this.props.data
      console.log(data)
      const acfData = data.allWordpressPage.edges[0].node.acf;
      console.log('object', acfData)
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
                    <div className="technology-page">
                    {acfData.sl_content_module_page.map(( node, index ) => (
                       <Technology
                        serviceImage = {node.sl_service_image}
                        serviceName = {node.sl_service_name}
                        ServiceSubText = {node.sl_service_sub_text}
                        serviceTitle = {node.sl_service_image.title}
                        serLink = {node.sl_service_page_link}
                        key = {index}
                       />
                    ))}
                    </div>
                </div>
            </div>
        </Layout>
        )
  }

}
export default HireDedicated

export const query = graphql`
{
    allWordpressPage(filter: {wordpress_id: {eq: 1651}}) {
        edges {
          node {
            slug
            acf {
              header_page_title
              header_sub_text
              header_section_title
              header_mascot {
                source_url
              }
              sl_content_module_page {
                sl_service_name
                sl_service_sub_text
                sl_service_page_link
                sl_service_image {
                  source_url,
                  title,
                  wordpress_id
                }
              }
            }
          }
        }
    }
}
`