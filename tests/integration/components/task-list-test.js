import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'
import EmberObject from '@ember/object'
import { run } from '@ember/runloop'

let task = EmberObject.create({
  id:1, 
  taskName:'test-task', 
  description:'today'
})

moduleForComponent('task-list', 'Integration | Component | task list', {
  integration: true
})

test('should display task name', function(assert) {
  this.set('taskObj', task)
  this.render(hbs`{{task-list task=taskObj}}`)
  assert.equal(this.$('.list').text(), 'test-task ', 'test-task');
})



test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{task-list}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#task-list}}
      template block text
    {{/task-list}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
