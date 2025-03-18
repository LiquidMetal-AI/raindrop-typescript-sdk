// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { type Uploadable } from '../uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Object extends APIResource {
  /**
   * Delete a file from a Smart Bucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to delete from. The key is the path to the object
   * in the bucket.
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
   * Download a file from a Smart Bucket or regular bucket. The bucket parameter (ID)
   * is used to identify the bucket to download from. The key is the path to the
   * object in the bucket.
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
   * Upload a file to a Smart Bucket or regular bucket. The bucket parameter (ID) is
   * used to identify the bucket to upload to. The key is the path to the object in
   * the bucket.
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
   * The bucket identifier
   */
  bucket: string;
}

export interface ObjectDownloadParams {
  /**
   * The bucket identifier
   */
  bucket: string;
}

export interface ObjectUploadParams {
  /**
   * Path param: The bucket identifier
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
