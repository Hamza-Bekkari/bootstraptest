import { Component } from '@angular/core';
import  { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _freeApiService: freeApiService){
  }
  lstcomments:Comments[];
  ngOnInit(){
    this._freeApiService.getComments()
    .subscribe(
      data => {
        this.lstcomments = data;
      }
    )
  } 


  myDate = Date.now();

  title = 'bootstraptest';
}
