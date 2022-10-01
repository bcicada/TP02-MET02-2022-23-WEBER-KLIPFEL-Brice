import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormClientInfo } from './form-client-info';

@Component({
  selector: 'app-form-client-info',
  templateUrl: './form-client-info.component.html',
  styleUrls: ['./form-client-info.component.scss']
})
export class FormClientInfoComponent implements OnInit {

  public FormClientInfo: FormClientInfo = new FormClientInfo();
  display = false;
  
  name: string = "";
  firstname: string = "";
  adress: string = "";
  postal: string = "";
  city: string = "";
  phone: string = "";
  mail: string = "";
  civility: string = "";
  password: string = "";
  username: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public saveData(exportData: NgForm) {
    this.name = exportData.value.name;
    this.firstname = exportData.value.firstname;
    this.adress = exportData.value.adress;
    this.postal = exportData.value.postal;
    this.city = exportData.value.city;
    this.phone = exportData.value.phone;
    this.mail = exportData.value.mail;
    this.civility = exportData.value.civility;
    this.password = exportData.value.password;
    this.username = exportData.value.username;
    
    this.display = true;
  }
}
