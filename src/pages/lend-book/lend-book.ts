import {Book} from "../../models/book";
import {Component} from "@angular/core";
import {BookService} from "../../services/book.service";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html'
})
export class LendBookPage {
  book: Book;

  constructor(public bookService: BookService,
              public viewCtrl: ViewController,
              public navParams: NavParams){
  }

  ionViewWillEnter(){
    this.book = this.bookService.books[this.navParams.get('index')]
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  onMovingBook(){
    this.book.isBookLent = !this.book.isBookLent;
  }

}
