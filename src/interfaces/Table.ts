export interface ColumnList {
    /**
     * Key is the name of the column
     */
    [k : string] : {
        /**
         * The type of the column as reported by the underlying DB.
         */
        type : string
        /**
         * True if the column is nullable, false otherwise.
         */
        nullable : boolean
    }
}

export interface Table {
    /**
     * The name of the table.
     */
    name : string,
    /**
     * The raw SQL schema dump for the table.
     * Null if configured to not dump.
     */
    schema : string | null,
    /**
     * The raw SQL data dump for the table.
     * Null if configured to not dump.
     */
    data : string | null,
    /**
     * The list of column definitions for the table.
     */
    columns : ColumnList,
    /**
     * True if the table is actually a view, false otherwise.
     */
    isView : boolean,
}

export default Table
