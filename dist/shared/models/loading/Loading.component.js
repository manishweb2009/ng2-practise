"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ahLoading = (function () {
    function ahLoading() {
    }
    return ahLoading;
}());
ahLoading = __decorate([
    core_1.Component({
        selector: 'ah-loading',
        template: "\n            <div class=\"loading\">\n                <div class=\"rectangle-bounce\">\n                    <span class=\"rect1\"></span>\n                    <span class=\"rect2\"></span>\n                    <span class=\"rect3\"></span>\n                    <span class=\"rect4\"></span>\n                    <span class=\"rect5\"></span>\n                </div>\n            </div>\n  ",
        styleUrls: ['app/shared/models/loading/loading.component.css']
    })
], ahLoading);
exports.ahLoading = ahLoading;
//# sourceMappingURL=loading.component.js.map