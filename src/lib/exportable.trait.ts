// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description The interface for exportable data types, which can be exported to various formats.
 * @export
 * @interface Exportable
 * @template T The data type.
 * @template {boolean} [R=false] Whether the export operations are asynchronous.
 */
export interface Exportable<F, R extends boolean = false> {
  /**
   * @description Exports to custom format.
   * @param {F} format The format to export to.
   * @returns {AsyncReturn<R, string>}
   */
  export(format: F): AsyncReturn<R, string>;
  
  /**
   * @description Exports to CSV (if applicable).
   * @returns {AsyncReturn<R, string>}
   */
  toCSV?(): AsyncReturn<R, string>;

  /**
   * @description Exports to JSON.
   * @returns {AsyncReturn<R, string>}
   */
  toJSON(): AsyncReturn<R, string>;
  
  /**
   * @description Exports to XML.
   * @returns {AsyncReturn<R, string>}
   */
  toXML?(): AsyncReturn<R, string>;
}