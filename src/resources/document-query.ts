// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DocumentQuery extends APIResource {
  /**
   * Enables natural conversational interactions with documents stored in Smart
   * Buckets. This endpoint allows users to ask questions, request summaries, and
   * explore document content through an intuitive conversational interface. The
   * system understands context and can handle complex queries about document
   * contents.
   *
   * The query system maintains conversation context throught the `request_id`,
   * enabling follow-up questions and deep exploration of document content. It works
   * across all supported file types and automatically handles multi-page documents,
   * making complex file interaction as simple as having a conversation.
   *
   * The system will:
   *
   * - Maintain conversation history for context when using the same `request_id`
   * - Process questions against file content
   * - Generate contextual, relevant responses
   *
   * Document query is supported for all file types, including PDFs, images, and
   * audio files.
   */
  create(body: DocumentQueryCreateParams, options?: RequestOptions): APIPromise<DocumentQueryCreateResponse> {
    return this._client.post('/v1/document_query', { body, ...options });
  }
}

export interface DocumentQueryCreateResponse {
  /**
   * AI-generated response that may include direct document quotes, content
   * summaries, contextual explanations, references to specific sections, and related
   * content suggestions
   */
  answer: string;
}

export interface DocumentQueryCreateParams {
  /**
   * The storage bucket ID containing the target document. Must be an accessible
   * Smart Bucket
   */
  bucket: string;

  /**
   * User's input or question about the document. Can be natural language questions,
   * commands, or requests
   */
  input: string;

  /**
   * Document identifier within the bucket. Typically matches the storage path or key
   */
  object_id: string;

  /**
   * Client-provided conversation session identifier. Required for maintaining
   * context in follow-up questions. We recommend using a UUID or ULID for this
   * value.
   */
  request_id: string;
}

export declare namespace DocumentQuery {
  export {
    type DocumentQueryCreateResponse as DocumentQueryCreateResponse,
    type DocumentQueryCreateParams as DocumentQueryCreateParams,
  };
}
