import {Component, OnInit} from "@angular/core";
import {CD} from "../../models/CD";
import {CdService} from "../../services/cd.service";
import {NavParams, ViewController} from "ionic-angular";

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html'
})
export class LendCdPage implements OnInit {
  cd: CD;

  constructor(public cdService: CdService,
              private navParams: NavParams,
              private viewCtrl: ViewController){

  }


  ngOnInit(): void {
    this.cd = this.cdService.cds[this.navParams.get('index')];
  }

  ionViewWillEnter(){

  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }

  onMovingCD(){
    this.cd.isCDLent = !this.cd.isCDLent
  }
}
