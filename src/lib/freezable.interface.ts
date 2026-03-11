import {
  // Type.
  AsyncReturn,
} from "@typedly/data";

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