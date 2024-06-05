import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: ` <h3>404 Error Requested Page not Found.</h3> `,
  styles: ['h3{color: red; font-size: 50px}'],
})
export class StatusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
