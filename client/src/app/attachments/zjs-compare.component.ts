import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../app.service';
import { SharedBroadcastService, FmtHist } from '../shared/index';

@Component({
  selector: 'zjs-compare',
  template: `
    <span class="z-sm-hide dropdown" #dropdown="bs-dropdown" dropdown>
      <i dropdownToggle class="fa fa-{{icoClass}} z-op-icon dropdown-toggle"></i>
      <ul *dropdownMenu class="dropdown-menu dropdown-menu-right">
        <li *ngIf="icoClass == 'columns'">
          <a href="javascript:;" (click)="showDiffChange.emit('newC')">{{'newCompare' | translate}}</a>
        </li>
        <ng-container *ngIf="formated || icoClass == 'th-list'">
          <li *ngIf="icoClass == 'columns'">
            <a href="javascript:;" (click)="showDiffChange.emit('new')">{{'cpWidthNew' | translate}}</a>
          </li>
          <li *ngIf="icoClass == 'columns'">
            <a href="javascript:;" (click)="showDiffChange.emit('src')">{{'cpWidthSrc' | translate}}</a>
          </li>
          <li *ngFor="let hist of fmtHists">
            <a href="javascript:;" (click)="showDiffChange.emit(hist.name)">{{hist.name}}</a>
          </li>
        </ng-container>
      </ul>
  </span>`
})
export class ZjsCompareComponent implements OnInit {
  @ViewChild('dropdown') dropdown: any;
  @Input() formated: string;
  @Input() icoClass: string = '';
  @Input() fmtHists?: FmtHist[];
  @Output() showDiffChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private appService: AppService,
    private translate: TranslateService,
    private broadcast: SharedBroadcastService
  ) { }

  ngOnInit() {
    if (this.fmtHists === undefined) {
      this.fmtHists = this.appService.getFmtHists();
    }
  }
}
