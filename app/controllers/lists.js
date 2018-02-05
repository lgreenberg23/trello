import Controller from '@ember/controller'
import Object from '@ember/object'

// let counter = 4
var List = Object.extend({
  name: '',
  // listID: null,
  // tasks: [],
  init: function() {
    this._super()
    this.set(name, '') 
    // this.set(tasks, [])
  }
})

export default Controller.extend({
	addAList : false,

	actions: {
		openNewList: function(){
			this.set('addAList', true)
		},
		addList: function() {
			let listName = this.get('listName')
				if ( !listName || !listName.trim() ) {
					return false
				}
			var newList = List.create().setProperties({/*listID: ++counter,*/ name: listName, tasks:[] })			
			this.get('model').pushObject(newList)
			this.set('listName', '')
		}
	}
})
