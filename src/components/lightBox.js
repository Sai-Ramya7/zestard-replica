import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
// import { Dialog } from '@reach/dialog';
// import { Dialog } from 'react-bootstrap/Dialog';
import Modal from 'react-bootstrap/Modal'
// import '@reach/dialog/styles.css';

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
                if (this.state.selectedImage > 0) {
                    this.setState({ selectedImage: this.state.selectedImage - 1 })
                }
            }
            if (keyCode === 39) {
            // Right Arrow Key
                if (this.state.selectedImage < this.props.images.length - 1) {
                    this.setState({ selectedImage: this.state.selectedImage + 1 })
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
    const { selectedImage, showLightbox, selIndex } = this.state;
    return (
      <Fragment>
        <div className="lightboxContainer">
          {EventImages.map((image, i) => (
            <div className="previewButton" key={i} type="button"
              onClick={e => this.handleClick(e, image, i) }>
                {image !== null &&
                  <img src={image.source_url} alt="img" />
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
            {/* <div>
              <button className="slbCloseBtn" onClick={this.closeModal}>
              X
              </button>
              <div>
                <button onClick={this.goBack} disabled={selIndex === 0}>
                  Previous
                </button>
                <button onClick={this.goForward} disabled={selIndex === EventImages.length - 1}>
                  Next
                </button>
              </div>
            </div>
            {EventImages !== null &&
              <img src={EventImages[selIndex].source_url} alt="img" />
            } */}
        </Modal>
        )}
      </Fragment>
    );
  }
}



{/* <div class="slbElement">
  <div class="slbOverlay"></div>
  <div class="slbWrapOuter">
    <div class="slbWrap">
      <div class="slbContentOuter">
        <div class="slbContent">
          <div class="slbImageWrap">
            <img class="slbImage" src="https://postyoulike.com/zestard/wp-content/uploads/2019/05/cricket_tournament-min-1.png" style="max-height: 404px;" />
          </div>
        </div>
          <button type="button" title="Close" class="slbCloseBtn ">×</button>
        <div class="slbArrows">
          <button type="button" title="Previous" class="prev slbArrow">Previous</button>
          <button type="button" title="Next" class="next slbArrow">Next</button>
        </div>
      </div>
    </div>
  </div>
</div> */}