var Link = require('react-router').Link


var AuthorsList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  render: function() {
    var createAuthorRow = function(author) {
      return (
        <tr key={author.id}>
          <td><Link to={`/authors/${author.id}`}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      )
    }
    return (

      <table className="table">
        <thead>
          <tr>
          <th> ID </th>
          <th> Name </th>
          </tr>
        </thead>
        <tbody>
          {this.props.authors.map(createAuthorRow, this)}
        </tbody>
      </table>

    )
  }
})

module.exports = AuthorsList
