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
	
	callPropertiesService() { 
		this._sharedService.findProperties(this.id_postcode, this.id_area)
		.subscribe(
		lstresult => { 
			this.op_image = lstresult["listing"][0]["image_url"];
			this.op_address = lstresult["listing"][0]["displayable_address"];
			this.op_description = lstresult["listing"][0]["description"];
		},
		error => {
					console.log("Error. The findProperties result JSON value is as follows:");
					console.log(error);
				}
		); 
    }
}
