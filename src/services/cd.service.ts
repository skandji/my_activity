import {Injectable} from "@angular/core";
import {CD} from "../models/CD";

@Injectable()
export class CdService {
  cds: CD[] = [
    {
      id: 1,
      titre: 'Les oiseaux',
      auteur: 'Collectif',
      datePublication: 2005,
      lieuEdition: 'Grenoble',
      editeur: 'Glénat',
      duree: undefined,
      isCDLent: false
    },
    {
      id: 2,
      titre: 'Past masters',
      auteur: 'The Beatles',
      datePublication: 1988,
      lieuEdition: 'Angleterre',
      editeur: 'EMI',
      duree: undefined,
      isCDLent: false
    },
    {
      id: 3,
      titre: 'Le petit prince',
      auteur: 'Antoine de Saint-Exupéry',
      datePublication: 2003,
      lieuEdition: 'Carignan',
      editeur: 'Coffreagants',
      duree: 45,
      isCDLent: true
    },
    {
      id: 4,
      titre: 'Bien dans mon corps',
      auteur: 'Annie Bal',
      datePublication: 2001,
      lieuEdition: 'Paris',
      editeur: 'SCÉRÉN-CNDP',
      duree: 185,
      isCDLent: true
    },
    {
      id: 5,
      titre: 'Le Cerveau',
      auteur: 'Andrew Thompson',
      datePublication: 1987,
      lieuEdition: 'Montréal',
      editeur: 'Imavision Distribution',
      duree: 100,
      isCDLent: false
    },
    {
      id: 6,
      titre: 'Soundtrack',
      auteur: 'Apple',
      datePublication: 2004,
      lieuEdition: 'Toronto',
      editeur: 'Apple Canada',
      duree: undefined,
      isCDLent: false
    },
    {
      id: 7,
      titre: 'Adagio',
      auteur: 'Rudolf Baumgartner',
      datePublication: 1978,
      lieuEdition: 'Mexico',
      editeur: 'Polydor International GmbH',
      duree: 8,
      isCDLent: true
    }
  ];
}
