import { Component } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  
  title:string = ""

  questions:any
  questionSelected:any

  answers:string[] = []
  answerSelected:string = ""

  questionIndex:number = 0
  questionMaxIndex:number = 0

  finished:boolean = false

  ngOnInit() {
    if(quizz_questions) {
      this.finished = false
      this.title = quizz_questions.title
      this.questionSelected = this.questions[0]
    }
  }
}