import Controller from '@ember/controller';
import { map } from '@ember/object/computed';

import { computed } from '@ember/object';
export default Controller.extend({
  // mappedPhotos: map('model.photos', function(photo) {
  //   return photo;
  // }),
  // The plugin cannot understand EmberData hasMany relationships and requires an actual array
  modelArray: computed('model.photos', function() {
    return this.get('model.photos').toArray();
  })
});
