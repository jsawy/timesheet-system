
export class MissingConfigError extends Error {
    constructor() {
        super('Missing Config: Define and provide DataTableConfig object as [config]="DataTableConfig" on data-table component.');
    }
}
