import Component from '@ember/component';

export default Component.extend({
	isShowingModal: false,
	actions: {
		// editTaskName: function() {
		// 	let taskName = this.get('taskName')
		// 	if ( !taskName || !taskName.trim() ) {
		// 			return false
		// 		}
		// 	//console.log()
		// 	var newTask = Task.create().setProperties({taskName: taskName, description:'' })			
		// 	this.get('list.tasks').pushObject(newTask)
		// },
		// editTaskDescription: function(){
		// 	let description = this.get('description')
		// },
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
		
	}
});



