"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AhDynamicTiles = (function () {
    function AhDynamicTiles() {
    }
    return AhDynamicTiles;
}());
AhDynamicTiles = __decorate([
    core_1.Component({
        selector: 'ah-dynamic-tiles',
        template: "\n                <div class=\"tile \">\n                    <h3 class=\"title\">Purple Tile</h3>\n                    <p>Hello Purple, this is a colored tile.</p>\n                </div>\n                <!--\n                <div class=\"tile {{tileColor}}\">\n                    <h3 class=\"title\">{{tileTitle}}</h3>\n                    <p>{{tileContent}}</p>\n                </div>\n                -->\n              "
    })
], AhDynamicTiles);
exports.AhDynamicTiles = AhDynamicTiles;
//# sourceMappingURL=dynamic-tiles.component.js.map