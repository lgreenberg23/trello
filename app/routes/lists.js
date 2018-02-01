import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    // return this.get('store').findAll('list')
    return [{
        type: 'list',
        id: '1',
        name: 'To Do',
        tasks: {'get buttons to work':'today', 'wash dishes':'also must happen today'}       
      }, {
        type: 'list',
        id: '2',
        name: 'Projects',
        tasks: {'emberrrr': 'wahhhhh', 
          'snake name change': 'probably wont get to this' 
        }        
      }, {
        type: 'list',
        id: '3',
        name: 'Groceries',
        tasks: {}//['apples', 'kale']         
      }]
  }
});
