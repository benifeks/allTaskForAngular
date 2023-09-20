import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataHorses } from '../../../models/dataHorses';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input() sideBarDataHorses: DataHorses;
  @Output() outCounterValue = new EventEmitter<number>();

  counter: number = 0;
  increment() {
    this.counter++;
    this.outCounterValue.emit(this.counter);
  }

  constructor() {}

  ngOnInit(): void {}
}
