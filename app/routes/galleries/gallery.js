import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('gallery', params.gallery_id);
  },
  async afterModel(model) {
    await model.get('photos');
    return this._super(...arguments);
  }
});
