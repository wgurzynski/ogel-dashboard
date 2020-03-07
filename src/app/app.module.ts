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
import { ProductionDataService } from './production-data-service/production-data.service';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ChartsModule} from 'ng2-charts';


const appRoutes: Routes = [
  { path: 'machine-data-view', component: MachineDataViewComponent },
  { path: 'graphs',      component: GraphsComponent },
  { path: '**',      component: MachineDataViewComponent},
  // { path: '**', component: PageNotFoundComponent }
];

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
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProductionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
