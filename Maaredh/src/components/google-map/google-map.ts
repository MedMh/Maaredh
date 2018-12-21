import { Component } from '@angular/core';

/**
 * Generated class for the GoogleMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

import { ViewChild } from '@angular/core';
import { google } from '@google/maps';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map: any;  

  constructor() {
    
  }

  ionViewDidLoad(){
  	this.initMap();
  }

  initMap(){
  	let coord = new google.maps.LatLng(45,100);
  	let mapOptions: google.maps.MapOptions = {
  		center: coord,
  		zoom: 15,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
  	}
  	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  

}