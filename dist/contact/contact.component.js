"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ContactComponent = (function () {
    function ContactComponent(_fb) {
        this._fb = _fb;
        this.events = [];
    }
    ContactComponent.prototype.ngOnInit = function () {
        // the short way
        this.myForm = this._fb.group({
            fname: ['', [forms_1.Validators.required]],
            lname: ['', [forms_1.Validators.required]],
            email: ['', [forms_1.Validators.required]],
            message: ['', [forms_1.Validators.required]],
            address: this._fb.group({
                street: ['', forms_1.Validators.required],
                postalcode: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(6)]]
            })
        });
        // subscribe to form changes  
        this.subcribeToFormChanges();
    };
    ContactComponent.prototype.subcribeToFormChanges = function () {
        var _this = this;
        var myFormStatusChanges$ = this.myForm.statusChanges;
        var myFormValueChanges$ = this.myForm.valueChanges;
        myFormStatusChanges$.subscribe(function (x) { return _this.events.push({ event: 'STATUS_CHANGED', object: x }); });
        myFormValueChanges$.subscribe(function (x) { return _this.events.push({ event: 'VALUE_CHANGED', object: x }); });
    };
    ContactComponent.prototype.save = function (model, isValid) {
        this.submitted = true;
        console.log(model, isValid);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/contact/contact.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map