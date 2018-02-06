import Component from '@ember/component';

export default Component.extend({
	isShowingModal: false,
  // isShowingDeleteModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }//,
    // deleteTask: function(){
    // 	var task = this.get('task')
    // 	var taskID = this.get('id')
    // 	var list = this.get('myList')
    // 	list.tasks.removeObject(task)
    // },
    // toggleDelete: function(){
    //   console.log('i am in askDelete')
    //   this.toggleProperty('isShowingDeleteModal')
    // }
  }
})



