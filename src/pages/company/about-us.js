import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import PageHeader from '../../components/page-header';
import { serviceUrl } from './../../util/common';

class AboutUs extends Component {
  
    render() {
      const data = this.props.data
      console.log(data)
      const acfData = data.wordpressPage.acf;
      const whoweare = data.wordpressPage.childWordPressAcfGenRightVideoAndLeftDescription;
      const ourValues = data.wordpressPage.childWordPressAcfGenGridBoxes;
      const industry = data.allWordpressAcfOptions.nodes[0].options;
      const whychoose = data.wordpressPage.childWordPressAcfGenLeftIconAndRightDescription;
      const footer = data.wordpressAcfOptions.options;
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
              <section>
                <div className="who-we-are">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-7">
                        <h2 className="title">{whoweare.gen_heading_rvld}</h2>
                        <div dangerouslySetInnerHTML = {{ __html: whoweare.gen_description_rvld }} />
                      </div>
                      <div className="col-md-5 col-lg-5" 
                        dangerouslySetInnerHTML = {{ __html: whoweare.gen_video_rvld }}
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="our-values">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <h2 className="title">{ourValues.gen_grid_box_title}</h2>
                      </div>
                    </div>
                    <div className="row">
                      {ourValues.gen_grid_boxes_rep.map(( node, index ) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 our-values-box-wrapper"
                        key={index}>
                          <div className="our-values-box text-center">
                            <div className="icon">
                              {node.gen_icon_gb !== null &&
                                <img src={node.gen_icon_gb.source_url} alt="img" className="normal" />
                              }
                            </div>
                            <h3>{node.gen_title_gb}</h3>
                            <p>{node.gen_description_gb}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="industry">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="industry-wrapper m-xs-0 m-sm-0 mb-sm-4">
                          <h5>{industry.pt_left_abt_sec_title}</h5>
                          <h2>{industry.pt_left_sec_sub_title}</h2>
                          <div className="row m-0">
                            {industry.pt_abt_partners_logo.map((node, index) => (
                              <div className="col-md-4 pr-lg-4 pl-md-0 mb-md-4 px-xs-2 pb-xs-4 col-6 mobile"
                              key={index}>
                              <div className="card shadow-sm">
                                <div className="card-body">
                                  {node.pt_abt_partners_logo !== null &&
                                    <img src={node.pt_abt_partners_logo.source_url} alt="logo" />
                                  }
                                </div>
                              </div>
                            </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="trusted_wrapper m-xs-0  m-sm-0 m-md-0 mt-xs-4 mt-sm-4">
                          <h5>{industry.pt_right_sec_title}</h5>
                          <h2><b>{industry.pt_right_sec_sub_title}</b></h2>
                          <h6>{industry.pt_right_sec_description}</h6>
                          <div className="trutesd-grp">
                            <div className="row">
                            {data.allWordpressAcfOptions.nodes[0].options.pt_right_stats.map((options, index) => (
                              <div className="col-lg-6 col-md-6 col-sm-6 col-6" key={index}>
                                <h2>{options.pt_right_stats_label}</h2>
                                <h6>{options.pt_right_stats_description}</h6>
                              </div>
                            ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className="why-choose">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className="title">Why Choose Us?</h3>
                      </div>
                    </div>
                    <div className="row">
                      {whychoose.lird_icons___description.map((node, index) => (
                        <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                        <div className="box">
                          <div className="row">
                            <div className="col-md-3 col-sm-3 col-3 text-right ">
                              {node.lird_icon !== null &&
                                <img src={node.lird_icon.source_url} alt=""/>
                              }
                            </div>
                            <div className="col-md-9 col-sm-9 col-9">
                              <h5>{node.lird_title}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <div className="footer-provide">
                <div className="container">
                  <div className="row">
                  <div className="col-md-8 ml-auto mr-auto text-center">
                    <div
                      dangerouslySetInnerHTML = {{ __html: footer.cta_mod_description }}
                    />
                    <a className="get-in-touch btn btn-primary" target="_blank"
                    href={`/${serviceUrl(footer.cta_mod_link)}`}>
                      Get In Touch
                    </a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
        )
  }

}
export default AboutUs

export const query = graphql`
{
  allWordpressAcfOptions {
    nodes {
      options {
        pt_right_sec_title
        pt_right_sec_sub_title
        pt_right_sec_description
        pt_right_stats {
          pt_right_stats_description
          pt_right_stats_label
        }
        pt_left_sec_sub_title
        pt_left_abt_sec_title
        pt_abt_partners_logo {
          pt_abt_partners_logo {
            source_url
          }
        }
      }
    }
  }
  wordpressPage(wordpress_id: {eq: 163}) {
    acf {
      header_page_title
      header_sub_text
      header_section_title
      header_mascot {
        source_url
      }
    }
    childWordPressAcfGenRightVideoAndLeftDescription {
      gen_description_rvld
      gen_heading_rvld
      gen_video_rvld
    }
    childWordPressAcfGenGridBoxes {
      gen_grid_box_title
      gen_grid_boxes_rep {
        gen_description_gb
        gen_title_gb
        gen_icon_gb {
          source_url
        }
      }
    }
    childWordPressAcfGenLeftIconAndRightDescription {
      lird_icons___description {
        lird_title
        lird_icon {
          source_url
        }
      }
    }
  }
  wordpressAcfOptions {
    options {
      cta_mod_description
      cta_mod_link
    }
  }
}
`