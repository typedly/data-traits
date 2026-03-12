// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description Trait for objects that support indexing or retrieving by numeric or string index.
 * @export
 * @interface Indexable
 * @template [E=any] 
 * @template [I=number | string] 
 * @template {boolean} [R=false] 
 */
export interface Indexable<E = any, I = number | string, R extends boolean = false> {  
  /**
   * @description Number of items.
   * @readonly
   * @type {number}
   */
  readonly length: number;

  /**
   * @description Retrieves an item by its index.
   * @param {I} index The index of the item.
   * @returns {AsyncReturn<R, E | undefined>} The item at the specified index.
   */
  get(index: I): AsyncReturn<R, E | undefined>;

  /**
   * @description Checks if an item exists at the specified index.
   * @param {I} index The index to check.
   * @returns {AsyncReturn<R, boolean>} True if an item exists at the index, false otherwise.
   */
  has(index: I): AsyncReturn<R, boolean>;

  /**
   * @description Retrieves all items as an array.
   * @returns {AsyncReturn<R, E[]>} An array of all items.
   */
  getAll(): AsyncReturn<R, E[]>;

  /**
   * @description Retrieves all indices as an array.
   * @returns {AsyncReturn<R, I[]>  } An array of all indices.
   */
  getIndices(): AsyncReturn<R, I[]>;

  /**
   * @description Retrieves all items along with their indices as an array of [index, item] pairs.
   * @returns {AsyncReturn<R, Array<[I, E]>>} An array of [index, item] pairs.
   */
  entries(): AsyncReturn<R, Array<[I, E]>>;

  /**
   * @description Sets the value at the specified index.
   * @param {I} index The index to set the value at.
   * @param {E} value The value to set.
   * @return {AsyncReturn<R, this>} The instance of the object after setting the value.
   */
  set(index: I, value: E): AsyncReturn<R, this>;

  /**
   * @description Deletes the value at the specified index.
   * @param {I} index The index to delete the value from.
   */
  delete(index: I): AsyncReturn<R, this>;

  /**
   * @description Deletes the value at the specified indices.
   * @param {...I[]} index The indices to delete the values from.
   * @returns {AsyncReturn<R, this>} The instance of the object after deleting the values.
   */
  delete(...index: I[]): AsyncReturn<R, this>;
}