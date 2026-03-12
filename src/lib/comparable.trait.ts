/**
 * @description Comparable interface for data types that can be compared.
 * @export
 * @interface Comparable
 * @template T The data type.
 */
export interface Comparable<T> {
  /**
   * @description Compares this data with another.
   * @param {T} other
   * @returns {number} -1 if less, 0 if equal, 1 if greater
   */
  compare(other: T): number;

  /**
   * @description Checks if this data equals another.
   * @param {T} other
   * @returns {boolean}
   */
  equals(other: T): boolean;
}