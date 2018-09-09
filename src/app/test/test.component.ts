import { Component, OnInit , Input, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  @Input() public parentData  ;

  @Output() public childEvent = new EventEmitter() ;

  public name = 'Arafat' ;
  // public url = window.location.href ;
  public username = '';
  public dis = true ;

  public textId =  'myId' ;
  public isDisabled = false ;
  public myName = 'Arafat' ;
  public isStatus = 'text-danger';
  public hassError = false ;
  public classMessage = {

    'text-danger' : this.hassError,
    'text-special' : this.hassError,
    'text-success' : !this.hassError

  };
  public style = {
    color : 'orange',
    fontStyle : 'italic'

  };

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey arafat md arafat');

  }

  helloUser() {
    return 'Myself ' + this.name ;
  }

  message () {
    this.hassError = true;
    this.isDisabled = true;
    this.isStatus = 'text-success';
  }

  show(value) {
    alert(value);
  }

}
