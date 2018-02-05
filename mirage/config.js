export default function() {
  this.namespace = '/api';

  this.get('/lists', function() {
    return {
      data: [
      {
        type: 'list',
        id: '1',
        attributes:{
          // listID: 1,
          name: 'Default List',
          tasks: []
        }     
      },{
        type: 'list',
        id: '2',
        attributes:{
          // listID: 2,
          name: 'To Do',
          tasks: [
            {id:1, taskName:'get buttons to work', description:'today'}, 
            {id: 2, taskName:'wash dishes', description:'also must happen today'}]     
        }
      }, {
        type: 'list',
        id: '3',
        attributes:{
          // listID: 3,
          name: 'Projects',
          tasks: [
            {id: 3, taskName:'learn ember', description:'this is happening!'}, 
            {id: 5, taskName:'snake name change', description:'problem for next week'} 
          ]        
        }
      }, {
        type: 'list',
        id: '4',
        attributes: {
          // listID: 4,
          name: 'Groceries',
          tasks: [{id: 5, taskName:'apples', description:''}, 
                  {id: 6, taskName:'kale', description:'I live in Brooklyn'}]         
        }
      }]
    }
  })
}