const React = require('react');
const MovieReviews = require('./MovieReviews')

class LatestMovieReviewsContainer extends React.Component {
  constructor () {
    super();

    this.state = {
      reviews: []
    }
  }

  render () {
    const { reviews } = this.state
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={ reviews }/>
      </div>
    )
  }
}

module.exports = LatestMovieReviewsContainer;