import Ember from 'ember';
import layout from '../../templates/components/basic-table/section';

export default Ember.Component.extend({
  layout,

  tagName: 'tbody',
  rowComponent: 'basic-table/row',
  cellComponent: 'basic-table/cell',
  cellTagName: 'td'
});
