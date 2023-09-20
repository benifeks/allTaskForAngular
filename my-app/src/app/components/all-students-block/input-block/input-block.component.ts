import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.css'],
})
export class InputBlockComponent {
  @Output() outEnterName = new EventEmitter<string>();

  enterName(nameInput: HTMLInputElement) {
    this.outEnterName.emit(nameInput.value);
    nameInput.value = '';
  }
}
