// Service Layout

import React, { Component } from "react"
import { Link } from "gatsby"
import { removePre } from './../util/common'
import Img from "gatsby-image"
class Technology extends Component {
    
    render() {
        const {
            serviceImage,
            serviceName,
            ServiceSubText,
            serLink
        } = this.props;
        return (
            <section>
                <div className="technology-odd">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 tech-img">
                            { serviceImage!== null && serviceImage.localFile !== null && serviceImage.localFile.childImageSharp !== null &&
                            <Img sizes={serviceImage.localFile.childImageSharp.sizes} alt="tech_img" 
                            style={{width:`80%`}}
                            />
                            }
                            </div>
                            <div className="col-md-7 col-lg-8 tech-content">
                                <h2 className="title">
                                    <Link to={`/${removePre(serLink)}`}>{serviceName}</Link>
                                </h2>
                                <div dangerouslySetInnerHTML={{ __html: ServiceSubText }} />
                                <Link to={`/${removePre(serLink)}`} className="btn btn-primary">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}


export default Technology