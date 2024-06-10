import { Component, OnInit } from '@angular/core';
import { HomeservicService } from './homeservic.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private HomeservicService: HomeservicService) {}
  headername = 'Angular Tutorial';
  salary = 50000;

  colors =["red","blue","green","yellow","brown"]

  isDisabled = true;
  colorName = 'green';
  fontSize = '40px';
  className = 'headClass';
  styleObj = {
    color: 'red',
    'font-weight': 'bold',
    'font-size': '30px',
  };
  Data: any;

  ngOnInit(): void {
    this.displaydata();
  }
  displaydata() {
    this.HomeservicService.datafetch().subscribe((res) => {
      this.Data = res;
      console.log('data', this.Data);
    });
  }
  functionClick(name: string) {
    alert(name);
  }
}
