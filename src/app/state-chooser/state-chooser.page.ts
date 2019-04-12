import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-chooser',
  templateUrl: './state-chooser.page.html',
  styleUrls: ['./state-chooser.page.scss'],
})
export class StateChooserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openState1() {
    alert("opening state")
    this.router.navigate(["/new-task"]);
  }

  openState2() {
    alert("opening state")
    this.router.navigate(["/new-task"]);
  }
  openState3() {
    alert("opening state")
    this.router.navigate(["/new-task"]);
  }

}
