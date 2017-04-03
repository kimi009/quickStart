/**
 * Created by kimi on 2017/3/29.
 */
import {Directive,ElementRef } from '@angular/core';

@Directive({selector: '[highlight]'})
export class HighlightDirective{
  constructor(el: ElementRef){
    el.nativeElement.style.backgroundColor = 'gold';
    console.log('* AppRoot highlight called for ${el.nativeElement.tagName}')
  }
}
