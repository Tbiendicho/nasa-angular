import { Component, OnInit } from '@angular/core';
import { Asteroide } from './asteroide';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  asteroide: Asteroide = new Asteroide();

  constructor() {
    this.asteroide.start_date = '01/04/2022';
    this.asteroide.end_date = '04/04/2022';
  }

  ngOnInit() {
  }

  submit(form: NgForm) {
    console.log(form.value);
  }
}
