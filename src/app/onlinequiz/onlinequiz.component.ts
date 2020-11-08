import { Component, OnInit } from '@angular/core';
import { Question } from '../model.question';
import { QuestionserviceService } from '../questionservice.service';

@Component({
  selector: 'app-onlinequiz',
  templateUrl: './onlinequiz.component.html',
  styleUrls: ['./onlinequiz.component.css']
})
export class OnlinequizComponent implements OnInit {

  questions:Question[] = [];
  questionId: number;
  questionStr: string;
  option: any[];
  index:number = 0;
  selectedAnswer: string;
  quizAnswers: string[];
  score:number = 0;
  quizDiv: boolean = false;
  startDiv:boolean = true;
 


  constructor(private questionService:QuestionserviceService) { }

  ngOnInit(): void {

    this.questionService.loadQuestions().subscribe(result => this.questions=result);
    
    

  }

  startQuiz(){
    this.quizDiv = true;
    this.startDiv = false;
    this.quizAnswers = new Array(this.questions.length);
    this.questionId = this.questions[this.index].qid;
    this.questionStr = this.questions[this.index].question;
    this.option = this.questions[this.index].options;
  }

  nextQuestion(){
    this.quizAnswers[this.index] = this.selectedAnswer;
    this.index++;
    if(this.index >= this.questions.length - 1)
    {
      this. index = this.questions.length - 1;
    }
    this.questionId = this.questions[this.index].qid;
    this.questionStr = this.questions[this.index].question;
    this.option = this.questions[this.index].options;
    
    this.selectedAnswer = this.quizAnswers[this.index];

    console.log(this.index);
   
    
  }

  previousQuestion(){
    --this.index;
    if(this.index <= 0)
    {
      this.index = 0;
    }
    

    this.questionId = this.questions[this.index].qid;
    this.questionStr = this.questions[this.index].question;
    this.option = this.questions[this.index].options;

    this.selectedAnswer = this.quizAnswers[this.index];
    console.log(this.quizAnswers);

  }

 

  submitQuiz() {

    
    var i: number;

    for(i = 0; i < this.questions.length; i++)
    {
      if(this.quizAnswers[i] == this.questions[i].answer)
      {
      
        this.score++;
        
      }
    }

    alert(this.score + "/10");

  }



}
