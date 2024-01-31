import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons'
import { ToDo } from 'src/models/toDo.model';

interface Data{
  todo: ToDo
}

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html'
})

export class TodoModalComponent {
  faClose = faClose
  faCheckToSlot = faCheckToSlot
  faBars = faBars
  faUser = faUser
  faTag = faTag
  faCheckSquare = faCheckSquare
  faClock = faClock

  todo : ToDo
  constructor(private dialogref: DialogRef<Data>, @Inject(DIALOG_DATA)  data: Data){
    this.todo=data.todo
  }


  closeDialog(){
    this.dialogref.close()
  }

}
