
export interface DataTableColumnConfig {
    property: string;
    header: string;
    visible: boolean;
    sortable: boolean;

    cellClass: string[]|string|((property: string, item: any) => string);
    action: (item) => void;
}
