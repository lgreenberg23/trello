import DS from 'ember-data'

export default DS.Model.extend({
	type: DS.attr(),
	name: DS.attr(),
	tasks: DS.attr(),
	
})