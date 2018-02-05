import Component from '@ember/component';

export default Component.extend({
	isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    deleteTask: function(){
    	var task = this.get('task')
    	var taskID = this.get('id')
    	var list = this.get('myList')
    	list.tasks.removeObject(task)
    }
  }
})



