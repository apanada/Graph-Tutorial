import { Web, sp, ListEnsureResult } from '@pnp/sp';
import { MyList } from './MyList';

export class MyWeb extends Web {
    public async ensureList(): Promise<MyList> {
        // use lists.ensure to always have the list available
        return sp.web.lists.ensure(MyList.ListTitle).then((ler: ListEnsureResult) => {
            if (!ler.created) {
                return ler.list.as(MyList);
            }
        });
    }
}