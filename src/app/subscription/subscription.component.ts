import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html'
})
export class SubscriptionComponent {
  subscriptionForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.subscriptionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() {
    return this.subscriptionForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    if (this.subscriptionForm.invalid) {
      if (this.subscriptionForm.controls['email'].errors?.['required']) {
        alert('Email is required');
      }
      return;
    } else {
      alert(`User with email ${this.subscriptionForm.value.email} has subscribed successfully!`);
      this.submitted = false;
    }
  }}