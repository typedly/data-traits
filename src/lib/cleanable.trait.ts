// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description Capability for objects that can be cleaned or cleared.
 * @export
 * @interface Cleanable
 * @template {boolean} [R=false] Whether the cleanup and clear methods return a `Promise` or not.
 */
export interface Cleanable<R extends boolean = false> {
  /**
   * @description Cleans up resources (event listeners, timers, subscriptions).
   * @returns {AsyncReturn<R, void>} 
   */
  cleanup?(): AsyncReturn<R, void>;

  /**
   * @description Clears the current value, resetting to empty/default state.
   * Does not destroy the instance - it remains usable.
   * @returns {AsyncReturn<R, this>}
   */
  clear(): AsyncReturn<R, this>;

  /**
   * @description Checks if the data is empty/cleared.
   * @returns {boolean} 
   */
  isEmpty(): boolean;
}