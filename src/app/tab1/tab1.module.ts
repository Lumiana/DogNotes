import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { DatePickerModule } from 'ionic4-date-picker';

// 1803518 Annemari Mustonen, added module for the calendar component
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DatePickerModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
