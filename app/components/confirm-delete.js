import ModalDialog from 'ember-modal-dialog/components/modal-dialog'

export default ModalDialog.extend({
	actions:{
		inModalToggle: function() {
			this.get('toCancel')()
		},
		deleteTask: function(){
			var task = this.get('task')
			var list = this.get('myList')
			list.tasks.removeObject(task)
		}
	}
});
