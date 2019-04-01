import { Item } from '@pnp/sp';

export class MyItem extends Item {
    public static Fields = ['Id', 'Title', 'Department', 'SiteUrl'];

    public Id: number;
    public Title: string;
    public Department: string;
    public SiteUrl: string;

    public async save(): Promise<MyItem> {
        return this.update({
            Title: this.Title,
            Department: this.Department,
            SiteUrl: this.SiteUrl
        }).then(result => {
            return result.item.as(MyItem);
        });
    }
}
