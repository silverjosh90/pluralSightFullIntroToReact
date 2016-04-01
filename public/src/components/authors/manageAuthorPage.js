
var AuthorForm = require('./authorform')
var Router = require('react-router')
var hashHistory= Router.hashHistory
var AuthorActions = require('../../actions/authorActions')
var AuthorStore = require('../../stores/authorStore')
var toastr = require('toastr')

var ManageAuthorPage = React.createClass({

  getInitialState: function() {
    return {author: {
      id: '',
      firstName: '',
      lastName: ''
    }
  }
},
  componentWillMount: function() {
    authorId = this.props.params.id
    if (authorId) {
        this.setState({author: AuthorStore.getAuthorById(authorId)})
    }
  },

    contextTypes: {
      router: React.PropTypes.object
    },

    componentDidMount() {
      this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    },

    routerWillLeave(nextLocation) {
      // return false to prevent a transition w/o prompting the user,
      // or return a string to allow the user to decide:
      if (this.state.author.firstName !== '' || this.state.author.lastName !== '') {
        if(!confirm('Your work is not saved! Are you sure you want to leave?')){
          return false
        }
      }
    },


  setAuthorState: function(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value
    return this.setState({author: this.state.author})
  },
  render: function() {
    return (
      <div>
      <h1> Manage Author </h1>
      <AuthorForm onSave={this.formSubmitted} onChange={this.setAuthorState} author={this.state.author} />
      </div>
    )
  },
  formSubmitted: function(event) {
    toastr.options={
      'preventDuplicates': true,
      "positionClass": "toast-bottom-left"
    }
    if (!this.state.author.firstName || !this.state.author.lastName) {
      return toastr.warning('text fields cannot be blank')
    }
    event.preventDefault()
    hashHistory.push('/authors')
    AuthorActions.createAuthor(this.state.author)
    toastr.success('Author Saved')
  }
})

module.exports = ManageAuthorPage
