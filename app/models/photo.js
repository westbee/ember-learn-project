import DS from 'ember-data';

export default DS.Model.extend({
  src: DS.attr('string'),
  ratio: DS.attr('number'),
  galleryId: DS.attr('number'),
  href: DS.attr('string'),

  gallery: DS.belongsTo('gallery')

});
