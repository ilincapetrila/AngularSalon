import { Component } from '@angular/core';
import { ClientService } from '../Services/client.service';
import { Client } from '../Models/client';

@Component({
  selector: 'app-programare',
  templateUrl: './programare.component.html',
  styleUrls: ['./programare.component.css']
})
export class ProgramareComponent {
  constructor(private clientService:ClientService){
  
  }
  inputValue:string='';
  newClientFirstName='';
  newClientLastName='';
  newClientPostalCode='';
  newClientDescriere='';
  newClientData='';
  newClientOra='';
  studentsFromDB:Client[]=[];
  selectedInterventie='';



addClient(){
  let newClient={firstName:this.newClientFirstName,lastName:this.newClientLastName,
    postalCode:this.newClientPostalCode,
    descriere:this.newClientDescriere,
    data:this.newClientData,
    ora:this.newClientOra
  };
  this.clientService.addClient(newClient);
}

}
