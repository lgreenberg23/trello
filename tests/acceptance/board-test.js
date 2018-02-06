import { test } from 'qunit'
import moduleForAcceptance from 'trello/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | board')

test('should show lists as the home page', function (assert) {
	visit('/')
  andThen(function() {
    assert.equal(currentURL(), '/lists', 'should redirect automatically')
  })
})

test('should never be less than one list', function (assert) {
	visit('/');
  andThen(function() {
    assert.equal(find('.list').length, 1, 'should see 1 list')
    assert.equal(find('.list.tasks').length, 0, 'should see 0 tasks to start')
  })
})

test('should be able to add a list', function (assert) {
  click(this.$('.addlist'))
	fillIn('input', 'My new List')
	keyEvent('input', 'keypress', 13)
 	andThen(() => assert.equal(find('lists h3:last').text(), 'My new List'))
})

//this might be an integration or unit test
test('should not be able to add an empty string as a list', function (assert) {
})

test('should be able to add a task', function (assert) {
})

test('should not be able to add an empty string as a task', function (assert) {
})

test('should be able to edit a task', function (assert) {
})

test('should be able to edit a list name', function (assert) {
})

test('should be able to see details of a task', function (assert) {
})

test('should be able to delete a list', function (assert) {
})

test('should be able to delete a task', function (assert) {
})


/*
number of lists never less than one

integration test -- Submitting a post without a title 
displays a red validation state on the field and gives the user 
text indicating that the title is required.

Should pop out an editing modal onClick
Should be able to close the modal
Should be able to delete a list from the Modal
Clicking “delete” should display a confirmation alert before deleting
*/