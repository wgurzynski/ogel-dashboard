import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CockpitComponent } from './cockpit/cockpit.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MachineDataViewComponent } from './machine-data-view/machine-data-view.component';
import { GraphsComponent } from './graphs/graphs.component';
import { SingleMachineComponent } from './machine-data-view/single-machine/single-machine.component';
import { ProductionDataChartComponent } from './graphs/production-data-chart/production-data-chart.component';
import { DoughnutChartComponent } from './graphs/doughnut-chart/doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    MachineDataViewComponent,
    GraphsComponent,
    SingleMachineComponent,
    ProductionDataChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
