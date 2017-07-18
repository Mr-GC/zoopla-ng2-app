import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['properties.component.css']
})
export class PropertiesComponent implements OnInit {
	id_postcode: string = "";
	id_area: string = "";
	op_propertiesList = [];
	constructor(private _sharedService: SharedService) { }

	ngOnInit() {
	}
	
	callPropertiesService() { 
		this._sharedService.findProperties(this.id_postcode, this.id_area)
		.subscribe(
		lstresult => { 
			var items: any[] = [];
			var arrLength = lstresult["listing"].length;
			for(var i = 0; i < arrLength; i++){
				 items.push(lstresult["listing"][i]);
			};
			this.op_propertiesList = items;
		},
		error => {
					console.log("Error. The findProperties result JSON value is as follows:");
					console.log(error);
				}
		); 
    }
}
