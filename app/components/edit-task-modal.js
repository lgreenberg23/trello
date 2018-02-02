import Component from '@ember/component';
// import layout from '../templates/components/edit-task-modal';

export default Ember.Component.extend({
  expose: function() {
    var app_controller = this.get('targetObject');
    var exposedName = "comp-" + this.get('id');
    // {{debugger}}
    app_controller.set(exposedName, this);
	}.on('init'),
	
	actions: {
    toggleModal: function() {
        this.toggleProperty('enabled')
    },
   //  addDescription: function() {
   //  	let taskDescription = this.get('description')
   //  	let taskId = this.get('task.id')
			// //console.log()
			
			// Task.find(taskId).setProperties({ description:taskDescription })			
			// //this.get('list.tasks').pushObject(newTask)

    // },
    deleteTask: function() {
    	var taskId = this.get(target) 
    	console.log("i am in delete task", taskId)
    }

	}
});
