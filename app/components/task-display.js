import Component from '@ember/component';

export default Component.extend({
	actions: {

   openModal: function(target) {
   	//target is ID
      var modal = this.get('comp-' + target);
      modal.send('toggleModal')
    }
		
	}
});



