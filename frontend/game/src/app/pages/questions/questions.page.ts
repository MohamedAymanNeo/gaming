import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { Question } from '../../interfaces/question';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  
  questionList: Question[] = [];
  questionSub: Subscription;

  constructor(private quesServ: QuestionsService) { }

  ngOnInit() {

    this.quesServ.getAllQuestion();

    this.questionSub = this.quesServ.getUpdatedQuestions().subscribe((questions: Question[]) => {
        this.questionList = questions;
        console.log(this.questionList[1].answers)
    })
    
  }




}
