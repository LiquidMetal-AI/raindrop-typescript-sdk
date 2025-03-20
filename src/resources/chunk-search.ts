// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as SearchAPI from './search';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class ChunkSearch extends APIResource {
  /**
   * Chunk Search provides search capabilities that serve as a complete drop-in
   * replacement for traditional RAG pipelines. This system enables AI agents to
   * leverage private data stored in Smart Buckets with zero additional
   * configuration.
   *
   * Each input query is processed by our AI agent to determine the best way to
   * search the data. The system will then return the most relevant results from the
   * data ranked by relevance on the input query.
   */
  create(body: ChunkSearchCreateParams, options?: RequestOptions): APIPromise<ChunkSearchCreateResponse> {
    return this._client.post('/v1/chunk_search', { body, ...options });
  }
}

export interface ChunkSearchCreateResponse {
  /**
   * Semantically relevant results with metadata and relevance scoring
   */
  results: Array<SearchAPI.TextResult>;
}

export interface ChunkSearchCreateParams {
  /**
   * Natural language query or question. Can include complex criteria and
   * relationships
   */
  input: string;

  /**
   * Client-provided search session identifier. We recommend using a UUID or ULID for
   * this value.
   */
  request_id: string;

  /**
   * Optional list of specific bucket IDs to search in. If not provided, searches the
   * latest version of all accessible buckets
   */
  bucket_ids?: Array<string>;
}

export declare namespace ChunkSearch {
  export {
    type ChunkSearchCreateResponse as ChunkSearchCreateResponse,
    type ChunkSearchCreateParams as ChunkSearchCreateParams,
  };
}
