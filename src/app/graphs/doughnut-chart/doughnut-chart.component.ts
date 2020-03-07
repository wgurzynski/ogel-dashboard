import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  @Input() machine;
  constructor() { }

  efficiencyPercentage;
  barChartOptions = {
    scaleShowVerticalLine: true,
    responsive: true,
  };

  public doughnutChartLabels = ['OEE', ''];
  public doughnutChartData = [
  ];
  public doughnutChartType = 'doughnut';

  
  ngOnInit() {
    this.efficiencyPercentage = this.machine.oee.toFixed(2)*100;
    console.log(typeof this.machine.oee);
    this.doughnutChartData = [[this.efficiencyPercentage, 100 - this.efficiencyPercentage]];
  }

}
