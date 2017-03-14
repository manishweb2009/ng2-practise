"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AhBanner = (function () {
    function AhBanner() {
    }
    return AhBanner;
}());
AhBanner = __decorate([
    core_1.Component({
        selector: 'ah-banner',
        templateUrl: 'app/shared/models/banner/banner.component.html',
        styles: ['.jumbotron{margin-top:-20px;}']
    })
], AhBanner);
exports.AhBanner = AhBanner;
//# sourceMappingURL=banner.component.js.map