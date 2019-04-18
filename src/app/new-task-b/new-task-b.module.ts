import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewTaskBComponent } from './new-task-b.component';

const routes: Routes = [
  {
    path: '',
    component: NewTaskBComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewTaskBComponent]
})
export class NewTaskBComponentModule {}
