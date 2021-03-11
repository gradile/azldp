import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MailServiceService } from '../service/mail-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(
    private mailService: MailServiceService,

    private fb: FormBuilder
  ) {
    this.contactForm = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl
    });
  }

  isSubmitted = false;
  contactForm: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      subject: ['', Validators.required],
      contact_name: ['', Validators.required],
      contact_email: ['', Validators.required],
      contact_question: ['', Validators.required]
    });
  }

  sendEmail() {
    const data = this.contactForm.getRawValue();
    this.mailService.sendEmail(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    this.isSubmitted = true;
  }
}
