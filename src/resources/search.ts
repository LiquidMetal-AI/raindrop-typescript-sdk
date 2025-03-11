// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Retrieve additional pages from a previous search. This endpoint enables
   * navigation through large result sets while maintaining search context and result
   * relevance.
   */
  getResults(query: SearchGetResultsParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.get('/v1/search', { query, ...options });
  }

  /**
   * Primary search endpoint that provides advanced search capabilities across all
   * document types stored in Smart Buckets. Supports recursive object search within
   * documents, enabling queries for nested content like embedded images, text
   * content, and personally identifiable information (PII).
   *
   * The system supports complex queries like:
   *
   * - 'Show me documents containing credit card numbers or social security numbers'
   * - 'Find images of landscapes taken during sunset'
   * - 'Get documents mentioning revenue forecasts from Q4 2023'
   * - 'Find me all PDF documents that contain pictures of a cat'
   * - 'find me all audio files that contain infomration about the weather in SF in
   *   2024'
   *
   * Key capabilities:
   *
   * - Natural language query understanding
   * - Content-based search across text, images, and audio
   * - Automatic PII detection
   * - Multi-modal search (text, images, audio)
   */
  perform(body: SearchPerformParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.post('/v1/search', { body, ...options });
  }
}

export interface SearchResponse {
  pagination: SearchResponse.Pagination;

  /**
   * Matched results with metadata
   */
  results: Array<TextResult>;
}

export namespace SearchResponse {
  export interface Pagination {
    /**
     * Indicates more results available
     */
    has_more: boolean;

    /**
     * Current page number (1-based)
     */
    page: number;

    /**
     * Results per page
     */
    page_size: number;

    /**
     * Total number of available results
     */
    total: number;

    /**
     * Total available pages
     */
    total_pages: number;
  }
}

export interface TextResult {
  /**
   * Unique identifier for this text segment
   */
  chunk_signature: string;

  /**
   * Parent document identifier
   */
  payload_signature?: string;

  /**
   * Relevance score (0.0 to 1.0)
   */
  score?: number;

  /**
   * Source document information in JSON format
   */
  source?: string;

  /**
   * The actual content of the result
   */
  text?: string;

  /**
   * Content MIME type
   */
  type?: 'text/plain' | 'application/pdf' | 'image/jpeg' | 'image/png';
}

export interface SearchGetResultsParams {
  /**
   * Client-provided search session identifier from the initial search
   */
  request_id: string;

  /**
   * Requested page number
   */
  page?: number;

  /**
   * Results per page
   */
  page_size?: number;
}

export interface SearchPerformParams {
  /**
   * Natural language search query that can include complex criteria
   */
  input: string;

  /**
   * Client-provided search session identifier. Required for pagination and result
   * tracking. We recommend using a UUID or ULID for this value.
   */
  request_id: string;

  /**
   * Optional list of specific bucket IDs to search in. If not provided, searches the
   * latest version of all buckets
   */
  bucket_ids?: Array<string>;
}

export declare namespace Search {
  export {
    type SearchResponse as SearchResponse,
    type TextResult as TextResult,
    type SearchGetResultsParams as SearchGetResultsParams,
    type SearchPerformParams as SearchPerformParams,
  };
}
