import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import {Dialog} from '@angular/cdk/dialog'
import { ToDo, Column } from 'src/models/toDo.model';
import { TodoModalComponent } from 'src/app/components/todo-modal/todo-modal.component';

@Component({
  selector: 'app-work-board',
  templateUrl: './work-board.component.html',
  styles: [
    `/* Animate items as they're being sorted. */
.cdk-drop-list-dragging .cdk-drag {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

/* Animate an item that has been dropped. */
.cdk-drag-animating {
  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
}`
  ]

})
export class WorkBoardComponent {

  constructor( private modal: Dialog ){}
  columns:Column[] = [
    {
      title: 'Todos',
      todos:[
        {
          id: '1',
          title: 'Buy a bitch'

        },
        {
          id: '2',
          title: 'Go to Hollywod'

        },
        {
          id: '3',
          title: 'Buy a dog'

        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '1',
          title: 'running of cats '

        },
        {
          id: '2',
          title: 'cheating to a old man'

        },
        {
          id: '3',
          title: 'Fucking with a donkin'

        }
      ]

    },

    {
      title: 'Done',
      todos: [
        {
          id: '1',
          title: 'claim ifel tower'

        },
        {
          id: '2',
          title: 'ride a unicorn'

        },
        {
          id: '3',
          title: 'steel a ape'

        }
      ]
    }
  ]
  todo: ToDo[] = []

  columnName: string = "new Column"
  drop(event: CdkDragDrop<ToDo[]>){

    if(event.previousContainer == event.container){

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    else{
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex)
    }
    console.log(event)

  }


  addColumn(){
    this.columns.push({
      title: 'new Column',
      todos:[]
    })
  }

  openDialog(){
 this.modal.open(TodoModalComponent, {
  minWidth: '300px',
  maxWidth: '50%',
  data: {

  }
 }
  )
  }
}
