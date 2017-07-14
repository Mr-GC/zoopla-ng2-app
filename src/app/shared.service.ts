import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SharedService {
	propertiesURL = "https://api.zoopla.co.uk/api/v1/property_listings.json?postcode=";
	propertiesURL2 = "&area=";
	propertiesAPI = "&api_key=wfkf5bpmz3svxr7fvqc9echm";
	constructor(private _http: Http) { }
	
	findProperties(postcode, area){
		this.totReqsMade = this.totReqsMade + 1;
		return this._http.get(this.propertiesURL + postcode + this.propertiesURL2 + area + propertiesAPI)
            .map(response => {
                { return response.json() };
            })
            .catch(error => Observable.throw(error.json()));
	}

}
