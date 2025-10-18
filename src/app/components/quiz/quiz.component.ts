import {Component, OnInit} from '@angular/core';
import {Question, QuestionService} from './question.service';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, MatCardModule, MatButton],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  providers: [
  ]
})
export class QuizComponent implements OnInit {
  // Declare Variables
  title: string | undefined;
  desc: string | undefined;

  qIndex: number = 0;
  questions: Question[] = [];
  selected: boolean = false;

  score: number = 0;


  constructor(private questionService: QuestionService) {  }

  ngOnInit(): void {
    this.questionService.getQuestionJson().subscribe({})
    this.loadAllQuestions();
  }

  loadAllQuestions(){
    this.questionService.getQuestionJson().subscribe(res=>{
      this.questions = res.quiz;
      this.title = res.title;
      this.desc = res.description;
      console.log(this.questions);
    })
  }
  nextQuestion(){
    this.selected = false;
    this.qIndex++;
  }

  answerQuestion(index: number){
    console.log(this.selected);
    if(this.questions[this.qIndex].answer_index == index && !this.selected){
      this.score++;
    }
    this.selected = true;
  }

}
