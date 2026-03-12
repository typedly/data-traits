// Type.
import { AsyncReturn } from "@typedly/data";
/**
 * @description Interface for data types that can be encrypted and decrypted.
 * @export
 * @interface Encryptable
 * @template T The data to be encrypted/decrypted.
 * @template [O=string] The type of the encryption key, defaulting to `string`.
 * @template {boolean} [R=false] Whether the operations are asynchronous, defaulting to `false`.
 */
export interface Encryptable<T, O = string, R extends boolean = false> {
  /**
   * @description Decrypts the data with the given key.
   * @param {string} encrypted Encrypted data.
   * @param {?O} options Decryption options, typically the decryption key.
   * @returns {AsyncReturn<R, T>}
   */
  decrypt(encrypted: string, options?: O): AsyncReturn<R, T>;

  /**
   * @description Encrypts the data with the given key.
   * @param {?O} options Encryption options, typically the encryption key.
   * @returns {AsyncReturn<R, string>}
   */
  encrypt(options?: O): AsyncReturn<R, string>;

  /**
   * @description Whether the data is currently encrypted.
   * @returns {boolean} True if the data is encrypted, false otherwise.
   */
  isEncrypted(): boolean;
}