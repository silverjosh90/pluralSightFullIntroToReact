var Router = require('react-router').Router
var Redirect = require('react-router').Redirect;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory
var Header = require('./components/common/header')
var PageNotFound = require('./components/common/pagenotfound')
var App = require('./components/app')
var AuthorPage = require('./components/authors/authorPage')
var AboutPage = require('./components/about/aboutpage')
var ManageAuthors= require('./components/authors/manageAuthorPage')
var HomePage = require('./components/homePage')



var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="authors" component={AuthorPage} />
      <Route path="manageauthor" component={ManageAuthors} />
      <Route path="authors/:id" component={ManageAuthors}/>
      <Route path="about" component={AboutPage} />
      <Route path="home" component={HomePage}/>
      <Redirect from="home-derp" to="home" />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
);
    

module.exports = routes;
