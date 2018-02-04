import Component from '@ember/component';

export default Component.extend({
<<<<<<< HEAD
	actions: {

   openModal: function(target) {
   	//target is ID
      var modal = this.get('comp-' + target);
      modal.send('toggleModal')
=======
	isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    deleteTask: function(){
    	console.log("i am in delete task")
>>>>>>> working-version
    }
  }
})



