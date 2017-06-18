import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, InputTextModule } from 'primeng/primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GlobalService } from './../services/global.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [],
  providers: [GlobalService]
})
export class SharedModule { }
