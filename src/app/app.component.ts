import { Component, OnInit } from '@angular/core';
import { ApiService } from '@service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private api: ApiService) { }
  ngOnInit() {
    let Observer = {
      next: data => console.log(data),
      error: err => console.log(err)
    }
    this.api.TestMap().subscribe(Observer);
    this.api.TestSwitchMap(true).subscribe(Observer);
    this.api.TestSwitchMap(false).subscribe(Observer);
  }
}
