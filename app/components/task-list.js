import Component from '@ember/component';

export default Component.extend({

	// var List = Ember.Object.extend({
	//   type: 'to do',
	//   name: null,
	//   tasks: null
	//   init: function() {
	//     this._super()
	//     this.set("name", '') 
	//     this.set("tasks", {})
	//   }
	// })

	actions: {
		// addList: function() {
		// 	let listName = this.get('listName')
		// 	'lists'[listName] = ''
		// },
		addTask: function() {
			let taskName = this.get('taskName')
			if ( !taskName || !taskName.trim() ) {
					return false
				}
			//console.log()
			this.get('tasks').pushObject(taskName)
		}
	}



			// var newList = List.create().setProperties({name: listName, tasks:[] })			
			// this.get('model').pushObject(newList)

});
