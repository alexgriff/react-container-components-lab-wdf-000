const React = require('react');
const MovieReviews = require('./MovieReviews')

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };

  }

  render() {
    const { reviews } = this.state;

    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={ reviews } />
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;