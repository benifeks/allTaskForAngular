import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SidebarBlackjackComponent } from './sidebar-blackjack/sidebar-blackjack.component';
import { FieldBlackjackComponent } from './field-blackjack/field-blackjack.component';
import { DataBlackJack, Deck, CardBets } from 'src/app/models/dataBlackJack';
import { VentureComponent } from './venture/venture.component';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.css'],
})
export class BlackJackComponent {
  @ViewChild(SidebarBlackjackComponent) childSideBar: SidebarBlackjackComponent;
  @ViewChild(FieldBlackjackComponent) childField: FieldBlackjackComponent;
  @ViewChild(VentureComponent) childVenture: VentureComponent;

  cardBets: CardBets = {
    moneyPlayer: '---',
    ventures: '---',
    venturesForCounting: 0,
    resultVenture: '',
    disableGame: false,
    disableVenture: true,
  };

  deck: Deck = {
    cards: [],
    suits: ['&clubs;', '&diams;', '&hearts;', '&spades;'],
    ranks: ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    values: [6, 7, 8, 9, 10, 2, 3, 4, 11],
  };

  dataBlackJack: DataBlackJack = {
    scorePlayer: '',
    scoreBankir: 0,
    scoreBankirShow: '',
    allCardsPlayer: [],
    allCardsBankir: [],
  };
  disable = true;
  disableShufle = true;

  startGame() {
    this.cardBets.disableVenture = false;
    this.cardBets.moneyPlayer = 100;
    this.cardBets.ventures = '---';
    this.cardBets.resultVenture = 'Ждём вашу ставку';
    this.setStartingValues();
    this.childSideBar.updateSideBar('', '---', '');
    this.childVenture.moveFocus();
    this.childField.clearFields();
    this.childVenture.clearInputValue();
  }

  getInputVenture(inputVenture: string) {
    if (+inputVenture > 0 && this.cardBets.moneyPlayer >= +inputVenture) {
      this.disableShufle = false;

      this.cardBets.ventures = inputVenture;
      this.cardBets.venturesForCounting = +inputVenture;

      this.cardBets.moneyPlayer =
        this.cardBets.moneyPlayer - this.cardBets.venturesForCounting;

      this.cardBets.disableVenture = true;
      this.cardBets.resultVenture = 'Ставки сделаны';
    }
  }

  countTheBets() {
    if (this.childSideBar.messageResult === 'вы выиграли') {
      this.cardBets.moneyPlayer =
        this.cardBets.moneyPlayer + this.cardBets.venturesForCounting * 2;
      this.cardBets.ventures = '---';
      this.cardBets.resultVenture = 'Деньги - ВАШИ! Играем дальше?!';
      this.cardBets.disableVenture = false;
      this.childVenture.moveFocus();
      return;
    }
    if (this.childSideBar.messageResult === 'вы проиграли') {
      this.cardBets.ventures = '---';
      if (this.cardBets.moneyPlayer > 0) {
        this.cardBets.resultVenture = 'Вы ПРОИГРАЛИ ставку! Играем дальше?!';
        this.cardBets.disableVenture = false;
        this.childVenture.moveFocus();
        return;
      }
      if (this.cardBets.moneyPlayer === 0) {
        this.cardBets.resultVenture = 'Вы - БАНКРОТ!!!';
        return;
      }
    }

    if (this.childSideBar.messageResult === 'ничья') {
      this.cardBets.ventures = this.cardBets.venturesForCounting.toString();
      this.cardBets.resultVenture = 'НИЧЬЯ! Продолжаем! Возьмите карту...';
      this.shuffleDeckAndStart();
      return;
    }
  }

  shuffleDeck() {
    this.deck.cards = [];
    let card;
    let collectionOfCards = new Map();
    this.deck.suits.map((suit: string) => {
      this.deck.ranks.map((rank: string, i: number) => {
        collectionOfCards.set('suit', suit);
        collectionOfCards.set('rank', this.deck.ranks[i]);
        collectionOfCards.set('value', this.deck.values[i]);
        card = Object.fromEntries(collectionOfCards.entries());
        this.deck.cards.push(card);
      });
    });
    this.deck.cards.sort(() => Math.random() - 0.5);
  }

  setStartingValues() {
    this.dataBlackJack.scorePlayer = '---';
    this.dataBlackJack.scoreBankir = 0;
    this.dataBlackJack.scoreBankirShow = '---';
    this.dataBlackJack.allCardsPlayer.length = 0;
    this.dataBlackJack.allCardsBankir.length = 0;
    this.childSideBar.updateSideBar('', 'Идёт игра', '');
    this.childField.changeThemeStart();
  }

  shuffleDeckAndStart() {
    this.childField.clearFields();
    this.shuffleDeck();
    this.setStartingValues();
    this.disable = false;
    this.disableShufle = true;
  }

  countScores(cardsArray: any) {
    return cardsArray.reduce(
      (accumulator: number, currentCard: any) =>
        accumulator + currentCard.value,
      0
    );
  }

  takeCardPlayer() {
    this.dataBlackJack.allCardsPlayer.push(this.deck.cards[0]);
    this.dataBlackJack.scorePlayer = this.countScores(
      this.dataBlackJack.allCardsPlayer
    );
    this.deck.cards.shift();
    this.childField.createCardPlayer();

    if (this.dataBlackJack.scorePlayer > 21) {
      this.disable = true;
      this.childSideBar.updateSideBar('перебор', 'вы проиграли', '');
      this.takeCardBankir();
      this.childField.showСardsBankir();
      this.dataBlackJack.scoreBankirShow = this.dataBlackJack.scoreBankir;
      this.countTheBets();
      return;
    }

    if (this.dataBlackJack.scorePlayer === 21) {
      this.pass();
      this.takeCardBankir();
      return;
    }
    this.countTheBets();
    this.takeCardBankir();
  }

  bankirPlays() {
    this.dataBlackJack.allCardsBankir.push(this.deck.cards[0]);
    this.dataBlackJack.scoreBankir = this.countScores(
      this.dataBlackJack.allCardsBankir
    );
    this.deck.cards.shift();

    if (this.dataBlackJack.scoreBankir > 21) {
      this.disable = true;
      this.childSideBar.updateSideBar('', 'вы выиграли', 'перебор');
      this.childField.showСardsBankir();
      this.dataBlackJack.scoreBankirShow = this.dataBlackJack.scoreBankir;
      this.countTheBets();
      return;
    }

    if (
      this.dataBlackJack.scoreBankir > 14 &&
      this.dataBlackJack.scoreBankir <= 21
    ) {
      this.childSideBar.updateSideBar('', 'Идёт игра', 'пас');
    }
    this.childField.createCardBankir();
  }

  takeCardBankir() {
    if (
      this.dataBlackJack.scoreBankir < 15 &&
      this.dataBlackJack.scorePlayer <= 21
    ) {
      this.bankirPlays();
    }
  }

  launchBankir() {
    if (this.dataBlackJack.scoreBankir < 15) {
      this.bankirPlays();
      this.launchBankir();
    }
  }

  pass() {
    this.childSideBar.updateSideBar('пас', 'Идёт игра', '');
    this.disable = true;

    this.launchBankir();

    this.childField.showСardsBankir();
    this.dataBlackJack.scoreBankirShow = this.dataBlackJack.scoreBankir;

    if (
      (this.dataBlackJack.scorePlayer > this.dataBlackJack.scoreBankir ||
        this.dataBlackJack.scorePlayer < this.dataBlackJack.scoreBankir) &&
      this.dataBlackJack.scoreBankir > 21
    ) {
      this.childSideBar.updateSideBar('', 'вы выиграли', 'перебор');
      return;
    }

    if (
      this.dataBlackJack.scorePlayer > this.dataBlackJack.scoreBankir &&
      this.dataBlackJack.scoreBankir < 21
    ) {
      this.childSideBar.updateSideBar('', 'вы выиграли', '');
      this.countTheBets();
      return;
    }

    if (this.dataBlackJack.scorePlayer < this.dataBlackJack.scoreBankir) {
      this.childSideBar.updateSideBar('', 'вы проиграли', '');
      this.countTheBets();
      return;
    }

    this.childSideBar.updateSideBar('', 'ничья', '');
    this.countTheBets();
  }

  constructor() {}
  ngOnInit(): void {}
}
