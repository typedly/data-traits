// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description Interface for data types that can be reset to an initial value and track if they have been modified (dirty state).
 * @export
 * @interface Resettable
 * @template T The type of the value that can be reset.
 * @template {boolean} [R=false] Whether the reset operation is asynchronous.
 */
export interface Resettable<T, R extends boolean = false> {
  /**
   * @description Gets the initial value.
   * @returns {T} The initial value.
   */
  getInitialValue(): T;

  /**
   * @description Checks if data has been modified from initial state.
   * @returns {boolean} True if modified (dirty), false if unchanged (clean).
   */
  isDirty(): boolean;

  /**
   * @description Resets to initial value.
   * @returns {AsyncReturn<R, this>} The instance after reset, allowing for chaining.
   */
  reset(): AsyncReturn<R, this>;
}