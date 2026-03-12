/**
 * @description Trait for objects that support pagination.
 * @export
 * @interface Paginated
 * @template [T=unknown] The type of items in the paginated collection.
 */
export interface Paginated<T = unknown> {
  /**
   * @description Total number of pages.
   * @readonly
   * @type {number}
   */
  readonly pageCount: number;

  /**
   * @description Number of items per page.
   * @readonly
   * @type {number}
   */
  readonly pageSize: number;

  /**
   * @description Current page index, starting from 0.
   * @readonly
   * @type {number}
   */
  readonly pageIndex: number;

  /**
   * @description Returns the current page of items.
   * @returns {T[]} 
   */
  getPage(): T[];

  /**
   * @description Advances to the next page and returns its items.
   * @returns {T[]} 
   */
  nextPage(): T[];

  /**
   * @description Goes back to the previous page and returns its items.
   * @returns {T[]} 
   */
  previousPage(): T[];
}