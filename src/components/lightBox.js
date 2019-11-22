import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image"

import Modal from 'react-bootstrap/Modal'

export default class Lightbox extends Component {
  static propTypes = {
    EventImages: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      selectedImage: null,
      selIndex: null,
    };
  }
    componentDidMount = () => {
        window.addEventListener('keyup', this.handleKeyUp, false)
    }

    componentWillUnmount = () => {
        window.removeEventListener('keyup', this.handleKeyUp, false)
    }

    handleClick = (e, image, index) => {
        e.preventDefault()
        this.setState({ showLightbox: true, selectedImage: image, selIndex: index })
        // this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
        console.log('sel', this.state.selectedItem)
        console.log('ind', this.state.selIndex)
    }

    closeModal = () => {
        this.setState({ showLightbox: false })
    }
    
    goBack = () => {
        this.setState({ selIndex: this.state.selIndex - 1 })
    }
    
    goForward = () => {
        this.setState({ selIndex: this.state.selIndex + 1 })
    }
    
    handleKeyUp = e => {
        e.preventDefault()
        const { keyCode } = e
        if (this.state.showLightbox) {
            if (keyCode === 37) {
                // Left Arrow Key
                if (this.state.selIndex > 0) {
                    this.setState({ selIndex: this.state.selIndex - 1 })
                }
            }
            if (keyCode === 39) {
            // Right Arrow Key
                if (this.state.selIndex < this.props.EventImages.length - 1) {
                    this.setState({ selIndex: this.state.selIndex + 1 })
                }
            }
            if (keyCode === 27) {
            // Escape key
            this.setState({ showLightbox: false })
            }
        }
    }
  

  render() {
    const { EventImages } = this.props;
    // console.log('EventImages', EventImages)
    const { showLightbox, selIndex } = this.state;
    return (
      <Fragment>
        <div className="lightboxContainer">
          {EventImages.map((image, i) => (
            <div className="previewButton" key={i} type="button"
              onClick={e => this.handleClick(e, image, i) }>
                  {/* <img src={image.source_url} alt="img" /> */}
                {image !== null &&
                <Img fluid= {image.localFile.childImageSharp.fluid}/>
                }
            </div>
          ))}
        </div>
        {showLightbox && (
        <Modal show={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>
        <div className="slbElement">
          <div className="slbOverlay"></div>
          <div className="slbWrapOuter">
            <div className="slbWrap">
              <div className="slbContentOuter">
                <div className="slbContent">
                  <div className="slbImageWrap">
                    {/* <Img fluid= {EventImages[selIndex].localFile.childImageSharp.fluid}/> */}
                  {EventImages !== null &&
                    <img src={EventImages[selIndex].source_url} alt="img" className="slbImage"/>
                  }
                  </div>
                </div>
                  <button type="button" title="Close" className="slbCloseBtn "
                  onClick={this.closeModal}>×</button>
                <div className="slbArrows">
                  <button type="button" title="Previous" className="prev slbArrow"
                   onClick={this.goBack} disabled={selIndex === 0}>
                      <i className='fas fa-caret-left'></i>
                   </button>
                  <button type="button" title="Next" className="next slbArrow"
                   onClick={this.goForward} disabled={selIndex === EventImages.length - 1}>
                     <i className='fas fa-caret-right'></i>
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Modal>
        )}
      </Fragment>
    );
  }
}
