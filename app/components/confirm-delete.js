import Component from '@ember/component';
import ModalDialog from 'ember-modal-dialog/components/modal-dialog'

export default ModalDialog.extend({
	actions:{
			toggleDelete: function(){
	      console.log('i am in askDelete')
	      this.send(toggleProperty('isShowingDeleteModal'))
	    },
			deleteTask: function(){
	    	var task = this.get('task')
	    	var taskID = this.get('id')
	    	var list = this.get('list')
	    	list.tasks.removeObject(task)
	    }
	  }

});
