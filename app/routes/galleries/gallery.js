import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('gallery', params.gallery_id);
  },
  async afterModel(model) {
    return this.store.findAll('photo');
  }
});
