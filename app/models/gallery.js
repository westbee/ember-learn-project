import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  pic: DS.attr('string'),
  link: DS.attr('string'),

  photos: DS.hasMany('photo', { inverse: 'gallery' })
});
