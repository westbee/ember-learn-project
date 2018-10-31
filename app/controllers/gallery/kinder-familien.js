import Controller from '@ember/controller';
import { map } from '@ember/object/computed';

export default Controller.extend({
  mappedModel: map('model', function(item) {
    return item.getProperties('src', 'ratio', 'categoryId');
  })
});
