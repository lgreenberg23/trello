import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    // return this.get('store').findAll('list')
    return [
      {
        type: 'list',
        name: 'Default List',
        tasks: []     
      },
    {
        type: 'list',
        name: 'To Do',
        tasks: [
          {taskName:'get buttons to work', description:'today'}, 
          {taskName:'wash dishes', description:'also must happen today'}]     
      }//, {
    //     type: 'list',
    //     name: 'Projects',
    //     tasks: [
    //       {taskName:'emberrrr', description:'wahhhhh'}, 
    //       {taskName:'snake name change', description:'probably wont get to this'} 
    //     ]        
    //   }, {
    //     type: 'list',
    //     name: 'Groceries',
    //     tasks: []//['apples', 'kale']         
    //   }
    ]
  }
});
