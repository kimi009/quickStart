/**
 * Created by kimi on 2017/3/29.
 */
import { Component , Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'app-title',
  templateUrl: 'title.component.html'
})
export class TitleComponent{
  @Input() subTitle = '';
  title = 'Angular Modules';
  user = '';
   constructor(userService : UserService){
     this.user = userService.userName;
   }
}
