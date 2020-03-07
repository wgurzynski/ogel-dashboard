import { Component, OnInit } from '@angular/core';
import { ProductionDataService } from '../../production-data-service/production-data.service';

@Component({
  selector: 'app-production-data-chart',
  templateUrl: './production-data-chart.component.html',
  styleUrls: ['./production-data-chart.component.scss']
})
export class ProductionDataChartComponent implements OnInit {

  constructor(private dataService: ProductionDataService) {
  }
  machinesData;
  contentLoaded = false;

  public barChartType = 'bar';
  public barChartLegend = true;
  public ChartArray = [];
  public newChartArray2 = [];
  public barChartLabels = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00',
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          min: 1000
        }
      }]
    }
  };

  updateChartArray = () => {
    this.ChartArray.forEach((element, index) => {
      this.newChartArray2.push(
        Object.assign({}, element[index], {
          data: this.ChartArray[index], label: this.machinesData[index].name
        })
      );
    });
  }

  updateChart = () => {
    this.machinesData.forEach((element, i) => {
      this.ChartArray.push(Object.values(element.hourlyProduction));
    });
    this.updateChartArray();
  }

  getData = () => {
    this.dataService.fetchCoresAndMachinesData().subscribe((results => {
      // declaration of object merging function
      const mergeArrayObjects = (arr1, arr2, arr3) => {
        return arr1.map((item, i) => {
          return Object.assign({}, item, arr2[i], arr3[i]);
        });
      };
      // merge both objects (coreDataArray & machineArray into one object)
      this.machinesData = mergeArrayObjects(results[0], results[1], results[2]);
      this.contentLoaded = !this.contentLoaded;
      this.updateChart();
    }));
  }

  ngOnInit() {
    this.getData();
  }
}
