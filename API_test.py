from openai import OpenAI
from time import time

words = {'dog', 'cat', 'bird', 'sword'}
letters = {'z', 'y', 'w'}

PROMPT = f"Write a story that is less than 50 words that uses these words: {words}. Also include words that uses these letters: {letters}"

# Initialize OpenAPI api client for llama-cpp-python server
client = OpenAI(
    api_key = "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", # can be anything
    base_url = "http://localhost:8000/v1" # NOTE: Replace with IP address and port of your llama-cpp-python server
)

# Send a request to the server
start_time = time()
completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe.  Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature. If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information."},
    {"role": "user", "content": f"{PROMPT}"}
  ],
  max_tokens=256
)
end_time = time()

# Print time taken and response
print("Time taken: ", end_time - start_time)
print(completion.choices[0].message)