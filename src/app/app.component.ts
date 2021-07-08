import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { LoaderService } from './loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observableProject';
  showLoader = false;


constructor(
  private loader: LoaderService
)
{
  this.loader.isLoading.asObservable().subscribe((i)=>{
    this.showLoader = i;

  });

}

OnInit(){



}




}

