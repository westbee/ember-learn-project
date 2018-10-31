import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('photo').then(function(portrait) {
      return portrait.filterBy('categoryId', 3);
    });
  }
});
