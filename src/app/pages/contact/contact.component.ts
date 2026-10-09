import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  captchaVerified = false;
  onCaptchaResolved(token: string | null) {
    this.captchaVerified = !!token;
  }
  sendEmail(event: Event) {
    event.preventDefault();
    if (!this.captchaVerified) {
      alert('Please verify CAPTCHA');
      return;
    }

    emailjs.sendForm(
      'service_7ugy8vj',
      'template_p367rob',
      event.target as HTMLFormElement,
      '_iV-VaDzP7_2BoTII'
    ).then(
      () => {
        alert('Enquiry sent successfully!');
        (event.target as HTMLFormElement).reset();
        this.captchaVerified = false;
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to send enquiry.');
      }
    );
  }

  constructor() { }

  ngOnInit(): void {

  }

  // sendEmail(event: Event) {
  //   event.preventDefault();

  //   emailjs.sendForm(
  //     'service_l8nxa6d',       // e.g., service_xxxxxx
  //     'template_3hj3hfv',      // e.g., template_yyyyyy
  //     event.target as HTMLFormElement,
  //     'h-OgB_ZELwY6SnxLu'        // e.g., public_zzzzzz
  //   ).then(
  //     () => {
  //       alert('Enquiry sent successfully!');
  //     },
  //     (error) => {
  //       console.error('FAILED...', error);
  //       alert('Failed to send enquiry.');
  //     }
  //   );

  //   (event.target as HTMLFormElement).reset();
  // }

  // constructor() {
  // }

  // ngOnInit(): void {
  // }

  // selectedFile: any;

  // // File Upload
  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   // Only PDF
  //   if (file.type !== 'application/pdf') {
  //     alert('Only PDF files allowed');
  //     return;
  //   }
  //   this.selectedFile = file;
  // }

  // // Convert File to Base64
  // convertToBase64(file: File): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       resolve(reader.result as string);
  //     };
  //     reader.onerror = error => reject(error);
  //   });
  // }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

}
