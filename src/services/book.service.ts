import {Injectable} from "@angular/core";
import {Book} from "../models/book";

@Injectable()
export class BookService {
  books: Book[] = [
    {
      id: 1,
      titre: 'Lolita',
      auteur: 'Vladimir Nabokov',
      datePublication: 1955,
      description: 'Humbert Humbert est en prison pour meurtre. Il raconte tout ce qui l’a conduit jusqu’ici, de son enfance avec son premier amour à sa rencontre des dizaines d’années plus tard avec Dolorès Haze une « nymphette » de 12 ans.',
      isBookLent: false,
      photo: 'assets/imgs/lolita-article.jpg'
    },
    {
      id: 2,
      titre: 'L\' étranger',
      auteur: 'Albert Camus',
      datePublication: 1942,
      description: '« Quand la sonnerie a encore retenti, que la porte du box s’est ouverte, c’est le silence de la salle qui est monté vers moi, le silence, et cette singulière sensation que j’ai eue lorsque j’ai constaté que le jeune journaliste avait détourné les yeux. Je n’ai pas regardé du côté de Marie. Je n’en ai pas eu le temps parce que le président m’a dit dans une forme bizarre que j’aurais la tête tranchée sur une place publique au nom du peuple français… »',
      isBookLent: false,
      photo: 'assets/imgs/etranger-article.jpg'
    },
    {
      id: 3,
      titre: 'Faust',
      auteur: 'Goethe',
      datePublication: 1808,
      description: 'Plus rien n’intéresse le docteur Faust, il a tout lu, sait tout et s’ennuie. Profitant de la situation, Méphistophélès surgit pour lui proposer un pacte diabolique. Inspirée d’une vieille légende, la pièce de Goethe, chef-d’oeuvre de la littérature romantique, a élevé l’histoire de Faust au rang de mythe universel',
      isBookLent: true,
      photo: 'assets/imgs/faust-article.jpg'
    },
    {
      id: 4,
      titre: 'La Princesse des Clèves',
      auteur: 'Madame de la Fayette',
      datePublication: 1678,
      description: '«Je vais vous faire un aveu que l’on n’a jamais fait à un mari…» Sincère, tourmentée, la princesse de Clèves ne parvient plus à taire ses sentiments. Elle brûle d’amour depuis trop longtemps pour le duc de Nemours, l’un des plus beaux fleurons de la cour d’Henri II. Du mariage au déchirement, de la pudeur au sacrifice… Madame de La Fayette exprime jusque dans ses plus impudiques silences la langue subtile de la passion.',
      isBookLent: false,
      photo: 'assets/imgs/cleves-article.jpg'
    },
    {
      id: 5,
      titre: 'Les faux-monnayeurs',
      auteur: 'André Gide',
      datePublication: 1925,
      description: 'Qu’un jeune garçon apprenne qu’il n’est pas le fils de son père, qu’il décide de ne pas se présenter à ses examens et de partir au hasard de certaines rencontres : jusque-là, rien que de très commun. Mais qu’il croise la route tordue de faussaires en tout genre, d’enfants qui trafiquent de la fausse monnaie ou de tricheurs ès sentiments, et l’histoire se transforme en une folle épopée où les différents fils se mêlent et s’emmêlent pour mieux finir par démêler tous les mensonges.',
      isBookLent: true,
      photo: 'assets/imgs/andre-gide-article.jpg'
    },
    {
      id: 6,
      titre: 'Ravage',
      auteur: 'René Barjavel',
      datePublication: 1943,
      description: 'Paris 2052, tout semble possible et l’Homme n’a même plus peur de la mort. Pourtant, après une formidable panne électrique, la ville est brusquement plongée dans le chaos.\n' +
      'Une panique effroyable prend les Parisiens, laissant les hommes en proie à leurs instincts les plus primaires : égoïsme, folie, pillages, tuerie, barbarie…',
      isBookLent: true,
      photo: 'assets/imgs/ravage-article.jpg'
    },
    {
      id: 7,
      titre: 'L\'AMOUR AU TEMPS DU CHOLERA',
      auteur: 'Gabriel Garcia Marquez',
      datePublication: 1985,
      description: 'A la fin du 19e siècle, dans une petite ville des Caraïbes, un jeune télégraphiste pauvre et une ravissante écolière jurent de se marier et de vivre un amour éternel. Durant trois ans, ils ne vivent que l’un pour l’autre, mais Fermina épouse Juvenal Urbino, un jeune et brillant médecin. Alors Florentino, l’amoureux trahi, se mue en séducteur impénitent et s’efforce de se faire un nom et une fortune pour mériter celle qu’il ne cessera d’aimer, en secret, cinquante années durant, jusqu’au jour où l’amour triomphera.',
      isBookLent: false,
      photo: 'assets/imgs/7.jpg'
    },
    {
      id: 8,
      titre: 'Le choix de Sophie',
      auteur: 'William Styron',
      datePublication: 1979,
      description: 'A Brooklyn, en 1947, Stingo, jeune écrivain venu du Sud, rencontre Sophie, jeune catholique polonaise rescapée des camps de la mort. A la relation de la rencontre du jeune homme avec l’amour, se superposent la narration du martyre de Sophie, l’évocation de l’univers concentrationnaire et de l’holocauste nazi.',
      isBookLent: true,
      photo: 'assets/imgs/sophie-article.jpg'
    },
    {
      id: 9,
      titre: 'La nostalgie de l\'ange',
      auteur: 'Alice Sebold',
      datePublication: 2002,
      description: 'Nom de famille : Salmon, saumon comme le poisson ; prénom : Susie.\n' +
      'Assassinée à l’âge de quatorze ans, le 6 décembre 1973.  » Mon prof préféré était celui de sciences naturelles, Mr. Botte, qui aimait faire danser les grenouilles et les écrevisses à disséquer dans leur bocal paraffiné, comme pour leur rendre vie. Ce n’est pas Mr. Botte qui m’a tuée, au fait. Et ne vous imaginez pas que tous ceux que vous allez croiser ici sont suspects. C’est bien ça le problème. On n’est jamais sûr de rien…',
      isBookLent: true,
      photo: 'assets/imgs/sophie-article.jpg'
    },
    {
      id: 10,
      titre: 'Belle du Seigneur',
      auteur: 'Albert Cohen',
      datePublication: 1968,
      description: 'Albert Cohen n’embellit pas la passion mais l’analyse avec une lucidité sans pareille. Des amours entre Ariane et Solal dans la Genève du début du siècle, il n’élude aucun aspect, ni la marche triomphale de la passion, ni les affres de la jalousie, ni la brutalité d’une relation plutôt sadique mais son roman demeure une des histoires d’amour mythiques de la littérature. ',
      isBookLent: false,
      photo: 'assets/imgs/sebold-article.jpg'
    }
  ];
}
