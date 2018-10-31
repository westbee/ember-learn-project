import DS from 'ember-data';

export default DS.Model.extend({
  photo: DS.hasMany('photo', { inverse: 'gallery' })
});
