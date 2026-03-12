// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description Trait for objects that can revert or undo changes.
 * @export
 * @interface Revertible
 * @template V The type of the version.
 * @template {boolean} [R=false] Whether the revert operations are asynchronous.
 */
export interface Revertible<V = unknown, R extends boolean = false> {
  /**
   * @description Checks if the object can be reverted.
   * @returns {boolean} True if revert is possible, false otherwise.
   */
  canRevert(): boolean;

  /**
   * @description Reverts the object to its previous state.
   * @param {V} [version] The version to revert to. If not provided, reverts to the most recent previous version.
   * @returns {AsyncReturn<R, this>} The reverted instance.
   */
  revert(version?: V): AsyncReturn<R, this>;
}