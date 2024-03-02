from openai import OpenAI
from time import time

words = {'dog', 'cat', 'bird', 'sword'}
letters = {'b', 'f', 'c'}
difficulty_levels = ['very simple', 'simple', 'average', 'complex', 'very complex']
difficulty = difficulty_levels[4]

formatted_words = ', '.join(sorted(words)[:-1]) + ', and ' + sorted(words)[-1]
formatted_letters = ', '.join(sorted(letters)[:-1]) + ', and ' + sorted(letters)[-1]

PROMPT = f'Create a story within a 50-word limit, that includes the words {formatted_words}, and {difficulty} words with letters {formatted_letters}.'

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
    {"role": "system", "content": "Adopt the persona of a knowledgeable yet approachable guide in English language and communication."},
    {"role": "user", "content": f"{PROMPT}"}
  ],
  max_tokens=256
)
end_time = time()

# Print time taken and response
print("Time taken: ", end_time - start_time)
print(completion.choices[0].message)