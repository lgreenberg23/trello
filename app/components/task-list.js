import Component from '@ember/component';
import Object from '@ember/object'

	let counter = 6
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

	addATask: false,
	editList: false,
	clickedOutside: false,

	actions: {
		openNewTask: function(){
			this.set('addATask', true)
		},
		addTask: function() {
			this.set('clickedOutside', false)
			let taskName = this.get('taskName')
			if ( !taskName || !taskName.trim() ) {
					this.set('addATask', false)
			}
			else{
				this.set('clickedOutside', false)
				var newTask = Task.create().setProperties({id: ++counter, taskName: taskName, description:'' })			
				this.get('list.tasks').pushObject(newTask)
				this.set('taskName', '')
				this.set('addATask', false)
			}
		},
		closeAddTask: function(){
			console.log("clickedOutside")
			this.set('clickedOutside', true)
			this.set('addATask', false)
		},
		showEditListName: function() {
			this.set('editList', true)
		},
		editListName: function() {
			let listName = this.get('list.name')
			if (listName === ''){
				alert("please give your list a name")
			}	
			else{		
				this.set('editList', false)
			}
		}
	}


});
