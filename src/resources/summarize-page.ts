// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SummarizePage extends APIResource {
  /**
   * Generates intelligent summaries of search result pages, helping users quickly
   * understand large result sets without reading through every document. The system
   * analyzes the content of all results on a given page and generates a detailed
   * overview.
   *
   * The summary system:
   *
   * - Identifies key themes and topics
   * - Extracts important findings
   * - Highlights document relationships
   * - Provides content type distribution
   */
  create(body: SummarizePageCreateParams, options?: RequestOptions): APIPromise<SummarizePageCreateResponse> {
    return this._client.post('/v1/summarize_page', { body, ...options });
  }
}

export interface SummarizePageCreateResponse {
  /**
   * AI-generated summary including key themes and topics, content type distribution,
   * important findings, and document relationships
   */
  summary: string;
}

export interface SummarizePageCreateParams {
  /**
   * Client-provided search session identifier from the original search
   */
  request_id: string;

  /**
   * Target page number (1-based)
   */
  page?: number;

  /**
   * Results per page. Affects how many documents are included in the summary
   */
  page_size?: number;
}

export declare namespace SummarizePage {
  export {
    type SummarizePageCreateResponse as SummarizePageCreateResponse,
    type SummarizePageCreateParams as SummarizePageCreateParams,
  };
}
