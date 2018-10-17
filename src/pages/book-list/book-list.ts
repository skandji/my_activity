import {Component} from "@angular/core";
import {MenuController, ModalController} from "ionic-angular";
import {Book} from "../../models/book";
import {BookService} from "../../services/book.service";
import {LendBookPage} from "../lend-book/lend-book";

@Component({
  selector: 'page-book-list',
  templateUrl: './book-list.html',
})
export class BookListPage {
  books: Book[];

  constructor(public menuCtrl: MenuController,
              public bookService: BookService,
              public modalCtrl: ModalController){}

  ionViewWillEnter(){
    this.books = this.bookService.books;
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

  onViewBook(index: number){
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }
}
