var Dispatcher = require('../dispatcher/appDispatcher')
var ActionType = require('../constants/actionTypes')
var EventEmitter = require('events').EventEmitter
var Assign = require('object-assign')
var CHANGE_EVENT = 'change';
var _authors = [];
var _ = require('lodash');

var AuthorStore = Assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function() {
    return _authors;
  },

  getAuthorById: function(id) {

    return _.find(_authors, {id: id})
  }
});



Dispatcher.register(function(action){
  
  switch(action.actionType){
    case ActionType.CREATE_AUTHOR:
      _authors.push(action.author)
      AuthorStore.emitChange();
  }
})


module.exports = AuthorStore;
