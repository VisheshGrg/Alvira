import chromadb
import logging
import sys

GROQ_API_KEY = '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'

from llama_index.llms.groq import Groq
# from llama_index.llms.huggingface import HuggingFaceLLM
# from llama_index.llms.huggingface_api import HuggingFaceInferenceAPI

# from llama_index.llms.ollama import Ollama
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.core import (Settings, VectorStoreIndex, SimpleDirectoryReader, PromptTemplate)
from llama_index.core import StorageContext
from llama_index.vector_stores.chroma import ChromaVectorStore

import logging
import sys

logging.basicConfig(stream=sys.stdout, level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


global query_engine
query_engine = None

# from transformers import AutoModelForCausalLM, AutoTokenizer
# from huggingface_hub import InferenceApi

def init_llm():
    # Initialize Hugging Face model using API endpoint
    # model_name = "huggingface/llama2"
    # model_name = "meta-llama/Llama-2-7b-chat-hf"
    llm = Groq(model='llama3-8b-8192', api_key=GROQ_API_KEY)
    
    # Assuming you have an inference API for the model
    # llm = HuggingFaceInferenceAPI(model_name=model_name, token="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")
    
    embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")
    Settings.llm = llm
    Settings.embed_model = embed_model



def init_index(embed_model):
    reader = SimpleDirectoryReader(input_dir="./docs", recursive=False)
    documents = reader.load_data()

    logging.info("index creating with `%d` documents", len(documents))

    chroma_client = chromadb.EphemeralClient()
    chroma_client.clear_system_cache()
    chroma_collection = chroma_client.create_collection("iollama")

    vector_store = ChromaVectorStore(chroma_collection=chroma_collection)
    storage_context = StorageContext.from_defaults(vector_store=vector_store)

    # use this to set custom chunk size and splitting
    # https://docs.llamaindex.ai/en/stable/module_guides/loading/node_parsers/

    index = VectorStoreIndex.from_documents(documents, storage_context=storage_context, embed_model=embed_model)

    return index


def init_query_engine(index):
    global query_engine

    # custome prompt template
    template = (
        "Imagine you are a salesman at a store, with access to all current and relevant information on each of your products, "
        "services and accessories. Your goal is to provide accurate and concise answers to questions in this domain.\n\n"
        "Here is some context related to the query:\n"
        "-----------------------------------------\n"
        "{context_str}\n"
        "-----------------------------------------\n"
        "Considering the above information, please respond to the following inquiry in a brief and professional manner. "
        "Don't use more than 30 words to answer:\n\n"
        "Question: {query_str}\n\n"
        "Answer succinctly and ensure your response is understandable to someone who does not have prior knowledge of that product."
    )
    qa_template = PromptTemplate(template)

    # build query engine with custom template
    # text_qa_template specifies custom template
    # similarity_top_k configure the retriever to return the top 3 most similar documents,
    # the default value of similarity_top_k is 2
    query_engine = index.as_query_engine(text_qa_template=qa_template, similarity_top_k=3)

    return query_engine


def chat(input_question, user):
    global query_engine

    response = query_engine.query(input_question)
    logging.info("got response from llm - %s", response)

    return response.response


def chat_cmd():
    global query_engine

    while True:
        input_question = input("Enter your question (or 'exit' to quit): ")
        if input_question.lower() == 'exit':
            break

        response = query_engine.query(input_question)
        logging.info("got response from llm - %s", response)


if __name__ == '__main__':
    init_llm()
    index = init_index(Settings.embed_model)
    init_query_engine(index)
    chat_cmd()
