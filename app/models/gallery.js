import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  pic: DS.attr('string'),
  link: DS.attr('string'),
  prg1: DS.attr('string'),
  prg2: DS.attr('string'),

  photos: DS.hasMany('photo')
});
