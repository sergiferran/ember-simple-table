# ember-simple-table
[![npm Version][npm-badge]][npm]
[![Build Status][travis-badge]][travis]
[![Ember Observer Score](http://emberobserver.com/badges/ember-simple-table.svg)](http://emberobserver.com/addons/ember-simple-table)
[![Ember badge][ember-badge]][embadge]

## Requirements
* Ember >= 1.13.0
* Ember CLI

## Installing

* ember-cli >= 0.2.3 `ember install ember-simple-table`

## Upgrading

It's advisable to run `ember g ember-simple-table` between upgrades as dependencies may have been added, removed, or upgraded between releases.  Please try this, along with clearing `node_modules` and `bower_components` before reporting issues after upgrading.

## Usage

Having your data as:

```js
let content = [{
    id: 1,
    text: 'person 1'
  }, {
    id: 2,
    text: 'person 2'
  }, {
    id: 3,
    text: 'person 3'
  }, {
    id: 4,
    text: 'person 4'
  }, {
    id: 5,
    text: 'person 5'
  }];
```
or
```js
content: Ember.computed.alias('model');
```
You can create the table as:

```hbs
{{#basic-table content=content as |t|}}
  {{#t.header as |header|}}
    {{#header.row}}
      {{#header.cell}}ID{{/header.cell}}
      {{#header.cell}}NAME{{/header.cell}}
    {{/header.row}}
  {{/t.header}}
  {{#t.footer as |footer|}}
    {{#footer.row}}
      {{#footer.cell colspan="2"}}My footer{{/footer.cell}}
    {{/footer.row}}
  {{/t.footer}}
  {{#t.body as |body item|}}
    {{#body.row}}
      {{#body.cell}}{{item.id}}{{/body.cell}}
      {{#body.cell}}{{item.text}}{{/body.cell}}
    {{/body.row}}
  {{/t.body}}
{{/basic-table}}
```

###Handling Events
You can handle any event just adding the event name in the component
```hbs
{{header.cell click=(action 'cellSelected')}}...{{/header.click}}
```

###Creating your own cells
You can create your own `row` or `cell` component and pass it to the table:
```hbs
{{#basic-table 
  content=content
  headerRowComponent="my-header-row",
  bodyRowComponent="my-body-row",
  footerRowComponent="my-footer-row",
  headerCellComponent="my-header-cell",
  bodyCellComponent="my-body-cell",
  footerCellComponent="my-footer-cell"
  as |t|
}}
```
or use different components
```hbs
{{#basic-table content=content as |t|}}
  {{#t.header}}
    {{#t.cell}}
      ...
    {{/t.cell}}
    {{#my-cell-custom}}
      ...
    {{/my-cell-custom}}
  {{/t.header}}
{{/basic-table}}
```


## Development

* `git clone` this repository
* `npm install`
* `bower install`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

[npm]: https://www.npmjs.org/package/ember-simple-table
[npm-badge]: https://img.shields.io/npm/v/ember-simple-table.svg?style=flat-square
[travis]: https://travis-ci.org/sergiferran/ember-simple-table
[travis-badge]: https://img.shields.io/travis/sergiferran/ember-simple-table.svg?branch=master&style=flat-square
[embadge]: http://embadge.io/
[ember-badge]: http://embadge.io/v1/badge.svg?start=1.13.0