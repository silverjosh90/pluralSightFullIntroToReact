var AuthorApi = require('../../api/authorApi')
var AuthorsList = require('./authorsList')
var Link = require('react-router').Link



var AuthorPage = React.createClass({
  getInitialState: function() {
    return {
      authors: []
    }
  },
  componentDidMount: function() {
    if(this.isMounted()){
    this.setState({authors: AuthorApi.getAllAuthors()})
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
