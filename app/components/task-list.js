import Component from '@ember/component';
import Object from '@ember/object'

	var Task = Ember.Object.extend({
	  taskName: null,
			description: null, 
	  init: function() {
	    this._super()
	    this.set("taskName", '') 
	    this.set("description", '')
	  }
	})

export default Component.extend({


	actions: {
		addTask: function() {
			let taskName = this.get('taskName')
			if ( !taskName || !taskName.trim() ) {
					return false
				}
			//console.log()
			var newTask = Task.create().setProperties({taskName: taskName, description:'' })			
			this.get('list.tasks').pushObject(newTask)
		}
	}


});
