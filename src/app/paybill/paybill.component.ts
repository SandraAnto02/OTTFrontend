import { Component } from '@angular/core';

@Component({
  selector: 'app-paybill',
  templateUrl: './paybill.component.html',
  styleUrls: ['./paybill.component.css']
})
export class PaybillComponent 
{
  cardNumber: string = '';
  expirationDate: string = '';
  cvv: string = '';

  processPayment() {
    // You would typically call a service to securely send payment data to a payment gateway
    // For Stripe, you might use the Stripe JavaScript library or a server-side SDK
    // to securely handle payment processing.
    // This is a simplified example and not secure for real-world use.
    console.log('Processing payment...');
    console.log('Card Number: ' + this.cardNumber);
    console.log('Expiration Date: ' + this.expirationDate);
    console.log('CVV: ' + this.cvv);
  }

}
