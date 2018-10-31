import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('photo').then(function(newborn) {
      return newborn.filterBy('categoryId', 1);
    });
  }
});
