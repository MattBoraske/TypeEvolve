                                      
```
  ______                    ______            __         
 /_  __/_  ______  ___     / ____/   ______  / /   _____ 
  / / / / / / __ \/ _ \   / __/ | | / / __ \/ / | / / _ \
 / / / /_/ / /_/ /  __/  / /___ | |/ / /_/ / /| |/ /  __/
/_/  \__, / .___/\___/  /_____/ |___/\____/_/ |___/\___/ 
    /____/_/

   _     ___                          _     _   ___   _____          _             _____         _              
  / \   | _ \___ _ _ ______ _ _  __ _| |   /_\ |_ _| |_   _|  _ _ __(_)_ _  __ _  |_   _| _ __ _(_)_ _  ___ _ _ 
 / _ \  |  _/ -_) '_(_-< _ \ ' \/ _` | |  / _ \ | |    | || || | '_ \ | ' \/ _` |   | || '_/ _` | | ' \/ -_) '_|
/_/ \_\ |_| \___|_| /__|___/_||_\__,_|_| /_/ \_\___|   |_| \_, | .__/_|_||_\__, |   |_||_| \__,_|_|_||_\___|_|  
                                                            |__/|_|         |___/                                
```

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
