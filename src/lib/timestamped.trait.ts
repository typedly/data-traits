/**
 * @description Interface representing timestamped data.
 * @export
 * @interface Timestamped
 */
export interface Timestamped {
  /**
   * @description When the data was created.
   * @readonly
   */
  readonly createdAt: Date;
  
  /**
   * @description When the data was last modified.
   * @readonly
   */
  readonly updatedAt: Date;
  
  /**
   * @description When the data was last accessed.
   * @readonly
   */
  readonly accessedAt?: Date;
}