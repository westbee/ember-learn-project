import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('photo').then(function(kinder) {
      return kinder.filterBy('categoryId', 2);
    });
  }
});
