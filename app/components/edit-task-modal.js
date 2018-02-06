import ModalDialog from 'ember-modal-dialog/components/modal-dialog'

export default ModalDialog.extend({
	isShowingDeleteModal: false,
	actions: {
		toggleDelete: function(){
			this.toggleProperty('isShowingDeleteModal')
		},
		toggleFromInside: function() {
			this.get('onclose')()
		}
	}
});

