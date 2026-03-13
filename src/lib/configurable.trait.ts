/**
 * @description The interface for configurable data types, which can optionally have a configuration object.
 * @export
 * @interface Configurable
 * @template [C=unknown] The type of the configuration object.
 */
export interface Configurable<C = unknown> {
  /**
   * @description The configuration of the `Data` instance.
   * @readonly
   * @type {?C}
   */
  readonly configuration?: C;  
}
