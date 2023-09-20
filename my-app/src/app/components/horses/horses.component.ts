import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { FieldsComponent } from './fields/fields.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DataHorses } from '../../models/dataHorses';

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css'],
})
export class HorsesComponent {
  @ViewChild(FieldsComponent) childFields: FieldsComponent;
  @ViewChild(SideBarComponent) childSideBar: SideBarComponent;

  horsesDataHorses: DataHorses = {
    nameRed: 'Red',
    nameGreen: 'Green',
    nameBlue: 'Blue',
    runRed: 0,
    runGreen: 0,
    runBlue: 0,
    mileageRed: 0,
    mileageGreen: 0,
    mileageBlye: 0,
    totalMileage: 0,
  };

  meter: number = 0;

  rollTheDice() {
    this.horsesDataHorses.runRed = Math.floor(Math.random() * 6) + 1;
    this.horsesDataHorses.runGreen = Math.floor(Math.random() * 6) + 1;
    this.horsesDataHorses.runBlue = Math.floor(Math.random() * 6) + 1;

    this.horsesDataHorses.mileageRed =
      this.horsesDataHorses.mileageRed + this.horsesDataHorses.runRed;
    this.horsesDataHorses.mileageGreen =
      this.horsesDataHorses.mileageGreen + this.horsesDataHorses.runGreen;
    this.horsesDataHorses.mileageBlye =
      this.horsesDataHorses.mileageBlye + this.horsesDataHorses.runBlue;

    this.horsesDataHorses.totalMileage = [
      this.horsesDataHorses.totalMileage,
      this.horsesDataHorses.runRed,
      this.horsesDataHorses.runGreen,
      this.horsesDataHorses.runBlue,
    ].reduce((total, currentValue) => total + currentValue, 0);

    this.childFields.showMoving();
    this.childSideBar.increment();
  }

  addCounterValue(someValue: number) {
    this.meter = someValue;
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
