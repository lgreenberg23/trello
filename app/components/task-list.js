import Component from '@ember/component';

export default Component.extend({

	actions: {
		// addList: function() {
		// 	let listName = this.get('listName')
		// 	'lists'[listName] = ''
		// },
		addTask: function() {
			let taskName = this.get('taskName')
			// this.get('tasks').pushObject(taskName)
			tasks.set(taskName, "")
		}
	}
});
