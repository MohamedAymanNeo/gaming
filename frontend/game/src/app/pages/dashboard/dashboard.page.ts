import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from '../../interfaces/question';
import { QuestionsService } from '../../services/questions.service';
import { NgForm, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild('headerValue', {static: false}) headerValue: any;

  header = '';
  answers = [];
  id = '';
  questionList: Question;
  constructor(private questServ: QuestionsService, public fb: FormBuilder) { }

  questionForm = this.fb.group({
    addDynamicElement: this.fb.array([])
  });

  get addDynamicElement() {
    return this.questionForm.get('addDynamicElement') as FormArray;
  }

  addItems() {
    this.addDynamicElement.push(this.fb.control(''))
  }
  
  ngOnInit() {
  }

  onAddQuestion(form: NgForm) {
  
    let ansValue = this.questionForm.value.addDynamicElement;

    console.log(this.headerValue.value, ansValue);
    
    // this.questServ.addQuestion(this.headerValue.value,ansValue)
    // const ans = Object.keys(ansValue).map((index) => {
    //   this.answers.push([index]= ansValue[index]);
    //   console.log(this.answers)
    //   console.log(typeof this.answers)
    // })
    
      
    // console.log(answers)
    // console.log(typeof answers)
    // alert(JSON.stringify(this.questionForm.value))
    // this.questServ.addQuestion(form.value.header,)
  }

  // onAddQuestion(form: NgForm) {
  //   if(form.invalid) return;
  
  //   //  this.answers.push(form.value.firstAnswer, form.value.secondAnswer, form.value.thirdAnswer, form.value.fourthAnswer)
  //   // // console.log(this.answers)
  //   // // console.log(form.value.header);
  //   // this.questServ.addQuestion(form.value.header, this.answers);
  // }

}
