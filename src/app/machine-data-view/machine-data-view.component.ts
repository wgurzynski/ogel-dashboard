import { Component, OnInit } from '@angular/core';
import { ProductionDataService } from '../production-data-service/production-data.service';

@Component({
  selector: 'app-machine-data-view',
  templateUrl: './machine-data-view.component.html',
  styleUrls: ['./machine-data-view.component.scss']
})
export class MachineDataViewComponent implements OnInit {

  contentLoaded = false;
  hourContentVisible = true;
  machinesData;

  constructor(private dataService: ProductionDataService ) { }

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
        console.log(this.machinesData);
      }));
    }

    ngOnInit() {
      this.getData();
  }
}
