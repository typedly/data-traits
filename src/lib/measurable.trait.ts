/**
 * @description Interface for data types that can be measured in terms of size and memory usage, allowing for efficient management of resources and optimization of performance.
 * @export
 * @interface Measurable
 */
export interface Measurable {  
  /**
   * @description Checks if data exceeds size limit.
   * @param {number} limit Size limit in bytes.
   * @returns {boolean} 
   */
  exceedsLimit(limit: number): boolean;
  
  /**
   * @description Gets memory usage.
   * @returns {number} Bytes
   */
  getMemoryUsage(): number;

  /**
   * @description Gets the size in bytes.
   * @returns {number}
   */
  getSize(): number;
}