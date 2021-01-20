import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, OrdersRoutingModule, RouterModule, Router ],
    declarations: [ OrdersComponent ]
})
export class OrdersModule { }