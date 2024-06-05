import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: ` <h3>Status Component</h3> `,
  styles: ['h3{color: red; font-size: 34px}'],
})
export class StatusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
