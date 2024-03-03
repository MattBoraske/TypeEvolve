const axios = require('axios');

async function createStory(words, letters, difficulty) {
    const formattedWords = words.slice(0, -1).join(', ') + ', and ' + words[words.length - 1];
    const formattedLetters = letters.slice(0, -1).join(', ') + ', and ' + letters[letters.length - 1];

    const sysPrompt = `Adopt the persona of a knowledgeable yet approachable guide in English language and communication.`;
    const userPrompt = `Create a story within a 50-word limit, that includes the words ${formattedWords}, and ${difficulty} words with letters ${formattedLetters}.`;

    try {
        const response = await axios.post('http://localhost:8080/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: sysPrompt
                },
                {
                    role: "user",
                    content: userPrompt
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer no-key'
            }
        });

        const message = response.data.choices[0].message;
        return message['content'];
    } catch (error) {
        console.error('Error:', error);
        return null; // or handle the error as you prefer
    }
}

function determineDifficulty(accuracy) {
    if (accuracy < 0 || accuracy > 100) {
        throw new Error('Accuracy must be between 0 and 100');
    }
    // Adjust the formula to ensure a maximum difficulty of 4
    return Math.min(Math.floor(accuracy / 25), 4);
}

// TESTING USAGE
const words = ['dog', 'cat', 'bird', 'sword'];
const letters = ['b', 'f', 'c'];
const difficultyLevels = ['very simple', 'simple', 'average', 'complex', 'very complex'];
const accuracy = 100; // Example accuracy

// calculate difficulty level
const difficulty = difficultyLevels[determineDifficulty(accuracy)];

// send request to create story
(async () => {
    const story = await createStory(words, letters, difficulty);
    console.log(story); // Handle the output as needed
})();
