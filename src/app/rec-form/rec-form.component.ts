import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms' ;


@Component({
  selector: 'app-rec-form',
  templateUrl: './rec-form.component.html',
  styleUrls: ['./rec-form.component.css']
})
export class RecFormComponent implements OnInit {

  public message = 'Angular' ;

  rForm: FormGroup ;
  post: any ;
  description = '' ;
  name = '' ;


  constructor(private fb: FormBuilder) {
        this.rForm =  fb.group({
         'name': [  null , Validators.required ],
         'description': [  null , Validators.compose([Validators.required , Validators.minLength(10) , Validators.minLength(40) ]) ] ,
         'validate' : ''

        });
  }


  addPost(post) {
    this.description = post.description ;
    this.name = post.name ;
  }

  ngOnInit() {
  }

}
