import Ember from 'ember';
import layout from '../../templates/components/basic-table/section';

export default Ember.Component.extend({
  layout,

  rowComponent: 'basic-table/row',
  cellComponent: 'basic-table/cell',
  cellTagName: 'td'
});
