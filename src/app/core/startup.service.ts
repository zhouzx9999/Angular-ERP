import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {zip} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  load(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      zip(
        this.httpClient.get('assets/temp/app-data.json'),
        this.httpClient.get('assets/temp/app-data.json'),
      ).pipe(

      );
    });
  }
}
