import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-maps-full-screen',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit, OnDestroy{

  public map?: Map;
  public currentLngLat: LngLat = new LngLat( -74.13188630362463, 4.656355543001979 );

  @ViewChild('map')
  public divMap!: ElementRef;

  ngAfterViewInit(): void {

    if(  !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }


}
