import { List } from '@pnp/sp';
import { MyItem } from './MyItem';

export class MyList extends List {
    public static ListTitle = 'Provision Request';

    public async getTop5Items(this: List): Promise<MyItem[]> {
        return this.items.select.call(this.items, MyItem.Fields)
            .orderBy('Created').top(5).get();
    }

    public async addSPOListItem(title: string, department: string, siteUrl: string): Promise<MyItem> {
        return this.items.add({
            Title: title,
            Department: department,
            SiteUrl: siteUrl
        }).then((result: any) => {
            return result.item.as(MyItem);
        });

    }
}
