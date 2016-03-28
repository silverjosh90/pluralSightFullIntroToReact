var Link = require('react-router').Link

var PageNotFound = React.createClass({
  render: function() {
    return (
      <div>
      <h1> Page not found! </h1>
      <Link to="home"> Go Home </Link>
      </div>
    )
  }
})

module.exports = PageNotFound
