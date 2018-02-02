import Controller from '@ember/controller'
import Object from '@ember/object'

var List = Object.extend({
	type: 'to do',
  name: '',
  // tasks: [],
  init: function() {
    this._super()
    this.set(name, '') 
    // this.set(tasks, [])
  }
})

export default Controller.extend({

	actions: {
		addList: function() {
			let listName = this.get('listName')
				if ( !listName || !listName.trim() ) {
					return false
				}
			var newList = List.create().setProperties({name: listName, tasks:[] })			
			this.get('model').pushObject(newList)
		}
	}
})
