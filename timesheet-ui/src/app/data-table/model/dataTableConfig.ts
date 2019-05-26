import { DataTableRowConfig } from './dataTableRowConfig';
import { DataTableColumnConfig } from './dataTableColumnConfig';

export interface DataTableConfig {

    /**
     * Sets CSS class of <table>
     */
    tableClass: string;
    /**
     * Enables Column Selection
     */
    selectColumn: boolean;
    /**
     * Enables Table Refresh
     */
    refresh: boolean;
    /**
     * Enables Table State Persist
     */
    persist: boolean;
    /**
     * Enables Select All on Table Head
     */
    selectAll: boolean;
    /**
     * Custom ng-template for Table Header
     */
    headerTemplate: string;
    /**
     * Enables Pagination
     */
    pagination: boolean;

    /**
     * Row Config
     */
    row: DataTableRowConfig;
    /**
     * Column Config
     */
    columns: DataTableColumnConfig[];
}
