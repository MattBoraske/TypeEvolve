<div align="center">

[![](docs/TypeEvolve-front-page.PNG)](https://www.youtube.com/watch?v=kURE0gySzmw)
  
## <strong>[View the demo here!](https://www.youtube.com/watch?v=kURE0gySzmw)</strong>

</div>


[Google Docs](https://docs.google.com/document/d/1rpS6eoXiWS2pz4CO6Unv7P4owfa87kCua4z94uJKJ1U/edit)

[Model](https://huggingface.co/TheBloke/CapybaraHermes-2.5-Mistral-7B-GGUF)

Resources:
- [llama-cpp](https://github.com/ggerganov/llama.cpp)
- [llama-cpp server](https://github.com/ggerganov/llama.cpp/blob/master/examples/server/README.md)

Steps to Run Llama-cpp Server on Mac M1:
- download the model and store it in models/ directory
- git clone https://github.com/ggerganov/llama.cpp
- cd llama.cpp
- make
- ./server -m models/capybarahermes-2.5-mistral-7b.Q4_K_M.gguf -c 512
- server should now be running on 127.0.0.1:8080 and you can now send cURL requests using axios
