import {
  // Type.
  AsyncReturn,
} from "@typedly/data";
/**
 * @description Interface for data types that can be validated with custom rules and track validation errors.
 * @export
 * @interface Validatable
 * @template T The data type.
 * @template {boolean} [R=false] Whether the validation operations are asynchronous.
 */
export interface Validatable<T, R extends boolean = false> {
  /**
   * @description Gets validation errors if any.
   * @returns {string[]} Array of error messages
   */
  getErrors(): string[];

  /**
   * @description Checks if the current value is valid without throwing.
   * @returns {boolean}
   */
  isValid(): boolean;

  /**
   * @description Sets a custom validator function.
   * @param {(value: T) => boolean} validator The validator function to set.
   * @returns {AsyncReturn<R, this>} The instance after setting the validator, allowing for chaining.
   */
  setValidator(validator: (value: T) => boolean): AsyncReturn<R, this>;

  /**
   * @description Validates the current value against defined rules.
   * @returns {AsyncReturn<R, boolean>} True if valid, false otherwise.
   */
  validate(): AsyncReturn<R, boolean>;
}