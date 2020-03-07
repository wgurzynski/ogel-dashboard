import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from '../../../node_modules/rxjs/operators';
import { forkJoin } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionDataService {
  machinesData: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:member-ordering
  productionDataApiUrl = 'https://www.marviq.com/assessment/index.php?page=a&from=2018-01-07%2000:00:00';
  // tslint:disable-next-line:member-ordering
  machineTempApiUrl = 'https://www.marviq.com/assessment/index.php?page=b&from=2018-01-07%2000:00:00';
  // tslint:disable-next-line:member-ordering
  oeeApiUrl = 'https://www.marviq.com/assessment/index.php?page=c&from=2018-01-07%2000:00:00';

  fetchCoresAndMachinesData = () => {
      return forkJoin([
          this.http.get(this.productionDataApiUrl).pipe(map(responseData => {
              const mArray = [];
              // tslint:disable-next-line:forin
              for (const key in responseData) {
                  mArray.push({
                      name: responseData[key].MACHINE,
                      dateTimeFrom: responseData[key].DATETIME_FROM,
                      dateTimeTo: responseData[key].DATETIME_TO,
                      productedQuantity: responseData[key].PRODUCTION,
                      downTimePercentage: responseData[key].DOWNTIME_PERCENTAGE,
            scrapPercentage: responseData[key].SCRAP_PERCENTAGE,
            scrapQuantity: (responseData[key].SCRAP_PERCENTAGE / 100) * responseData[key].PRODUCTION,
            // tslint:disable-next-line:max-line-length
            totalNetProduction: responseData[key].PRODUCTION - ((responseData[key].SCRAP_PERCENTAGE / 100) * responseData[key].PRODUCTION),
            hourlyProduction: {
              h0: responseData[key].H0,
              h1: responseData[key].H1,
              h2: responseData[key].H2,
              h3: responseData[key].H3,
              h4: responseData[key].H4,
              h5: responseData[key].H5,
              h6: responseData[key].H6,
              h7: responseData[key].H7,
              h8: responseData[key].H8,
              h9: responseData[key].H9,
              h10: responseData[key].H10,
              h11: responseData[key].H11,
              h12: responseData[key].H12,
              h13: responseData[key].H13,
              h14: responseData[key].H14,
              h15: responseData[key].H15,
              h16: responseData[key].H16,
              h17: responseData[key].H17,
              h18: responseData[key].H18,
              h19: responseData[key].H19,
              h20: responseData[key].H20,
              h21: responseData[key].H21,
              h22: responseData[key].H22,
              h23: responseData[key].H23,
            },
          });
        }
              return mArray;
      })),
      this.http.get(this.machineTempApiUrl).pipe(map(responseData => {
        // function that is making objects out of array, and formating its key:value pairs
        const coreDataArray = Object.keys(responseData).map((value, key) => {
          // getting coreStatus data
          const coreStatus = responseData[value].substr(0, responseData[value].indexOf('/'));
          // getting coreColor data
          const coreColor = responseData[value].substr(responseData[value].indexOf('/') + 1, responseData[value].length - 1);
          const coreObj = {
            core: {
              status: coreStatus,
              color: coreColor
            },
          };
          return coreObj;
        }
        );
        return coreDataArray;
      })),
      this.http.get(this.oeeApiUrl).pipe(map(responseData => {
        const ooeArray = [];
        // tslint:disable-next-line:forin
        for (const key in responseData) {
          ooeArray.push({
            performance: responseData[key].PERFORMANCE,
            availability: responseData[key].AVAILABILITY,
            quality: responseData[key].QUALITY,
            oee: responseData[key].OEE
          });
        }
        return ooeArray;
      }))
    ]);
  }
}


