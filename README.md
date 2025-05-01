# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Steps to get started with an app on your desktop 

Prepare your Mac for react and npm

### `brew update`

### `brew install npm`

Create a Chat GPT React App

### `git clone < Report Name`

### `touch .env`

Sign-up on ChatGPT and create API key
update API key in .env file

### `cd <App path>`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



"Pluggable Enterprise RAG Architecture" (PERA) that combines reusable big data components with flexible GenAI elements to serve multiple departments with their specific knowledge bases and use cases.

Data Ingestion Layer
====================
Apache Spark: Distributed processing for large-scale data ingestion
Connector Framework: Pre-built adapters for common data sources (SharePoint, Salesforce, DBs, etc.)
Supports Files, Databases, APIs and Streaming from eventHub.

Storage Layer
=============
Object Storage: S3-compatible (MinIO, AWS S3, Ceph) for raw documents
Data Lake: Delta Lake/Iceberg for structured storage
Hive Metastore: Unified metadata management across departments

Processing Layer
=================
Chunking Service:
Supports multiple strategies (semantic, fixed-size, hierarchical)
Department-specific chunking rules via configuration

Embedding Service:
Plugin architecture for models (OpenAI, BERT, department-specific fine-tuned models)
Batch processing via Spark, real-time via TorchServe/TensorRT

Vector Knowledge Base
======================
VectorDB Cluster:
Multi-tenant architecture (Weaviate, Milvus, Pinecone)
Department-specific collections with access controls

Hybrid Search: 
Combines vector + traditional search (Solr/Elastic)

Model Serving Layer
===================
LLM Gateway:
Route to appropriate model (central LLM or department-specific)
Cost tracking and QoS management

Fine-tuning Service:
Isolated environments for department-specific model training
Version control for model artifacts



Framework Features
Configuration-Driven Setup

YAML/JSON templates for department-specific flows

Reusable component definitions

Monitoring & Governance

Unified observability (Prometheus/Grafana)

Usage metrics per department

Knowledge freshness indicators

CI/CD Pipeline

GitOps for knowledge base updates

Automated testing for RAG performance

Canary deployments for model updates

Security Model

Role-based access to knowledge

Data isolation between departments

Audit trails for all accesses

================================================================================
