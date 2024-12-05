import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  pname: string = '';
  pemail: string='';
  pmessage: string='';
  psubmittedData: any = null;

  constructor(private router:Router){}
  onSubmit(){
    this.psubmittedData = {
      name: this.pname,
      email: this.pemail,
      message: this.pmessage
    };

    // After 10 seconds, navigate to 'details' component along with 'submitteddata' object
    setTimeout(() => {
      this.router.navigate(['/det'],{
        state: { data: this.psubmittedData},
      });
    } ,5000);
  }
}
