import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { DataBlackJack } from 'src/app/models/dataBlackJack';

@Component({
  selector: 'app-field-blackjack',
  templateUrl: './field-blackjack.component.html',
  styleUrls: ['./field-blackjack.component.css'],
})
export class FieldBlackjackComponent {
  @Input() fieldDataBJ: DataBlackJack;

  cardsPlayerArr: Array<any> = [];
  cardsBanrirArr: Array<any> = [];
  cardPlayer = document.createElement('div') as HTMLElement;
  cardBankir = document.createElement('div') as HTMLElement;

  currentClasses = {
    cardDeck: true,
    cardDeckOpen: false,
  };

  changeThemeStart() {
    this.currentClasses.cardDeck = true;
    this.currentClasses.cardDeckOpen = false;
  }

  changeTheme() {
    this.currentClasses.cardDeck = false;
    this.currentClasses.cardDeckOpen = true;
  }

  createCardPlayer() {
    this.cardsPlayerArr.length = 0;
    this.fieldDataBJ.allCardsPlayer.forEach((card: any) => {
      this.cardPlayer.innerHTML = `${card.rank}${card.suit}`;
      this.cardsPlayerArr.push(this.cardPlayer.textContent);
    });
  }

  createCardBankir() {
    this.cardBankir.innerHTML = ``;
    this.cardsBanrirArr.push(this.cardBankir.textContent);
  }

  showСardsBankir() {
    this.cardsBanrirArr.length = 0;
    this.changeTheme();
    this.fieldDataBJ.allCardsBankir.forEach((card: any) => {
      this.cardBankir.innerHTML = `${card.rank}${card.suit}`;
      this.cardsBanrirArr.push(this.cardBankir.textContent);
    });
  }

  clearFields() {
    this.cardsPlayerArr.length = 0;
    this.cardsBanrirArr.length = 0;
  }

  constructor() {}
}
