export default function() {
  this.namespace = 'api';

  this.get('/lists', function() {
    return {
      data: [{
        type: 'lists',
        id: 'todo',
        attributes: {
          name: 'To Do'        
        }
      }, {
        type: 'lists',
        id: 'todo',
        attributes: {
          name: 'Projects'        
        }
      }, {
        type: 'lists',
        id: 'todo',
        attributes: {
          name: 'Groceries'        
        }
      }]
      // lists: {
      //   'To Do': ['build ember project', 'cook pasta', 'register for repair dinner'], 
      //   'Projects': ['snake', 'dogMatch'], 
      //   'Groceries': ['apples', 'kale', 'sesame oil']
      //   }
    }
  })
}
