/**
 * @description Trait for objects that have an ID or unique identifier.
 * @export
 * @interface Identifiable
 * @template [ID=string] The type of the unique identifier.
 */
export interface Identifiable<ID = string> {
  /**
   * @description The unique identifier of the object.
   * @readonly
   * @type {ID}
   */
  readonly id?: ID;

  /**
   * @description The string tag of the data instance.
   * @readonly
   * @type {?string}
   */
  readonly [Symbol.toStringTag]?: string;
}