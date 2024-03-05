import { Injectable } from '@angular/core';
import {addDoc,Firestore, collectionData} from '@angular/fire/firestore'
import {Observable} from 'rxjs'
import {Client} from '../Models/client'
import {collection} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private fs:Firestore) { }

  addClient(client:Client){
    console.log(client);
    const myCollection=collection(this.fs, 'client');
    addDoc(myCollection,client);
  }
}
