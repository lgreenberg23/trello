import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    // return this.get('store').findAll('list')
    return [{
        type: 'lists',
        id: '1',
        name: 'To Do',
        tasks: {'get buttons to work':'today', 'wash dishes':'also must happen today'}       
      }, {
        type: 'lists',
        id: '2',
        name: 'Projects',
        tasks: {'emberrrr': 'wahhhhh', 
          'snake name change': 'probably wont get to this' 
        }        
      }, {
        type: 'lists',
        id: '3',
        name: 'Groceries',
        tasks: {}//['apples', 'kale']         
      }]
  }
});
