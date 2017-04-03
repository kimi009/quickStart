/**
 * Created by kimi on 2017/3/30.
 */
import { Component } from '@angular/core';

@Component({
    selector:'click-me',
    template:`
        <button (click)="onClickMe()">Click me</button>
        {{clickMsg}}
        <input (keyup)="onKey($event)">
        <p>{{values}}</p>
        <input (keyup)="onKey1($event)" (close)="closeInput()" (reset)="resetInput()">
        <p>{{values1}}</p>
      `
  }
)
export  class  ClickMeComponent{
  clickMsg = '';
  onClickMe() {
    this.clickMsg = 'you are my hero';
  }
  values ='';
  values1 = '';
  onKey(event: any){
    this.values += event.target.value + ' | ';
  }
  onKey1(event: KeyboardEvent){
    this.values1 = (<HTMLInputElement>event.target).value + ' | ';
  }
  closeInput(){
    this.values1 = '';
  }
  resetInput(){
    this.values1 = '';
  }
}
