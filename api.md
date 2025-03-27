# Search

Types:

- <code><a href="./src/resources/search.ts">SearchResponse</a></code>
- <code><a href="./src/resources/search.ts">TextResult</a></code>

Methods:

- <code title="get /v1/search">client.search.<a href="./src/resources/search.ts">getResults</a>({ ...params }) -> SearchResponse</code>
- <code title="post /v1/search">client.search.<a href="./src/resources/search.ts">perform</a>({ ...params }) -> SearchResponse</code>

# DocumentQuery

Types:

- <code><a href="./src/resources/document-query.ts">DocumentQueryCreateResponse</a></code>

Methods:

- <code title="post /v1/document_query">client.documentQuery.<a href="./src/resources/document-query.ts">create</a>({ ...params }) -> DocumentQueryCreateResponse</code>

# ChunkSearch

Types:

- <code><a href="./src/resources/chunk-search.ts">ChunkSearchCreateResponse</a></code>

Methods:

- <code title="post /v1/chunk_search">client.chunkSearch.<a href="./src/resources/chunk-search.ts">create</a>({ ...params }) -> ChunkSearchCreateResponse</code>

# SummarizePage

Types:

- <code><a href="./src/resources/summarize-page.ts">SummarizePageCreateResponse</a></code>

Methods:

- <code title="post /v1/summarize_page">client.summarizePage.<a href="./src/resources/summarize-page.ts">create</a>({ ...params }) -> SummarizePageCreateResponse</code>

# Object

Types:

- <code><a href="./src/resources/object.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectDeleteResponse</a></code>
- <code><a href="./src/resources/object.ts">ObjectUploadResponse</a></code>

Methods:

- <code title="get /v1/object/{bucket}">client.object.<a href="./src/resources/object.ts">list</a>(bucket) -> ObjectListResponse</code>
- <code title="delete /v1/object/{bucket}/{key}">client.object.<a href="./src/resources/object.ts">delete</a>(key, { ...params }) -> ObjectDeleteResponse</code>
- <code title="get /v1/object/{bucket}/{key}">client.object.<a href="./src/resources/object.ts">download</a>(key, { ...params }) -> Response</code>
- <code title="put /v1/object/{bucket}/{key}">client.object.<a href="./src/resources/object.ts">upload</a>(key, { ...params }) -> ObjectUploadResponse</code>
