import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../../components/layout"
import PageHeader from './../../components/page-header';

class DigitalMarketing extends Component {

  render() {
    const data = this.props.data
    console.log(data)
    const acfData = data.allWordpressPage.edges[0].node.acf;
    const tech = data.allWordpressPage.edges[0].node.childWordPressAcfTechAboutTechnology;
    const service = data.allWordpressPage.edges[0].node.childWordPressAcfTechServices;
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
            <section>
              <div className="development-desc">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12 col-12">
                      <h2>{tech.tech_about_heading}</h2>
                      <div className="about-tech" 
                        dangerouslySetInnerHTML={{ __html: tech.tech_about_content }} />
                    </div>
                    <div id="right-desc" 
                    className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12 col-12"
                    dangerouslySetInnerHTML={{ __html: tech.tech_about_right_content }}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="development-service">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                      <h2>{service.tech_services_heading}</h2>
                      <h6 dangerouslySetInnerHTML={{ __html: service.tech_sub_heading }} />
                    </div>
                  </div>
                  <div className="row">
                  {service.tech_services_list.map(( node ) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mobile mb-5">
                      <div className="info">
                        <div className="head">
                          <h3 className="title">{node.tech_service_name}</h3>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: node.tech_service_description }} />
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </section>  
            <section>
              <div className="development-benefits">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                      <h2>Key Benefits of {benefits.tech_keyb_heading}</h2>
                    </div>
                  </div>
                  <div className="benefites-work">
                    <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
                      <div className="row">
                      {benefits.tech_key_features_repeater.map(( node ) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                          <div className="benefites-grp">
                            <span>
                              <div className="benefites-image">
                                <img alt="" 
                                src="https://www.zestard.com/wp-content/themes/zestard/images/technology/benefite-icon.png" />
                                {node.tech_key_features}
                              </div>
                            </span>
                          </div>
                        </div>
                      ))}
                      </div>
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
export default DigitalMarketing

export const query = graphql`
{
  allWordpressPage(filter: {wordpress_id: {eq: 1600}}) {
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