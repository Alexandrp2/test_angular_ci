import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-apitrain',
  templateUrl: './apitrain.component.html',
  styleUrls: ['./apitrain.component.css']
})
export class ApitrainComponent implements OnInit {

  trainData = {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    // this.httpClient.get( // this.httpClient.get() est un observable (une source de données)
    //   'http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève'
    // )
    // .subscribe(
    //     (httpResult) => {this.trainData = httpResult}
    // ); 
    this.getTrainData().subscribe(
      (httpResult) => {this.trainData = httpResult}
    );
  }

  getTrainData(): Observable<Object> {
    var data = this.httpClient.get( // this.httpClient.get() est un observable (une source de données)
      'http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève'
    );
    // .subscribe(
    //     (httpResult) => {this.trainData = httpResult}
    // );
    return data;
  }

}
