/**
 * @description 
 */

/**
 * @description Trait for objects that support pagination.
 * @export
 * @interface Paginated
 * @template [T=any] 
 */
export interface Paginated<T = any> {
  /**
   * Returns the current page of items.
   */
  getPage(): T[];

  /**
   * Advances to the next page and returns its items.
   */
  nextPage(): T[];

  /**
   * Moves to the previous page and returns its items.
   */
  previousPage(): T[];

  /**
   * Number of items per page.
   */
  readonly pageSize: number;

  /**
   * Current page index, starting from 0.
   */
  readonly pageIndex: number;

  /**
   * Total number of pages.
   */
  readonly pageCount: number;
}