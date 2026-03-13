// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description Interface for data types that can be compressed and decompressed, allowing for efficient storage and transmission of data.
 * @export
 * @interface Compressible
 * @template T The data type.
 * @template [C=Uint8Array] The type of the compressed data, defaulting to `Uint8Array`.
 * @template {boolean} [R=false] Whether the operations are asynchronous, defaulting to `false`.
 */
export interface Compressible<T, C = Uint8Array, R extends boolean = false> {
  /**
   * @description Compresses the data.
   * @returns {AsyncReturn<R, C>} The compressed data, allowing for chaining.
   */
  compress(): AsyncReturn<R, C>;
  
  /**
   * @description Decompresses data.
   * @param {C} compressed The compressed data.
   * @returns {AsyncReturn<R, T>} The decompressed data.
   */
  decompress(compressed: C): AsyncReturn<R, T>;
  
  /**
   * @description Gets compression ratio.
   * @returns {number} Ratio (0-1)
   */
  getCompressionRatio(): number;
}