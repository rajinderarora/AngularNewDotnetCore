import { Component, Inject } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from "../api/models";
import { WeatherForecastService } from "../api/services";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  /*constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }*/
  constructor(private weatherForecastService: WeatherForecastService) {
    this.weatherForecastService.weatherForecastGet$Json().subscribe(result => {
      this.forecasts = result;
    });
  }
}

/*interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}*/
