import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  // in memory data. Id is concatenation of username and password
  // In a real db, password would be hashed.
  createDb() {
    const users: User[] = [{
      id: 'nlafranchiaaaaaA1!',
      username: 'nlafranchi',
      password: 'aaaaaA1!',
      email: 'natelafranchi@gmail.com'
    }];
    return {users};
  }
}
