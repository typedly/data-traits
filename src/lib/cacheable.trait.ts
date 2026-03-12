// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description The interface for cacheable data types, which can be cached with an optional expiration time and invalidated or refreshed as needed.
 * @export
 * @interface Cacheable
 * @template T The data type.
 * @template {boolean} [R=false] Whether the cache operations are asynchronous.
 */
export interface Cacheable<T, R extends boolean = false> {
  /**
   * @description Cache expiration time in milliseconds.
   */
  cacheDuration?: number;
  
  /**
   * @description Invalidates the cache.
   * @returns {AsyncReturn<R, void>}
   */
  invalidateCache(): AsyncReturn<R, void>;

  /**
   * @description Whether the data is currently cached.
   * @returns {boolean} True if the data is cached, false otherwise.
   */
  isCached(): boolean;

  /**
   * @description Refreshes cached data.
   * @returns {AsyncReturn<R, T>} The refreshed data, allowing for chaining.
   */
  refresh(): AsyncReturn<R, T>;
}