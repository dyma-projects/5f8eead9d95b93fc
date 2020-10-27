import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor() { }

  addUser(user: string): void{
    this.users.value.push(user);
  }
}
