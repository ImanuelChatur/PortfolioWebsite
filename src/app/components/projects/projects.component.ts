import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {QuestionService} from '../../services/question.service';
import {NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    NgForOf,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  //Declare Variables
  quizList: string[] | undefined;
  selectedQuiz: string = "";

    ngOnInit(): void {
    this.questionService.getQuizList().subscribe(res =>{
      this.quizList=res;
    })
    }

    setQuiz(q: string){
      this.selectedQuiz = q;
      console.log(this.selectedQuiz);
      localStorage.setItem('quiz', this.selectedQuiz);
    }

}
