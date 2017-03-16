import { Component } from "@angular/core";

@Component({
    selector : 'ah-dynamic-tiles',
    template: `
                <div class="tile ">
                    <h3 class="title">Purple Tile</h3>
                    <p>Hello Purple, this is a colored tile.</p>
                </div>
                <!--
                <div *ngFor class="tile {{tileColor}}">
                    <h3 class="title">{{tileTitle}}</h3>
                    <p>{{tileContent}}</p>
                </div>
                -->
              `
})

export class AhDynamicTiles { }