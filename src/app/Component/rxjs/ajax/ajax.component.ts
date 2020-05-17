import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const getLanguageJsonUrl = 'http://sd-sit.decoder.com.tw/TW_CISL/setup/downloadLanguage';
    this.getAPIJson(getLanguageJsonUrl).subscribe();
  }


  private getAPIJson(APIUrl: string): Observable<any> {
    // return ajax.getJSON(APIUrl, { crossDomain: true }).pipe(
    //   tap(x => console.log)
    // );

    return ajax({
      url: `${APIUrl}?time=${new Date().getTime()}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'crossDomain': true
      }
    }).pipe(
      tap(x => console.log)
    );
  }

  private createXHR() {
    return new XMLHttpRequest();
  };





}
