import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';


const rformStyles = `
  :host {
    margin: 0.5em 0;
    color: hsla(196, 43%, 45%, 1);
    font-weight: bold;
    font-family: fantasy;
  }
  `;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rform',
  templateUrl: './reactive-form.component.html',
  styles: [rformStyles]
})
export class ReactiveFormComponent implements OnInit {

  // title = 'Name Editor';

  // name = new FormControl('');

  // updateName() {
  //   this.name.setValue('Richard');
  // }


  title = 'Reactive Forms';

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) { }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Richard',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  ngOnInit() {
  }

}
