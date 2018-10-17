import {Component} from "@angular/core";
import {MenuController, ModalController} from "ionic-angular";
import {CdService} from "../../services/cd.service";
import {CD} from "../../models/CD";
import {LendCdPage} from "../lend-cd/lend-cd";

@Component({
  selector: 'page-cd-list',
  templateUrl: './cd-list.html'
})
export class CdListPage {
cds: CD[];

  constructor(private menuCtrl: MenuController,
              public cdService: CdService,
              private modalCtrl: ModalController){}

  onToggleMenu(){
    this.menuCtrl.open();
  }

  ionViewWillEnter(){
    this.cds = this.cdService.cds;
  }

  onDetails(index: number){
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }
}
