import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  toogle = false;

  constructor(
    private loader: LoaderService
  ) { }

  ngOnInit() {
  }

  ConsultService(){
    this.loader.isLoading.next(this.toogle);
    this.toogle = !this.toogle;
  }

}
