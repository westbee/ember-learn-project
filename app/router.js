import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('preise');
  this.route('info');
  this.route('contact');

  this.route('galleries', function() {
    this.route('gallery', { path: '/:gallery_id' });
  });

  // this.route('gallery', function() {
  //   this.route('neugeborene-babybauch');
  //   this.route('kinder-familien');
  //   this.route('portraitphotographie');
  // });
});

export default Router;
