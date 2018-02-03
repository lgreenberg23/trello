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
    titleChange: function() {
    	console.log("i am in edit title")
    }//,
    // addDescription: function() { 
    //   let description = this.get('description')
    //   let task = this.get('task')
    //   task.setProperties({description: description })
    // }
  }
});
