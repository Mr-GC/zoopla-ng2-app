import { Injectable } from '@angular/core';
import { Http, Headers, Response, Jsonp } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SharedService {
	propertiesURL = "https://api.zoopla.co.uk/api/v1/property_listings.json?postcode=";
	propertiesURL2 = "&area=";
	propertiesAPI = "&api_key=wfkf5bpmz3svxr7fvqc9echm&callback=JSONP_CALLBACK&jsonp=callback";
	totReqsMade: number = 0;
	constructor(private jsonp:Jsonp) { }
	
	findProperties(postcode, area){
		this.totReqsMade = this.totReqsMade + 1;
		return this.jsonp.get(this.propertiesURL + postcode + this.propertiesURL2 + area + this.propertiesAPI)
            .map(function(res: Response){
            return res;
        }).catch(function(error: any){return Observable.throw(error);
        });
	}

}
