// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description Capability for objects that can be cloned.
 * @export
 * @interface Cloneable
 * @template T The options type for customizing the cloning behavior.
 * @template {boolean} [R=false] Whether the clone method returns a `Promise` or not.
 */
export interface Cloneable<O, R extends boolean = false> {
  /**
   * @description Creates a deep copy of this instance.
   * @returns {AsyncReturn<R, this>}
   */
  clone(): AsyncReturn<R, this>;
  
  /**
   * @description Creates a shallow copy of this instance.
   * @returns {AsyncReturn<R, this>}
   */
  shallowClone?(): AsyncReturn<R, this>;
  
  /**
   * @description Creates a deep copy with custom cloning options.
   * @param {O} options Cloning configuration.
   * @returns {AsyncReturn<R, this>}
   */
  cloneWith?(options: O): AsyncReturn<R, this>;
}