import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardBets } from '../../../models/dataBlackJack';

@Component({
  selector: 'app-venture',
  templateUrl: './venture.component.html',
  styleUrls: ['./venture.component.css'],
})
export class VentureComponent {
  @Input() ventureCardBest: CardBets;
  @Output() outVenture = new EventEmitter<string>();
  clearInput = new EventEmitter<string>();

  enterVenture(inputVenture: HTMLInputElement) {
    this.outVenture.emit(inputVenture.value);
    inputVenture.value = '';
  }
  moveFocus() {
    let inputFocus = document.getElementById('input') as HTMLElement;
    inputFocus.focus();
  }

  clearInputValue() {
    let inputValue = document.getElementById('input') as HTMLInputElement;
    this.clearInput.emit(inputValue.value);
    inputValue.value = '';
  }
}
