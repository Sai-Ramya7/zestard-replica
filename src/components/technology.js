import React, { Component } from "react"
import { Link } from "gatsby"
import { headerItemsUrl } from './../util/common'
class Technology extends Component {
    
    render() {
        const {
            serviceImage,
            serviceName,
            ServiceSubText,
            serLink
        } = this.props;
        const serviceLink = serLink.split('/');
        const link = serviceLink[serviceLink.length-2]
        return (
            <section>
                <div className="technology-odd">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 tech-img">
                            { serviceImage!== null &&
                            <img src={serviceImage.source_url} alt=""/>
                            }
                            </div>
                            <div className="col-md-7 col-lg-8 tech-content">
                                <h2 className="title">
                                    <Link to={`/${headerItemsUrl(serLink)}`}>{serviceName}</Link>
                                </h2>
                                <div dangerouslySetInnerHTML={{ __html: ServiceSubText }} />
                                <Link to={`/${headerItemsUrl(serLink)}`} className="btn btn-primary">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}


export default Technology