import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name = '' ;
  comment = '';

  constructor() { }

  logName(a) {
    this.name = a ;
    console.log(a.value);

  }
  logComment(b) {
    this.comment = b ;
    console.log(b.value);
  }

  ngOnInit() {
  }

  verify() {

  alert('Value Passed');



  }


}

