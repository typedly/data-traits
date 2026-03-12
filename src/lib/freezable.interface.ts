// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description The interface for freezable data types, which can be frozen to prevent modifications and optionally unfrozen.
 * @export
 * @interface Freezable
 * @template [T=any] The data type that can be frozen, used for optional checks in `isFrozen`.
 * @template {boolean} [R=false] Whether the freeze/unfreeze operations are asynchronous.
 */
export interface Freezable<T = any, R extends boolean = false> {  
  /**
   * @description Freezes the data, preventing modifications.
   * @returns {AsyncReturn<R, this>} The instance after freezing, allowing for chaining.
   */
  freeze(): AsyncReturn<R, this>;

  /**
   * @description Whether the data is frozen.
   * @param {?T} o Optional data to check if frozen, if supported by implementation.
   * @returns {boolean} True if the data is frozen, false otherwise.
   */
  isFrozen(o?: T): boolean;

  /**
   * @description Unfreezes the data.
   * @returns {AsyncReturn<R, this>} The instance after unfreezing, allowing for chaining.
   */
  unfreeze?(): AsyncReturn<R, this>;
}