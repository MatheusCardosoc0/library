import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit {
  livros: any[] = [];

  constructor(private _emService: EmployeeService) {}

  count: number = 0;

  getEmployeeList(num: number = this.count) {
    this._emService.getBooks().subscribe((data) => {
      console.log(data.results.lists);
      console.log(data.results.lists[num].books);

      this.livros = data.results.lists[num].books;
    });
  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  nextPage() {
    if (this.count === 11) {
      this.count = 0;
    } else {
      this.count += 1;
    }

    this.getEmployeeList();
  }

  lastPage() {
      this.count -= 1;

    this.getEmployeeList();
  }
}
