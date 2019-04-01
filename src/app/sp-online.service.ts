import { Injectable } from '@angular/core';

import { sp } from '@pnp/sp';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyItem } from './MyItem';
import { MyList } from './MyList';
import { MyWeb } from './MyWeb';

@Injectable({
  providedIn: 'root'
})
export class SpOnlineService {
  constructor() {
    sp.setup({
      sp: {
        headers: {
          Accept: 'application/json;odata=verbose;'
        },
        baseUrl: environment.web
      }
    });
  }

  getWebTitle(): Observable<any> {
    return Observable.fromPromise(sp.web.select('Title').get());
  }

  getListItems(listName: string): Observable<MyItem[]> {
    return Observable.fromPromise(sp.web.lists.getByTitle(listName).items.get<MyItem[]>());
  }

  async demo() {
    const list: MyList = await sp.web.as(MyWeb).ensureList();
    if (list) {
      const myItems: MyItem[] = await list.getTop5Items();
      console.log(myItems);
    }
  }
}
