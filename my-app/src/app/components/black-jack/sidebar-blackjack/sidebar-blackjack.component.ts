import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { DataBlackJack } from 'src/app/models/dataBlackJack';

@Component({
  selector: 'app-sidebar-blackjack',
  templateUrl: './sidebar-blackjack.component.html',
  styleUrls: ['./sidebar-blackjack.component.css'],
})
export class SidebarBlackjackComponent {
  @Input() sideBarBJ: DataBlackJack;

  messagePlayer: string;
  messageResult: string;
  messageBankir: string;

  updateSideBar(
    messagePlayer: string,
    messageResult: string,
    messageBankir: string
  ) {
    this.messagePlayer = messagePlayer;
    this.messageResult = messageResult;
    this.messageBankir = messageBankir;
  }
}
