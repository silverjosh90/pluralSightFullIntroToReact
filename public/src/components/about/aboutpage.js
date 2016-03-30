var React= require('react')
var derp = confirm('hello')
var About = React.createClass({
  statics: {
  onenter: function(home, derp, callback) {
    if (!derp) {
      transition.to('home');
    }
    else {
      return callback
    }
  }
},
  render: function() {
    return(
      <div>
        <ul>
          <li>Hello</li>
          <li>Mr</li>
          <li>Cabana</li>
          <li>Boy</li>
        </ul>
      </div>
    )
  }
})

module.exports = About
