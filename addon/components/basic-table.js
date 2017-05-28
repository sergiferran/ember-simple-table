import Ember from 'ember';
import layout from '../templates/components/basic-table';

export default Ember.Component.extend({
  layout,

  tagName: 'table',
  classNames: ['table', 'basic-table'],

  content: null,

  headerRowComponent: 'basic-table/row',
  bodyRowComponent: 'basic-table/row',
  footerRowComponent: 'basic-table/row',
  headerCellComponent: 'basic-table/cell',
  bodyCellComponent: 'basic-table/cell',
  footerCellComponent: 'basic-table/cell',

});