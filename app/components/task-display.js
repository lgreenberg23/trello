import Component from '@ember/component';

export default Component.extend({
	// isShowingModal: false,
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
   openModal: function(target) {
      var modal = this.get('comp-' + target);
      modal.send('toggleModal')
    },
    closeModal: function(target) {
    	console.log("i am in close modal")
      var modal = this.get('comp-' + target);
      modal.send('closeToggleModal')
    }
		
	}
});



