import {Component, OnInit} from "@angular/core";
import {BookListPage} from "../book-list/book-list";
import {CdListPage} from "../cd-list/cd-list";

@Component({
  selector: 'page-tabs',
  templateUrl: './tabs.html'
})
export class TabsPage implements OnInit {
  public tabPages: any;

  ngOnInit(): void {
    this.tabPages = [
      {
        root: BookListPage,
        tabTitle: 'Livres',
        tabIcon: 'book'
      },
      {
        root: CdListPage,
        tabTitle: 'CDs',
        tabIcon: 'play'
      }
    ]
  }
}
