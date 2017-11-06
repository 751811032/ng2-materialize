import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MzCheckboxModule, MzDatepickerModule, MzIconModule, MzInputModule } from 'ng2-materialize';

import { CodeSnippetModule } from '../shared/code-snippet/code-snippet.module';
import { PropertiesTableModule } from '../shared/properties-table/properties-table.module';
import { DatepickerComponent } from './datepicker.component';
import { ROUTES } from './datepicker.routing';

@NgModule({
  imports: [
    CodeSnippetModule,
    CommonModule,
    FormsModule,
    MzCheckboxModule,
    MzDatepickerModule,
    MzIconModule,
    MzInputModule,
    PropertiesTableModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [DatepickerComponent],
})
export class DatepickerModule { }
