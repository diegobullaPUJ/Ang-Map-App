import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit{

  @Input() lngLat?: [number, number];

  @ViewChild('map')
  public divMap!: ElementRef;

  public map?: Map;

  ngAfterViewInit() {

    if( !this.divMap?.nativeElement ) throw "Map div not found"
    if (!this.lngLat) throw "LngLat can't be null"

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat,// starting position [lng, lat]
      zoom: 15,
    });

    //marker
    new Marker()
      .setLngLat( this.lngLat )
      .addTo( this.map );
  }


}
