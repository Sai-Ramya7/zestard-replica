import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import PageHeader from './../components/page-header';
import Technology from './../components/technology'
import ServiceTech from './../components/serviceTech'
import SEO from './../components/seo'

class ServiceTemplate extends Component {
  
    render() {
      const data = this.props.data
      const acfData = data.allWordpressPage.edges[0].node.acf;
      const sertech = data.allWordpressPage.edges[0].node
      return (
        <Layout>
        <SEO title={acfData.header_page_title} />
            <div id="page" className="site">
                <div id="content" className="site-content">
                    <PageHeader
                        headerMascot = {acfData.header_mascot}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
                    />
                    {acfData.sl_content_module_page !== null &&
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
                    </div>}
                    {sertech !== null &&
                      <ServiceTech 
                        sections = {sertech}
                      />
                    }
                </div>
            </div>
        </Layout>
        )
  }

}
export default ServiceTemplate

export const query = graphql`
query($id: Int!) {
  allWordpressPage(filter: {wordpress_id: {eq: $id}}) {
    edges {
      node {
        slug
        title
        wordpress_id
        acf {
          header_page_title
          header_sub_text
          header_section_title
          header_mascot {
            source_url
            localFile {
              childImageSharp {
                fixed {
                  base64
                  tracedSVG
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  originalName
                }
              }
            }
          }
          
          sl_content_module_page {
            sl_service_name
            sl_service_sub_text
            sl_service_page_link
            sl_service_image {
              source_url
              title
              wordpress_id
              localFile {
                childImageSharp {
                  sizes {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
        }
        childWordPressAcfTechAboutTechnology {
          tech_about_heading
          tech_about_content
          tech_about_right_content
        }
        childWordPressAcfTechServices {
          tech_services_heading
          tech_sub_heading
          tech_services_list {
            tech_service_name
            tech_service_description
          }
        }
        childWordPressAcfTechPortfolio {
          tech_portfolio_heading
          tech_portfolio_sub_heading
          tech_portfolio_link
          tech_portfolio_item1
          tech_portfolio_item2
        }
        childWordPressAcfTechKeyBenefits {
          tech_keyb_heading
          tech_key_features_repeater {
            tech_key_features
          }
        }
      }
    }
  }
}
`