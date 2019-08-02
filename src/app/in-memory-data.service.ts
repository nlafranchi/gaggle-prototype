import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [{
      username: 'nlafranchi',
      password: 'aaaaaA1!',
      email: 'natelafranchi@gmail.com'
    }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id)) + 1 : 11;
  }
}
