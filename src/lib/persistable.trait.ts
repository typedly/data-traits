// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description Trait for objects that can be persisted and restored.
 * @export
 * @interface Persistable
 * @template {boolean} [R=false] Whether the operations are asynchronous, defaulting to `false`.
 */
export interface Persistable<R extends boolean = false> {
  /**
   * @description Deletes the persisted data.
   * @returns {AsyncReturn<R, this>} 
   */
  delete(): AsyncReturn<R, this>;

  /**
   * @description Restores the object from storage or database.
   * @returns {AsyncReturn<R, this>} 
   */
  load(): AsyncReturn<R, this>;

  /**
   * @description Persists the object, e.g. to storage or database.
   * @returns {AsyncReturn<R, this>} 
   */
  save(): AsyncReturn<R, this>;
}