// Type.
import { AsyncReturn } from "@typedly/data";
import { Revertible } from "./revertible.trait";
/**
 * @description The interface for versionable data types, which maintain a history of changes and can revert to previous versions.
 * @export
 * @interface Versionable
 * @template T The data type.
 * @template [V=unknown] The type of the version.
 * @template {boolean} [R=false] Whether the versioning operations are asynchronous.
 * @extends {Revertible<V, R>}
 */
export interface Versionable<T, V = unknown, R extends boolean = false> extends Revertible<V, R> {
  /**
   * @description Current version number.
   * @readonly
   */
  readonly version: V;
  
  /**
   * @description Gets version history.
   * @returns {Array<{version: V, value: T, timestamp: Date}>}
   */
  getHistory(): Array<{version: V, value: T, timestamp: Date}>;
  
  /**
   * @description Reverts to a previous version.
   * @param {V} version 
   * @returns {AsyncReturn<R, this>}
   */
  revert(version: V): AsyncReturn<R, this>;
  
  /**
   * @description Creates a snapshot of current state.
   * @returns {AsyncReturn<R, T>}
   */
  snapshot(): AsyncReturn<R, T>;
}