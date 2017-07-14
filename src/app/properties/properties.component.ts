import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styles: []
})
export class PropertiesComponent implements OnInit {
	id_postcode: string = "";
	id_area: string = "";
	op_image: string = "";
	op_address: string = "";
	op_description: string = "";
	constructor(private _sharedService: SharedService) { }

	ngOnInit() {
	}
	
	callWeatherService() { 
		this._sharedService.findProperties(this.id_postcode, this.id_area)
		.subscribe(
		lstresult => { 
			this.op_city = lstresult["query"]["results"]["channel"]["location"]["city"];
			this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
			this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
			this.op_date = lstresult["query"]["results"]["channel"]["item"]["condition"]["date"];
			this.op_text = lstresult["query"]["results"]["channel"]["item"]["condition"]["text"];
			this.op_temp = lstresult["query"]["results"]["channel"]["item"]["condition"]["temp"]; 
		},
		error => {
					console.log("Error. The findWeather result JSON value is as follows:");
					console.log(error);
				}
		); 
    }
}
