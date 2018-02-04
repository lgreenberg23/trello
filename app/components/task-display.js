import Component from '@ember/component';

export default Component.extend({
	isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    deleteTask: function(){
    	console.log("i am in delete task")
    	var task = this.get('task')
    	var list = this.get('myList')
    	console.log("task: ",task, " list: ", list.tasks)
    }
  }
})



