export default function() {
  this.namespace = '/api';

  this.get('/photos');
  this.get('/galleries');
  // this.get('/galleries/:id');
  this.get('/galleries/:id', ['galleries', 'galleries.photos']);
}
