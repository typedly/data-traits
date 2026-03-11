/**
 * @description The interface for configurable data types.
 * @export
 * @interface Configurable
 * @template C The type of the configuration object.
 */
export interface Configurable<C = any> {
  /**
   * @description The configuration of the `Data` instance.
   * @readonly
   * @type {?C}
   */
  readonly configuration?: C;

  
}
