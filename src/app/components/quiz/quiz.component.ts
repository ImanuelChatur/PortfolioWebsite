import {Component, OnInit} from '@angular/core';
import {Question, QuestionService} from '../../services/question.service';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButton, MatFabButton} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, MatCardModule, MatButton, MatFabButton, RouterLinkActive, RouterLink],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  providers: [
  ]
})
export class QuizComponent implements OnInit {
  // Declare Variables
  isQuizStarted = false;
  title: string | undefined;
  desc: string | undefined;

  qIndex: number = 0;
  questions: Question[] = [];
  selected: number = 0;

  score: number = 0;
  displaySummary: boolean = false;

  loadedQuiz: string = '';

  constructor(private questionService: QuestionService) {  }

  ngOnInit(): void {
    //Load questions and start the quiz
    this.loadAllQuestions();
    this.isQuizStarted = true;
  }

  loadAllQuestions(){
    //Find name of quiz from storage
    this.loadedQuiz = localStorage.getItem('quiz') || "";

    //Load questions, title and description
    this.questionService.getQuestionJson(this.loadedQuiz).subscribe(res=>{
      this.questions = res.quiz;
      this.randomizeQuestions();
      this.title = res.title;
      this.desc = res.description;
    })
  }
  nextQuestion(){
    this.qIndex++;
    //Show Answer page on next
    this.displaySummary = false;

    //If end of Quiz
    if (this.qIndex >= this.questions.length) {
      this.isQuizStarted = false;
    }
  }

  answerQuestion(index: number){
    console.log(index);
    this.selected = index;
    if(this.questions[this.qIndex].answer_index == index){
      this.score++;
    }
    this.displaySummary = true;
  }

  randomizeQuestions(){
    let cIndex = this.questions.length-1, randomIndex;
    console.log("RANDOMIZING!!!");
    while(cIndex != 0){

      //Randomize question index
      randomIndex = Math.floor(Math.random() * cIndex);
      [this.questions[cIndex], this.questions[randomIndex]] = [
        this.questions[randomIndex], this.questions[cIndex]
      ];


      //randomize options index
      cIndex -= 1;
    }
  }

}
