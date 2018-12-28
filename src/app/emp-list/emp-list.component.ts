import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GetListService } from '../service/get-list.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
  changeDetection: 0
})
export class EmpListComponent implements OnInit {
  empList: any;
  addedID: number = 0;
  selectedEmp: any = {};

  constructor(private _gls: GetListService, private _cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this._gls.getList().subscribe((res) => {
      this.empList = res;
      console.log('Here is the response ', res);
      // debugger
      //this.doAdd(res);
      // This statement will ensure that these changes are taken in consideration in the first detection cycle itself
      //this._cdr.markForCheck();
    });
  }

  doAdd(res) {
    this.empList.push({ name: this.addedID++, surname: "random text" });
  }

  addRecord() {
    this.empList.push({ name: this.addedID++, surname: "random text" });
    //this.empList[this.empList.length] = { name: this.addedID++, surname: "random text" };
    //this.empList[this.empList.length - 2] = { name: this.addedID++, surname: "random text" };
  }

  showDetail({ name, surname }) {
    //debugger

    // Uncomment for on push strategy
    this.selectedEmp = { name, surname };

    // Uncomment for default change detection strategy
    //this.selectedEmp.name = name;
    //this.selectedEmp.surname = surname;
  }
}
