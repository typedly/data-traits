/**
 * @description Capability for objects that can be traversed/iterated.
 * @export
 * @interface Traversable
 * @template E The element type
 */
export interface Traversable<E> {
  /**
   * @description Synchronous iterator
   * @returns {IterableIterator<E>} 
   */
  [Symbol.iterator](): IterableIterator<E>;
  
  /**
   * @description Asynchronous iterator
   * @returns {AsyncIterableIterator<E>} 
   */
  [Symbol.asyncIterator]?(): AsyncIterableIterator<E>;
}