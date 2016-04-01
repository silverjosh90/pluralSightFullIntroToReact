var AuthorActions = require('../../actions/authorActions')
var AuthorStore = require('../../stores/authorStore')
var AuthorsList = require('./authorsList')
var Link = require('react-router').Link



var AuthorPage = React.createClass({
  getInitialState: function() {
    return {

      authors: AuthorStore.getAllAuthors()
    }
  },

  render: function() {
    return (
      <div>
        <h1> Authors </h1>
        <AuthorsList authors={this.state.authors} />
        <Link to="/manageauthor" className="btn btn-primary"> Edit Authors </Link>
      </div>
    )
  }
})

module.exports = AuthorPage
