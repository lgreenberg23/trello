import Component from '@ember/component';
import Object from '@ember/object'

	let counter = 0
	var Task = Ember.Object.extend({
	  taskName: null,
		description: null,
		id: null, 
	  init: function() {
	    this._super()
	    this.set("taskName", '') 
	    this.set("description", '')
	    this.set("id", 0)
	  }
	})

export default Component.extend({

	taskToDelete: null,

	actions: {
		addTask: function() {
			let taskName = this.get('taskName')
			if ( !taskName || !taskName.trim() ) {
					return false
				}
			//console.log()
			
			var newTask = Task.create().setProperties({id: ++counter, taskName: taskName, description:'' })			
			this.get('list.tasks').pushObject(newTask)
		}
	}


});
