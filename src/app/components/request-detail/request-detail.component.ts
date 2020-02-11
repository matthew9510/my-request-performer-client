import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  @Input() artist: string;
  @Input() song: string;
  @Input() amount: number;
  @Input() status: string;


  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

  get isSmallScreen() {
    return this.breakpointObserver.isMatched('(max-width: 350px)');
  }


}