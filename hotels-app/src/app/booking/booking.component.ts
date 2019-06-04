import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { from } from 'rxjs';
import { DataService } from '../data.service';
import { error } from 'util';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookings= [
{fullname:"ggg",email:"ggg",phonenumber:"ggf",startdata:"ff",enddate:"f",gender:"fff"}
  ];

  model:any={};
  addBooooking(){
  this.bookings.push(this.model); 
  }

  deleteBooking(i) {
    this.bookings.splice(i, 1);
  }

  gender =['female', 'male'];


  onsubmit(){


    
  }
  constructor( private _dataservice: DataService) { }

  ngOnInit() {
  
  }

}
