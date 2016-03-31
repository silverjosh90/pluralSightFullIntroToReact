
var AuthorInput = require('./authorinput')

AuthorForm = React.createClass({
  render: function()  {
    return (

      <form onSubmit={this.props.onClick}>

      <AuthorInput name="firstName" placeholder="First Name" value={this.props.author.firstName} onChange={this.props.onChange}/>
      <br />

      <AuthorInput  name="lastName"  placeholder="Last Name" value={this.props.author.lastName} onChange={this.props.onChange}/>

      <br/>
      <input type="submit" value="save" onClick={this.props.onSave} className="btn btn-default"/>
      </form>

    )
  }
})

module.exports = AuthorForm
