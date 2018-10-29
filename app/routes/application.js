import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
    name: "Neugeborene & Babybauch",
    title: "- die schönste Zeit im Leben einer Frau -",
    pic: "http://martawilkphotography.com/img/cat1.jpg",
    link: "gallery/neugeborene-babybauch"
  },
  {
    name: "Kinder & Familien",
    title: "- einzigartige Andenken für viele Jahre -",
    pic: "http://martawilkphotography.com/img/cat2.jpg",
    link: "gallery/kinder-familien"
  },
  {
    name: "Porträtfotografie",
    title: "- eine kurze Geschichte über Dich -",
    pic: "http://martawilkphotography.com/img/top/top%206.jpg",
    link: "gallery/portraitphotographie"
  }];
  }
});
