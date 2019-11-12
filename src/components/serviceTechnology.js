import React, { Component } from "react"
// import { Link } from "gatsby"
// import TechPortfolio from './techportfolio'

class ServiceTechnology extends Component {
    
    render() {
        const {
            techHeading,
            techContent,
            techContentRight
        } = this.props;
        // const data = this.props.data.allWordpressWpPortfolio;
        // console.log(data)
        return (
            <div>
                <section>
                    <div className="development-desc">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-12 col-12">
                                    <h2>{techHeading}</h2>
                                    <div className="about-tech" 
                                        dangerouslySetInnerHTML={{ __html: techContent }} />
                                    </div>
                                    <div id="right-desc" 
                                    className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-12 col-12"
                                    dangerouslySetInnerHTML={{ __html: techContentRight }}
                                    />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default ServiceTechnology

