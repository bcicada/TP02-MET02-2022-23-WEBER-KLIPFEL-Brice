import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap-client-info',
  templateUrl: './recap-client-info.component.html',
  styleUrls: ['./recap-client-info.component.scss']
})
export class RecapClientInfoComponent implements OnInit {
  
  constructor() { }  

  @Input() sendName: string;
  @Input() sendFirstname: string;
  @Input() sendAdress: string;
  @Input() sendPostal: string;
  @Input() sendCity: string;
  @Input() sendPhone: string;
  @Input() sendMail: string;
  @Input() sendCivility: string;
  @Input() sendPassword: string;
  @Input() sendUsername: string;

  ngOnInit(): void {
  }
}

