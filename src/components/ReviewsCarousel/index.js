import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onClickOnRightArrow = () => {
    const {reviewList} = this.props
    const {reviewIndex} = this.state
    if (reviewIndex < reviewList.length - 1) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex + 1}))
    }
  }

  getSpecificReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="carousel-container">
        <img src={imgUrl} className="profile-image" alt="username" />
        <p className="username">{username}</p>
        <p className="description">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickOnLeftArrow = () => {
    const {reviewIndex} = this.state
    if (reviewIndex > 0) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex - 1}))
    }
  }

  render() {
    const {reviewList} = this.props
    const {reviewIndex} = this.state
    const initialReview = reviewList[reviewIndex]
    return (
      <div className="main-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            onClick={this.onClickOnLeftArrow}
            testId="leftArrow"
            className="arrow-buttons"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrows"
              alt="left arrow"
            />
          </button>
          {this.getSpecificReview(initialReview)}
          <button
            type="button"
            onClick={this.onClickOnRightArrow}
            testId="rightArrow"
            className="arrow-buttons"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrows"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
