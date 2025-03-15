// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { type Uploadable } from '../uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Object extends APIResource {
  /**
   * Delete a file from the storage system. The bucket parameter is used for access
   * control, while the key determines which object to delete.
   */
  delete(
    key: string,
    params: ObjectDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ObjectDeleteResponse> {
    const { bucket } = params;
    return this._client.delete(path`/v1/object/${bucket}/${key}`, options);
  }

  /**
   * Download a file from the storage system. The bucket parameter is used for access
   * control, while the key determines which object to retrieve. Supports streaming
   * downloads.
   */
  download(key: string, params: ObjectDownloadParams, options?: RequestOptions): APIPromise<Response> {
    const { bucket } = params;
    return this._client.get(path`/v1/object/${bucket}/${key}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload a file to the storage system. The bucket parameter is used for access
   * control, while the key determines the storage path. Supports streaming uploads
   * for files of any size.
   */
  upload(
    key: string,
    params: ObjectUploadParams,
    options?: RequestOptions,
  ): APIPromise<ObjectUploadResponse> {
    const { bucket, body } = params;
    return this._client.put(path`/v1/object/${bucket}/${key}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }
}

export interface ObjectDeleteResponse {
  success: boolean;
}

export interface ObjectUploadResponse {
  bucket: string;

  key: string;

  success: boolean;
}

export interface ObjectDeleteParams {
  /**
   * The bucket identifier to validate access
   */
  bucket: string;
}

export interface ObjectDownloadParams {
  /**
   * The bucket identifier to validate access
   */
  bucket: string;
}

export interface ObjectUploadParams {
  /**
   * Path param: The bucket identifier to validate access
   */
  bucket: string;

  /**
   * Body param:
   */
  body: Uploadable;
}

export declare namespace Object {
  export {
    type ObjectDeleteResponse as ObjectDeleteResponse,
    type ObjectUploadResponse as ObjectUploadResponse,
    type ObjectDeleteParams as ObjectDeleteParams,
    type ObjectDownloadParams as ObjectDownloadParams,
    type ObjectUploadParams as ObjectUploadParams,
  };
}
