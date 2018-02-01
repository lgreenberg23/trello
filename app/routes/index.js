import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    return [{
      id: '1',
      title: 'To Do',
      description: 'Things I hope I dont forget to do'
    }, {
      id: '2',
      title: 'Grocery List',
      description: 'Menu Planning for the week'
    }, {
      id: '3',
      title: 'Projects',
      description: 'things i mean to work on'
    }];
  }

    // model() {
    // return this.get('store').findAll('list')
  	// }
});
