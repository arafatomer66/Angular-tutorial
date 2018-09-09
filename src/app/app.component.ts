import { Component } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  { FormBuilder , FormGroup , Validators } from '@angular/forms' ;
import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myData : HttpService ){}
  // title = 'binding';

  // arafat = 'Md Omer Arafat';

  datas = [] ;
  obj : Object ;

   public message = 'Angular' ;

   ngOnInit (){
     
    this.myData.getData().subscribe(data => {
      this.datas = data.obj 
    }
     )
   }
}

interface Data {
  obj : Object 
}


