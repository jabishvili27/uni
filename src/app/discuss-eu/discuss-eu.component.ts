import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-discuss-eu',
  templateUrl: './discuss-eu.component.html',
  styleUrls: ['./discuss-eu.component.scss'],
})
export class DiscussEuComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}
}
