export default function() {
  this.namespace = '/api';

  this.get('/photos');
  this.get('/galleries');
  // this.get('/galleries/:id');
  this.get('/galleries/:id', ['galleries', 'galleries.photos']);

  this.get('/infos');
  this.get('/prices');
  this.get('/prices/:id');
}
