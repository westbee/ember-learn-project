import Controller from '@ember/controller';
import { map } from '@ember/object/computed';

export default Controller.extend({
  // mappedPhotos: map('model.photos', function(item) {
  //   return item.getProperties('src', 'ratio', 'galleryId', 'href');
  // })
  mappedPhotos: map('model.photos', function(photos) {
    return photos;
  })
});
