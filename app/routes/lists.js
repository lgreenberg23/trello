import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    // return this.get('store').findAll('list')
    return [
      {
        name: 'Default List',
        tasks: [/*{id:0, taskName:'default task', description:'words'}*/]     
      }/*,
    {
        name: 'To Do',
        tasks: [
          {id:1, taskName:'get buttons to work', description:'today'}, 
          {id: 2, taskName:'wash dishes', description:'also should happen today'}]     
      }, {
        name: 'Projects',
        tasks: [
          {id: 3, taskName:'ember', description:'learn testing'}, 
          {id: 5, taskName:'snake name change', description:'probably wont get to this'} 
        ]        
      }, {
        name: 'Groceries',
        tasks: [{id: 5, taskName:'apples', description:''}, 
                {id: 6, taskName:'kale', description:'Brooklyn'}]         
      }*/
    ]
  }
});
