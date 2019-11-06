import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import PageHeader from './../components/page-header';

class ContactUs extends Component {
  
  render() {
    const data = this.props.data
    console.log(data)
    const acfData = data.wordpressPage.acf;
    // console.log(data)
    return (
      <Layout>
        <div id="page" className="site-header">
          <div id="content" className="site-content">
            <PageHeader
              headerMascot = {acfData.header_mascot.source_url}
              headerSubText = {acfData.header_sub_text}
              headerSectionTitle={acfData.header_section_title}
              headerPageTitle={acfData.header_page_title}
            />
            <section>
              <div className="contact-form">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 col-md-10 col-lg-10 col-sm-11 col-xs-11 col-11 mx-auto card">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 form-detail col-xs-12">
                          <div dangerouslySetInnerHTML={{ __html: acfData.contact_form_area }} />
                          {/* <div className="frm_forms " id="frm_form_1_container">
                            <form enctype="multipart/form-data" method="post"
                            className="frm-show-form  frm_js_validate  frm_pro_form  frm_ajax_submit "
                            id="form_contact-form"></form>
                          </div> */}
                          <form method="post" action="#" className="frm_forms">
                            <label className="form-group">
                              Full Name
                              <input type="text" name="name" id="name" className="form-control" />
                            </label>
                            <label className="form-group">
                              Email
                              <input type="email" name="email" id="email" className="form-control" />
                            </label>
                            <label className="form-group">
                              Phone
                              <input type="text" name="phone" id="phone" className="form-control" />
                            </label>
                            <label className="form-group">
                              Subject
                              <input type="text" name="subject" id="subject" className="form-control" />
                            </label>
                            <label className="form-group">
                              Message
                              <textarea name="message" id="message" rows="5" className="form-control" />
                            </label>
                            <button className="btn-primary" type="submit">Send</button>
                          </form>
                        </div>
                        <div className="is-submitted">
                        <i aria-hidden="true" className="fa fa-check"></i>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 address-detail col-xs-12">
                        <div dangerouslySetInnerHTML={{ __html: acfData.contact_content_right }} />
                        </div>
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
export default ContactUs

export const query = graphql`
{
  wordpressPage(wordpress_id: {eq: 57}) {
    acf {
      header_page_title
      header_sub_text
      header_section_title
      header_mascot {
        source_url
      }
      contact_content_right
      contact_form_area
    }
  }
}
`