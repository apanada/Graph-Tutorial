import { Component, OnInit } from '@angular/core';
import { SpOnlineService } from './sp-online.service';
import { MyItem } from './MyItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'graph-tutorial';

  constructor(private spOnlineService: SpOnlineService) { }

  async ngOnInit() {
    const web: any = await this.spOnlineService.getWebTitle().toPromise();
    this.title = web.Title;

    const items: MyItem[] = await this.spOnlineService.getListItems('Provision Request').toPromise();
    console.log(items);

    this.spOnlineService.demo();
  }
}
