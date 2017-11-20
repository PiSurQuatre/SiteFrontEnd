export class Page {

    id: any;
    content: any[];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    sort: any[];
    totalElements: number;
    totalPages: number;

    constructor(id: any) {
        if (null != id)
            this.id = id;
    }

}