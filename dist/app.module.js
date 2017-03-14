"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var PageNotFound_component_1 = require("./PageNotFound.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var content_component_1 = require("./content/content.component");
var banner_component_1 = require("./shared/models/banner/banner.component");
var sidebar_component_1 = require("./shared/models/sidebar/sidebar.component");
var loading_component_1 = require("./shared/models/loading/loading.component");
var tiles_component_1 = require("./shared/models/tiles/tiles.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFound_component_1.PageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent,
            header_component_1.AhHeader, footer_component_1.AhFooter, content_component_1.AhContent,
            banner_component_1.AhBanner, sidebar_component_1.AhSidebar, loading_component_1.ahLoading, tiles_component_1.AhTiles,
            home_component_1.HomeComponent, about_component_1.AboutComponent, PageNotFound_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map