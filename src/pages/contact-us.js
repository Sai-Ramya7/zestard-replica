import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import PageHeader from './../components/page-header';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
const fields = ['fullname', 'email', 'phone', 'subject', 'message']
class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: "",
      fullname: null,
      email: null,
      phone: null,
      subject: null,
      message: null,
      errors: {
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    };
  }
  
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullname': 
        errors.fullname = 
          value.length === 0
            ? 'This field cannot be blank.'
            : '';
        break;
      case 'email': 
        errors.email =
          validEmailRegex.test(value)
          // value.length === 0
            ? ''
            : 'Email is not valid!';
        break;
      case 'phone': 
        errors.phone = 
          value.length < 10
            ? 'Phone is invalid'
            : '';
        break;
      case 'subject': 
      errors.subject = 
        value.length === 0
          ? 'This field cannot be blank.'
          : '';
      break;
      case 'message': 
        errors.message = 
          value.length === 0
            ? 'This field cannot be blank.'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
      this.setState({
        status: "Thank you. We've received your Inquiry. We'll get back to you soon."
      });
      
    }else{
      console.error('Invalid Form')
      this.setState({
        status: 'There was a problem with your submission. Errors are marked below.'
      });
    }
  }

  


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
                          {/* <div dangerouslySetInnerHTML={{ __html: acfData.contact_form_area }} /> */}
                          <h2>We'd love to hear from you!</h2>
                          <h4>Brief us your requirements below, and let's connect.</h4>
                          <h3>{this.state.status}</h3>
                          <form method="post" action="#" className="frm_forms"
                          onSubmit={this.handleSubmit} noValidate>
                            <label className="form-group">
                              Full Name <span>*</span>
                              <input type="text" name="fullname" id="fullname" 
                              className="form-control fullname" onChange={this.handleChange} noValidate />
                              {this.state.errors.fullname.length > 0 && 
                              <span className='error'>{this.state.errors.fullname}</span>}
                            </label>
                            <label className="form-group">
                              Email <span>*</span>
                              <input type="email" name="email" id="email" 
                              className="form-control email" onChange={this.handleChange} noValidate />
                              {this.state.errors.email.length > 0 && 
                              <span className='error'>{this.state.errors.email}</span>}
                            </label>
                            <label className="form-group">
                              Phone <span>*</span>
                              <input type="text" name="phone" id="phone" 
                              className="form-control phone" onChange={this.handleChange} noValidate />
                              {this.state.errors.phone.length > 0 && 
                              <span className='error'>{this.state.errors.phone}</span>}
                            </label>
                            <label className="form-group">
                              Subject <span>*</span>
                              <input type="text" name="subject" id="subject" 
                              className="form-control subject" onChange={this.handleChange} noValidate />
                              {this.state.errors.subject.length > 0 && 
                              <span className='error'>{this.state.errors.subject}</span>}
                            </label>
                            <label className="form-group">
                              Message <span>*</span>
                              <textarea name="message" id="message" rows="5" 
                              className="form-control message" onChange={this.handleChange} noValidate />
                              {this.state.errors.message.length > 0 && 
                              <span className='error'>{this.state.errors.message}</span>}
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