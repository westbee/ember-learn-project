import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  package: DS.attr()
});
