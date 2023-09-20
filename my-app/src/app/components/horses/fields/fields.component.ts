import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DataHorses } from '../../../models/dataHorses';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css'],
})
export class FieldsComponent {
  @Input() fieldsDataHorses: DataHorses;
  @ViewChild('divRefRed') divRefRed: ElementRef;
  @ViewChild('divRefGreen') divRefGreen: ElementRef;
  @ViewChild('divRefBlue') divRefBlue: ElementRef;

  showMoving() {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    this.divRefRed.nativeElement.style.marginLeft = `${
      this.fieldsDataHorses.mileageRed * 5
    }px`;
    this.divRefGreen.nativeElement.style.marginLeft = `${
      this.fieldsDataHorses.mileageGreen * 5
    }px`;
    this.divRefBlue.nativeElement.style.marginLeft = `${
      this.fieldsDataHorses.mileageBlye * 5
    }px`;
  }

  constructor() {}

  ngOnInit(): void {}
}
