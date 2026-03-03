export type SortDirection = 'asc' | 'desc' | null;

export type Ordering<T> = {
    SortParam: keyof T;
    SortDirection: SortDirection;
};

export type Filtering<T> = {
    FilterParam: keyof T;
    FilterValue: any | null;
};