import {
  // Type.
  AsyncReturn,
} from "@typedly/data";
/**
 * @description Transformable interface for data types that can be transformed.
 * @export
 * @interface Transformable 
 * @template T The type of the value to be transformed.
 * @template {boolean} [R=false]  The async flag, indicating whether the transformation methods are asynchronous.
 */
export interface Transformable<T, R extends boolean = false> {
  /**
   * @description Clones the `Data` instance.
   * @returns {AsyncReturn<R, this>} The cloned `Data` instance.
   */
  clone(): AsyncReturn<R, this>;

  /**
   * @description Chains transformations with async support.
   * @template U The transformed value type.
   * @param {(value: T) => AsyncReturn<R, U>} fn Async transformation function.
   * @returns {AsyncReturn<R, U>} The transformed value.
   */
  flatMap?<U>(fn: (value: T) => AsyncReturn<R, U>): AsyncReturn<R, U>;

  /**
   * @description Transforms the `Data` instance using the provided function.
   * @template U The transformed value type.
   * @param {(value: T) => U} fn The function to transform the `Data` instance.
   * @returns {AsyncReturn<R, U>} The transformed `Data` instance.
   */
  map<U>(fn: (value: T) => U): AsyncReturn<R, U>;
}