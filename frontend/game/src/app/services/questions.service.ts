import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questions: Question[] = [];

  private updatedQuestions = new Subject<Question[]>();

  url = 'http://localhost:3000/api/questions';
  constructor(private http: HttpClient) { }

  

  getAllQuestion() {
    this.http.get<{message: string, questions: any}>('http://localhost:3000/api/questions')
        .pipe(map((listQuestion) => {
          // console.log(listQuestion.data)
          return listQuestion.questions.map((quest) => {
            return {
              header: quest.header,
              answers: quest.answers,
              id: quest._id
            };
          });
        }))
        .subscribe((transformedQuestions) => {
          this.questions = transformedQuestions;
          console.log(this.questions);
          this.updatedQuestions.next([...this.questions]);
        });
  }

  getUpdatedQuestions() {
    return this.updatedQuestions.asObservable();
  }



  addQuestion(header: string, answers: any) {
    const question: Question = {id: null, header, answers};

    this.http.post<{message: string, questions: any}>('http://localhost:3000/api/questions', question)
    .subscribe((result) => {
      
      this.questions.push(question);
      this.updatedQuestions.next([...this.questions]);
    })
  }

}
