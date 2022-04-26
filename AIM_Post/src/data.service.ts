import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<string>('');
  currentData = this.data.asObservable();

  updateData(data: string){
    this.data.next(data);
  }

  constructor() { }
}
