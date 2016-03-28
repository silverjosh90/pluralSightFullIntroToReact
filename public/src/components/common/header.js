var Link = require('react-router').Link

var Header = React.createClass({
  render: function() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src="" />
          </a>
          <ul className="nav navbar-nav">
            <li><Link to="/home" refresh="true">Home</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

        </div>
      </nav>
    )
  }
})

module.exports = Header
