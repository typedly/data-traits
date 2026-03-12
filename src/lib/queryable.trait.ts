// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description Interfaces for data types that can be queried using a defined query format, allowing for flexible and efficient retrieval of information based on specific criteria.
 * @export
 * @interface Queryable
 * @template T The data type.
 * @template Q The query format (JSON query, GraphQL, predicate, etc.)
 * @template {boolean} [R=false] Whether the operations are asynchronous, defaulting to `false`.
 */
export interface Queryable<T, Q, R extends boolean = false> {
  /**
   * @description Counts items matching the query.
   * @param {Q} query The query object, structure depends on implementation.
   * @returns {AsyncReturn<R, number>} The count of items matching the query.
   */
  count?(query: Q): AsyncReturn<R, number>;

  /**
   * @description Filters the data (if collection-like).
   * @param {(item: T) => boolean} predicate - The predicate function to filter items.
   * @returns {AsyncReturn<R, T[]>} The filtered results.
   */
  filter?(predicate: (item: T) => boolean): AsyncReturn<R, T[]>;

  /**
   * @description Finds a single item that matches the query.
   * @param {Q} query The query object, structure depends on implementation.
   * @returns {AsyncReturn<R, T | null>} The found item or `null` if not found.
   */
  findOne?(query: Q): AsyncReturn<R, T | null>;

  /**
   * @description Queries the data.
   * @param {Q} query - The query object, structure depends on implementation.
   * @returns {AsyncReturn<R, T[]>} The query results.
   */
  query(query: Q): AsyncReturn<R, T[]>;
}
