import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { GetUserDataService } from '../service/get-user-data.service';

import { UserDetail } from '../models/userdetails.model';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmpDetailComponent implements OnInit {
  @Input() empObj: UserDetail;
  userDatRecords: any;
  num: number = 0;

  constructor(private _uds: GetUserDataService, private _cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this._uds.getUserDataList().subscribe((res) => {
      console.log(res, " User data list");
      this.userDatRecords = res;
      this._cdr.markForCheck();
    });
  }

  addumber() {
    this.num = this.num + 1;
  }

}
