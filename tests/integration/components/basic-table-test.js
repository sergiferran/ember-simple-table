import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('basic-table', 'Integration | Component | basic table', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(12);

  let content = [{
    id: 1,
    text: 'person 1'
  },{
    id: 2,
    text: 'person 2'
  },{
    id: 3,
    text: 'person 3'
  },{
    id: 4,
    text: 'person 4'
  },{
    id: 5,
    text: 'person 5'
  }];

  this.set('content', content);
  this.render(hbs `
    {{#basic-table content=content as |t|}}
      {{#t.header as |h|}}
        {{#h.row as |r|}}
          {{#r.cell}}ID{{/r.cell}}
          {{#r.cell}}NAME{{/r.cell}}
        {{/h.row}}
      {{/t.header}}
      {{#t.body as |b item|}}
        {{#b.row as |r|}}
          {{#r.cell}}{{item.id}}{{/r.cell}}
          {{#r.cell}}{{item.text}}{{/r.cell}}
        {{/b.row}}
      {{/t.body}}
    {{/basic-table}}
  `);

  assert.equal(this.$('table').length, 1);
  assert.equal(this.$('table thead').length, 1);
  assert.equal(this.$('table thead tr').length, 1);
  assert.equal(this.$('table thead tr th').length, 2);
  assert.equal(this.$('table tbody').length, 1);
  assert.equal(this.$('table tbody tr').length, 5);
  assert.equal(this.$('table tbody tr:eq(0) td').length, 2);
  assert.equal(this.$('table tbody tr:eq(0) td:eq(1)').text().trim(), "person 1");
  assert.equal(this.$('table tbody tr:eq(1) td:eq(1)').text().trim(), "person 2");
  assert.equal(this.$('table tbody tr:eq(2) td:eq(1)').text().trim(), "person 3");
  assert.equal(this.$('table tbody tr:eq(3) td:eq(1)').text().trim(), "person 4");
  assert.equal(this.$('table tbody tr:eq(4) td:eq(1)').text().trim(), "person 5");
});