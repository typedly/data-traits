// Type.
import { AsyncReturn } from "@typedly/data";
import { Traversable } from "./traversable.trait";
/**
 * @description Trait for collection-like data types that can hold multiple items and provide methods for adding, deleting, and iterating over those items.
 * @export
 * @interface Collection
 * @template E Element type contained in the collection.
 * @template {boolean} [R=false] whether the methods return a `Promise` or not.
 */
export interface Collection<E, R extends boolean = false> extends Traversable<E> {
  /**
   * @description The number of items in the collection.
   * @returns {number}
   */
  readonly size: number;

  /**
   * @description Adds elements to the collection.
   * @param {...E[]} element Element of type `E` to add.
   * @returns {AsyncReturn<R, this>} The collection instance `this`, or in `Promise`.
   */
  add(...element: E[]): AsyncReturn<R, this>;

  /**
   * @description Deletes elements from the collection.
   * @param {...E[]} element Element of type `E` to delete.
   * @returns {AsyncReturn<R, boolean>} `true` if every element was successfully deleted, otherwise `false`.
   */
  delete(...element: E[]): AsyncReturn<R, boolean>;

  /**
   * @description Executes a provided function once for each collection element.
   * @param {(element: E, collection: Collection<E, R>) => void} callbackfn Function to execute for each element.
   * @param {?*} [thisArg] Value to use as `this` when executing `callbackfn`.
   * @returns {AsyncReturn<R, this>} The collection instance `this`, or in `Promise`.
   */
  forEach(callbackfn: (element: E, collection: Collection<E, R>) => void, thisArg?: any): AsyncReturn<R, this>;

  /**
   * @description Checks if every item exists in the collection.
   * @param {...E[]} element Element of type `E` to check for existence.
   * @returns {AsyncReturn<R, boolean>} `true` if every element exists, otherwise `false`.
   */
  has(...element: E[]): AsyncReturn<R, boolean>;

  /**
   * @description Converts the collection to an array of elements.
   * @returns {AsyncReturn<R, E[]>} The array of elements, or in `Promise` if `R` is `true`.
   */
  toArray?(): AsyncReturn<R, E[]>;
}
