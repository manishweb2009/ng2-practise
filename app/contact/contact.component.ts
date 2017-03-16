import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { formInterface } from './fromInterface.component';

@Component({
  templateUrl: 'app/contact/contact.component.html'
})

export class ContactComponent implements OnInit {
    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {

        // the short way
        this.myForm = this._fb.group({
            fname: ['', [<any>Validators.required]],
            lname: ['', [<any>Validators.required]],
            email: ['', [<any>Validators.required]],
            message: ['', [<any>Validators.required]],
            address: this._fb.group({
                street: ['', <any>Validators.required],
                postalcode: ['', [<any>Validators.required, <any>Validators.minLength(5), <any>Validators.maxLength(6)]]
            })
        });

        // subscribe to form changes  
        this.subcribeToFormChanges();
        
    }

    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;
        
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    save(model: formInterface, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }
}
