import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  // model() {
  //   return this.store.findAll('gallery');
  // }
  model() {
    return RSVP.hash({
      galleries: this.store.findAll('gallery'),
      photos: this.store.findAll('photo'),
      prices: this.store.findAll('price')
    });
  }
});
