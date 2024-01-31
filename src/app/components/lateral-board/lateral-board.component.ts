import { Component } from '@angular/core';
import { faAngleDown, faAngleUp, faBox, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-lateral-board',
  templateUrl: './lateral-board.component.html'
})
export class LateralBoardComponent {
  faAngleDown = faAngleDown
  faAngleUp = faAngleUp
  faTrello = faTrello
  faBox = faBox
  faWaveSquare = faWaveSquare
  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1'
        },
        {
          label: 'Sub Item 1.2'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1'
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1'
        },
        {
          label: 'Sub Item 3.2'
        },
        {
          label: 'Sub Item 3.3'
        }
      ]
    }
  ]


}
