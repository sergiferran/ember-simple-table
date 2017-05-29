import Ember from 'ember';
import layout from '../../templates/components/basic-table/cell';

export default Ember.Component.extend({
  layout,

  tagName: 'td',
  attributeBindings: ['colspan']
});