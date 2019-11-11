import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../../components/layout"
import PageHeader from './../../components/page-header';
import TechnologyDetail from './../../components/technology-detail';

class DigitalMarketing extends Component {

  render() {
    const data = this.props.data
    console.log(data)
    const acfData = data.allWordpressPage.edges[0].node.acf;
    const tech = data.allWordpressPage.edges[0].node.childWordPressAcfTechAboutTechnology;
    const service = data.allWordpressPage.edges[0].node.childWordPressAcfTechServices;
    const portfolio = data.allWordpressPage.edges[0].node.childWordPressAcfTechPortfolio;
    const benefits = data.allWordpressPage.edges[0].node.childWordPressAcfTechKeyBenefits;
    return (
      <Layout>
        <div id="page" className="site technology-detail">
          <div id="content" className="site-content">
            <PageHeader
                headerMascot = {acfData.header_mascot.source_url}
                headerSubText = {acfData.header_sub_text}
                headerSectionTitle={acfData.header_section_title}
                headerPageTitle={acfData.header_page_title}
            />
            <TechnologyDetail 
                techHeading = {tech.tech_about_heading}
                techContent = {tech.tech_about_content}
                techContentRight = {tech.tech_about_right_content}
                serviceDetails = {service}
                serviceHeading = {service.tech_services_heading}
                serviceSubHeading = {service.tech_sub_heading}
                portfolioHeading = {portfolio.tech_portfolio_heading}
                portfolioLink = {portfolio.tech_portfolio_link}
                portfolioSubHeading = {portfolio.tech_portfolio_sub_heading}
                portfolioItem1 = {portfolio.tech_portfolio_item1}
                portfolioItem2 = {portfolio.tech_portfolio_item2}
                benefitsHeading = {benefits.tech_keyb_heading}
                benefitsDetails = {benefits}
            />
          </div>
        </div>
      </Layout>
    )
  }

}
export default DigitalMarketing

export const query = graphql`
{
  allWordpressPage(filter: {wordpress_id: {eq: 1501}}) {
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