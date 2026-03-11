/**
 * @description The interface for adaptable data types, which can optionally use a data adapter to manage their value and behavior.
 * @export
 * @interface Adaptable
 * @template A The adapter type, which can be `undefined`.
 */
export interface Adaptable<A = any> {
  /**
   * @description The adapter of the `Data` instance, which can be undefined if no adapter is used.
   * @readonly
   * @type {?A}
   */
  readonly adapter?: A;

  /**
   * @description Checks if the `Data` instance has an adapter.
   * @returns {boolean} True if an adapter is present, false otherwise.
   */
  hasAdapter(): boolean;
}