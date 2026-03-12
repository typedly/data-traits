// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description The interface for observable data types, which allow subscribers to be notified of changes to their value.
 * @export
 * @interface Observable
 * @template T The type of the value being observed.
 * @template {boolean} [R=false] Whether the operations are asynchronous, defaulting to `false`.
 * @template {L} [L=(value: T, previous?: T) => AsyncReturn<R, void>] The type of the listener function, defaulting to a function that takes the new value and optionally the previous value.
 */
export interface Observable<
  T,
  R extends boolean = false,
  L = (value: T, previous?: T) => AsyncReturn<R, void>,
> {
  /**
   * @description Notifies all subscribers of current value.
   * @param {T} [value] The new value to notify subscribers with, if supported by implementation. If not provided, may notify with current value or simply trigger listeners.
   * @returns {AsyncReturn<R, void>} Resolves when all subscribers have been notified, if asynchronous. Otherwise, returns `void`.
   */
  notify(value?: T): AsyncReturn<R, void>;

  /**
   * @description Subscribes to value changes.
   * @param {L} listener Called when value changes
   * @returns {() => void} Unsubscribe function
   */
  subscribe(listener: L): () => void;

  /**
   * @description Unsubscribes a specific listener.
   * @param {L} listener The listener to remove.
   */
  unsubscribe(listener: L): void;

  /**
   * @description Removes all subscribers.
   */
  unsubscribeAll(): void;
}