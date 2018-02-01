import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    // return this.get('store').findAll('list')
    return [{
        type: 'lists',
        id: '1',
        name: 'To Do'        
      }, {
        type: 'lists',
        id: '2',
        name: 'Projects'        
      }, {
        type: 'lists',
        id: '3',
        name: 'Groceries'        
      }]
  }
});
