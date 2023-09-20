import { Component } from '@angular/core';
import { Student } from '../../../models/student';
import { Titles } from '../../../models/titles';

@Component({
  selector: 'app-variables-block',
  templateUrl: './variables-block.component.html',
  styleUrls: ['./variables-block.component.css'],
})
export class VariablesBlockComponent {
  students: Student[] = [
    { id: 1, name: 'AAA' },
    { id: 2, name: 'BBB' },
    { id: 3, name: 'CCC' },
    { id: 4, name: 'DDD' },
  ];

  titles: Titles = {
    titleAllStudents: 'Все студенты: ',
    titleOneStudent: 'Студент: ',
  };

  currentClasses = {
    variablesRed: true,
    variablesGreene: false,
  };

  messageGreene = 'изменить тему на "ЗЕЛЁНЫЙ"';
  messageRed = 'изменить тему на "КРАСНЫЙ"';

  condition = true;

  changeTheme() {
    if (this.currentClasses.variablesRed) {
      this.currentClasses.variablesRed = false;
      this.currentClasses.variablesGreene = true;
      this.condition = false;
      return;
    }
    this.currentClasses.variablesRed = true;
    this.currentClasses.variablesGreene = false;
    this.condition = true;
  }

  addName(name: string) {
    this.students.push({
      name: name,
      id: this.students.length + 1,
    });
  }
}
