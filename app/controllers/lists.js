import Controller from '@ember/controller'

export default Controller.extend({
	actions: {
		addList: function() {
			let listName = this.get('listName')
				if ( !listName || !listName.trim() ) {
					return false
				}

			this.get('lists').pushObject(listName)
		}
	}
})
