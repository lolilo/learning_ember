import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('about');
  this.resource('speakers', function() {
    this.route('show', {path: ':speaker_id'});
  });
});

export default Router;
