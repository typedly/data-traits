// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description The interface for mergeable data types, which can be combined with other instances of the same type using a defined strategy.
 * @export
 * @interface Mergeable
 * @template T The data type.
 * @template {boolean} [R=false] Whether the operations are asynchronous, defaulting to `false`.
 */
export interface Mergeable<T, R extends boolean = false> {
  /**
   * @description Checks if can merge with another instance.
   * @param {T} other The other data instance to check.
   * @returns {boolean} Whether the instances can be merged.
   */
  canMerge(other: T): boolean;

  /**
   * @description Merges with another data instance.
   * @param {T} other The other data instance to merge with.
   * @param {(a: T, b: T) => T} strategy - Merge strategy
   * @returns {AsyncReturn<R, this>}
   */
  merge(
    other: T ,
    strategy?: (a: T, b: T) => T
  ): AsyncReturn<R, this>;

}