import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    return this.get('store').findAll('list')
    // return [
    //   {
    //     type: 'list',
    //     id: 1,
    //     name: 'Default List',
    //     tasks: []     
    //   },
    // {
    //     type: 'list',
    //     id: 2,
    //     name: 'To Do',
    //     tasks: [
    //       {id:1, taskName:'get buttons to work', description:'today'}, 
    //       {id: 2, taskName:'wash dishes', description:'also must happen today'}]     
    //   }, {
    //     type: 'list',
    //     name: 'Projects',
    //     tasks: [
    //       {id: 3, taskName:'ember', description:'wahhhhh'}, 
    //       {id: 5, taskName:'snake name change', description:'probably wont get to this'} 
    //     ]        
    //   }, {
    //     type: 'list',
    //     name: 'Groceries',
    //     tasks: [{id: 5, taskName:'apples', description:''}, 
    //             {id: 6, taskName:'kale', description:''}]         
    //   }
    // ]
  }
});
