# Query Analysis and Indexing Optimization Report

## Overview

This report documents the performance differences observed when executing MongoDB queries under three different indexing conditions: without an index, with a single index, and with a compound index.

## Performance Comparison

1. Query Without Index (Collection Scan / COLLSCAN)
   When querying for products by category without any indexes, MongoDB had to perform a Collection Scan. This means the database examined every single document in the collection (totalDocsExamined = 30) to find the matching records. The totalKeysExamined was 0 because no index was used. In a large database, this approach is highly inefficient and leads to slow execution times.

2. Query With Single Index (Index Scan / IXSCAN)
   After creating an index on the `category` field, the performance improved significantly. MongoDB performed an Index Scan, meaning it only examined the keys inside the index and directly retrieved the matching documents. The totalDocsExamined dropped exactly to the number of returned results, completely eliminating unnecessary document scanning and reducing execution time.

3. Query With Compound Index (Sorting Optimization)
   When adding a `.sort({ price: 1 })` operation to the query, the single index on `category` helped find the documents, but MongoDB still had to sort them in memory. By creating a compound index on `{ category: 1, price: 1 }`, the query performance was further optimized. The compound index allowed MongoDB to retrieve the documents already sorted, eliminating the need for an expensive in-memory sorting stage.

## Conclusion

Indexing is a critical optimization strategy in MongoDB. While a Collection Scan is acceptable for tiny datasets, adding single indexes on frequently queried fields drastically reduces the number of documents the engine needs to scan. Furthermore, for complex queries involving both filtering and sorting, compound indexes provide the best performance by satisfying both operations simultaneously at the index level.
