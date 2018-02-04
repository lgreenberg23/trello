import Component from '@ember/component';
// import layout from '../templates/components/edit-task-modal';

export default Ember.Component.extend({
  expose: function() {
    var exposedName = "comp-" + this.get('id');
    (exposedName, this);
	}.on('init'),
	
	actions: {
    toggleModal: function() {
      //figure out how to show all properties 
      this.toggleProperty('enabled')
    },
    titleChange: function() {
      let title = this.get('title')
      let newTitle = this.get('target')
      {{debugger}}
    	console.log("i am in edit title", title, newTitle)
      //let oldtitle = this.get('title')
      return newTitle

    },
    addDescription: function() { 
      let description = this.get('value')
      console.log("this is the description now", description)
      // let task = this.get('task')
      // task.setProperties({description: description })
    },
    deleteTask: function() {
      let taskID = this.get('id')
      let taskArray = this.get('list.tasks')
      console.log("i clicked delete", taskID, taskArray)
      // return taskArray.filter(task => task.id !== taskID)

    }
  }
});
