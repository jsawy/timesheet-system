
export interface DataTableRowConfig {
    selectable: boolean;
    expandable: boolean;
    expandTemplate: string;

    click: (item) => void;
    doubleClick: (item) => void;
    class: string[]|string|((item: any) => string);
    toolTip: (item) => string;
}
