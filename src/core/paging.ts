export type SortDirection = 'asc' | 'desc' | null;

export type Ordering<T> = {
    sortParam: keyof T;
    sortDirection: SortDirection;
};

export type SearchRequest<T> = {
    filters: ((x: T) => boolean)[];
    orders: Ordering<T>[];
    skip: number;
    take: number;
}

export function searchPage<T>(items: T[], search: SearchRequest<T>): T[]
{
    let itemsCopy = [...items];
    for (let filter of search.filters)
    {
        itemsCopy = itemsCopy.filter(filter);
    }

    for (let order of search.orders)
    {
        if (!order.sortDirection || !order.sortParam)
            continue;

        let direction = order.sortDirection === 'desc' ? -1 : 1;
        itemsCopy = itemsCopy.sort((x, y) => direction * ((x as any)[order.sortParam] > (y as any)[order.sortParam] ? 1 : -1));
    }

    return itemsCopy;
}