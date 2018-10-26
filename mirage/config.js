export default function() {
  this.namespace = '/api';

  this.get('/photos', () => {
    return {
      data: [{
        "src": "http://martawilkphotography.com/img/newborn/medium/56.jpg",
        "ratio": 0.66666666667
      },
      {
        "src": "http://martawilkphotography.com/img/newborn/medium/55.jpg",
        "ratio": 0.66666666667
      },
      {
        "src": "http://martawilkphotography.com/img/newborn/medium/54.jpg",
        "ratio": 1.5
      },
      {
        "src": "http://martawilkphotography.com/img/newborn/medium/53.jpg",
        "ratio": 0.66666666667
      },
      {
        "src": "http://martawilkphotography.com/img/newborn/medium/52.jpg",
        "ratio": 1.5
      },
      {
        "src": "http://martawilkphotography.com/img/newborn/medium/51.jpg",
        "ratio": 0.66666666667
      },
      {
        "src": "http://martawilkphotography.com/img/newborn/medium/50.jpg",
        "ratio": 1.5
      },
      {
        "src": "http://martawilkphotography.com/img/newborn/medium/49.jpg",
        "ratio": 0.66666666667
      },
      {
        "src": "http://martawilkphotography.com/img/newborn/medium/48.jpg",
        "ratio": 0.66666666667
      }]
    };
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
