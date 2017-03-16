import { Component } from '@angular/core';

@Component({
  template: `
            <ah-banner></ah-banner>
            
            <div class="container">
            <div class="row">
              <div class="col-xs-3 col-sm-3">
                <ah-sidebar></ah-sidebar>
              </div>
              <div class="col-xs-9 col-sm-9">
                <ah-dynamic-tiles tileColor="{{tile.color}}"></ah-dynamic-tiles>
                <ah-dynamic-tiles tileColor="{{tile.color}}"></ah-dynamic-tiles>
                <ah-dynamic-tiles tileColor="{{tile.color}}"></ah-dynamic-tiles>
              </div>
            </div>
            </div>
            `
})

export class HomeComponent { }