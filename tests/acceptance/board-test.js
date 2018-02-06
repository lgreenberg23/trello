import { test } from 'qunit'
import moduleForAcceptance from 'trello/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | lists')

test('should show lists as the home page', function (assert) {
	visit('/')
  andThen(function() {
    assert.equal(currentURL(), '/lists', 'should redirect automatically')
  })
})

test('should never be less than one list', function (assert) {
	visit('/')
  andThen(function() {
    assert.equal(find('.list').length, 1, 'should see 1 list')
    assert.equal(find('.list.tasks').length, 0, 'should see 0 tasks to start')
  })
})

test('should be able to add a list', function (assert) {
	visit('/lists')
  click('.addlist')
  //click('#ember279')
	fillIn('input', 'My new List')
	keyEvent('input', 'keydown', 13)
	keyEvent('input', 'keyup', 13)
 	andThen(() => assert.equal(find('lists h3:last.name').text(), 'My new List'))
})

//this might be an integration or unit test
test('should not be able to add an empty string as a list', function (assert) {
})

test('should be able to add a task', function (assert) {
	visit('/lists')
	click('.add-task-input')
	click('.add-task-input')
	fillIn('.add-task-input', 'My new Task')
	keyEvent('.add-task-input', 'keydown', 13)
	keyEvent('.add-task-input', 'keyup', 13)
 	andThen(() => assert.equal(find('tasks.taskName').text(), 'My new Task'))

})

//this might be an integration or unit test
test('should not be able to add an empty string as a task', function (assert) {
})

test('should be able to edit a task', function (assert) {
})

test('should be able to edit a list name', function (assert) {
})

test('should be able to see details of a task', function (assert) {
})

test('should be able to delete a task', function (assert) {
})
