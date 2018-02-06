import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop';

let task = EmberObject.create({
  id:1, 
  taskName:'test-task', 
  description:'today' 
})

moduleForComponent('task-display', 'Integration | Component | task display', {
  integration: true
});

test('should toggle a window to see details on click', function(assert) {
  this.set('taskObj', task)
  this.render(hbs`{{task-list task=taskObj}}`)
  assert.equal(this.$('.show-task.modal').length, 0, 'initially just a task')
  run(() => document.querySelector('.show-task').click());
  assert.equal(this.$('#ember328'), 'rendered modal after click')
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{task-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#task-display}}
      template block text
    {{/task-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
