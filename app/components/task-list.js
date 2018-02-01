import Component from '@ember/component';

export default Component.extend({
	willRender() {
    // Set the "lists" property to a JavaScript object
    // with the list name as the key and the value a list
    // of tasks.
    this.set('lists', {
      'To Do': ['sleep', 'run', 'cook'],
      'Projects': ['moveable ink trello', 'rails queries']
    });
  }
});
