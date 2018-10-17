import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      title: "EINIGE INFORMATIONEN ZUM ABLAUF",
      description: "Wir besprechen im Vorfeld Eure Wünsche und Vorstellungen und Ihr entscheidet Euch, welches Paket Ihr buchen möchtet. Im Anschluss an das Fotoshooting wird jedes Bild von mir individuell und professionell bearbeitet. Die Bilder werden dann in einer persönlichen Online-Galerie bereitgestellt und gedruckt im Format 13x19."
    },
    {
      title: "WELCHE PAKETE BIETE ICH AN?",
      description: "Schreibt mir einfach eine e-mail oder ruft mich an und ich stelle Euch ein individuelles Angebot zusammen."
    },
    {
      title: "DER GUTSCHEIN",
      description: "Sucht Ihr ein ganz besonderes und persönliches Geschenk für Eure Familie oder Freunde? Ein Gutschein für ein individuelles Fotoshooting in Berlin ist für jeden genau die richtige Geschenkidee!"
    }];
  }
});
