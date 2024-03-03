[Model](https://huggingface.co/TheBloke/CapybaraHermes-2.5-Mistral-7B-GGUF)

USING LLAMA-CPP NOW

steps to build llama-cpp server on Mac M1:
- download the model and store it in models/ directory
- git clone https://github.com/ggerganov/llama.cpp
- cd llama.cpp
- make
- ./server -m models/capybarahermes-2.5-mistral-7b.Q4_K_M.gguf -c 512
- server should now be running on 127.0.0.1:8080 and you can now send cURL requests using axios
