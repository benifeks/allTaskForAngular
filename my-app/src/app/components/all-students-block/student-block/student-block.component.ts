import { Component, Input } from '@angular/core';
import { Student } from '../../../models/student';
import { Titles } from '../../../models/titles';

@Component({
  selector: 'app-student-block',
  templateUrl: './student-block.component.html',
  styleUrls: ['./student-block.component.css'],
})
export class StudentBlockComponent {
  @Input() givenstudent: Student;
  @Input() title: Titles;
}
