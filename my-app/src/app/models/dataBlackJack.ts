export interface DataBlackJack {
  scorePlayer: any;
  scoreBankir: number;
  scoreBankirShow: any;
  allCardsPlayer: Array<any>;
  allCardsBankir: Array<any>;
}

export interface Deck {
  cards?: any;
  suits: any;
  ranks: any;
  values: any;
}

export interface CardBets {
  moneyPlayer: any;
  ventures: string;
  venturesForCounting: number;
  resultVenture: string;
  disableGame: boolean;
  disableVenture: boolean;
}
