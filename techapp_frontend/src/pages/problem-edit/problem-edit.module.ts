import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemEditPage } from './problem-edit';

@NgModule({
  declarations: [
    ProblemEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ProblemEditPage),
  ],
})
export class ProblemEditPageModule {}
