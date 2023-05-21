import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeListPageRoutingModule } from './home-list-routing.module';

import { HomeListPage } from './home-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeListPageRoutingModule,
    SharedModule
  ],
  declarations: [HomeListPage]
})
export class HomeListPageModule {}
