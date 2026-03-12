/**
 * @description Trait for objects that can be printed as a string or in a formatted way.
 * @export
 * @interface Printable
 */
export interface Printable {
  /**
   * @description Prints the object to a string.
   * @returns {string} 
   */
  print(): string;

  /**
   * @description Optionally, pretty-prints the object.
   * @returns {string} 
   */
  prettyPrint?(): string;
}