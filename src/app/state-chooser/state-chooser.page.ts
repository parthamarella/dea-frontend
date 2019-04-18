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
    alert("You have selected Andhra Pradesb")
    this.router.navigate(["/new-task"]);
  }

  openState2() {
    alert("You have selected Madhya Pradesh ")
    this.router.navigate(["/new-task-a"]);
  }
  openState3() {
    alert("You have selected Uttar Pradesh ")
    this.router.navigate(["/new-task"]);
  }

}
