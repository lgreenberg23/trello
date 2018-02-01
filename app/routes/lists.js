import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    // return this.get('store').findAll('list')
    return [{
        type: 'lists',
        id: '1',
        name: 'To Do',
        tasks: ['get buttons to work', 'wash dishes']        
      }, {
        type: 'lists',
        id: '2',
        name: 'Projects',
        tasks: ['emberrrr', 'snake name change']         
      }, {
        type: 'lists',
        id: '3',
        name: 'Groceries',
        tasks: ['apples', 'kale']         
      }]
  }
});
