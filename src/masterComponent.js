import React, { useState } from 'react';
import ResultsDisplay from './components/results-display/results-display';
import ParentComponent from './components/textbox-typingbox-parent/textbox-typingbox-parent';

const SAMPLE_STORIES = [
    'On a sunny day, the park was alive with laughter and the sweet smell of flowers. Children played near the sparkling lake while dogs chased frisbees. In the distance, the city skyline glimmered, a reminder of the bustling world just beyond this peaceful oasis.',
    'The old bookstore, with its creaky wooden floors and shelves of dusty books, was a haven for readers. Each book held a world of adventure and mystery, waiting to be discovered. The soft glow of the lamp created a cozy atmosphere, perfect for getting lost in a good story.',
    'In the small kitchen, the aroma of baking bread filled the air. The chef, with skilled hands, prepared a variety of delicious dishes, each ingredient adding its unique flavor. The warm, inviting space was a testament to the joy of cooking and sharing meals with loved ones.',
    'On a crisp autumn afternoon, the park was a palette of warm colors. Leaves in shades of amber, ochre, and ruby gently fell, creating a crunchy carpet underfoot. Families enjoyed picnics, and the laughter of children playing tag echoed, blending with the soft rustle of the foliage.',
    'In the quiet of the early morning, the beach was a serene escape. Waves whispered secrets to the shore, and seagulls soared above. Footprints dotted the sand, telling tales of early walkers. The horizon, painted in hues of pink and orange, heralded the promise of a new day.',
    'The art gallery was a realm of creativity and expression. Paintings and sculptures from various eras adorned the walls and pedestals, each piece telling its unique story. Art enthusiasts wandered through the rooms, immersed in the fusion of historical narratives and contemporary visions.',
    "The mountain trail wound through lush forests and over clear streams, leading hikers to breathtaking views. The air was crisp and filled with the scent of pine. With each step, the beauty of nature unveiled itself, from tiny wildflowers to towering trees, showcasing the Earth's splendid diversity.",
    "The morning sun cast a golden light over the rolling hills, where a farmer tended his fields. The air was fresh and filled with the sound of chirping birds. Nearby, a gentle stream flowed, its waters sparkling under the clear blue sky, marking a new day in the countryside.",
    "At the bustling city market, vendors displayed colorful fruits and vegetables, fresh seafood, and handmade crafts. The sounds of lively bargaining mixed with the aroma of street food. People from all walks of life gathered, creating a vibrant tapestry of urban life and community spirit.",
    "The quiet library was a world of knowledge and imagination. Rows of books lined the walls, each spine a doorway to a different story or fact. In the hushed atmosphere, students and readers sat absorbed in their books, lost in the magic of words and learning."
]

function getRandomStory() {
    const randomIndex = Math.floor(Math.random() * SAMPLE_STORIES.length);
    return SAMPLE_STORIES[randomIndex];
}

const FIRST_STORY = getRandomStory();

const MasterComponent = () => {
    const [targetText, setTargetText] = useState(FIRST_STORY);

    return (
        <div>
            <ParentComponent targetText={targetText} setTargetText={setTargetText} />
            <ResultsDisplay targetText={targetText} setTargetText={setTargetText}/>
        </div>
    );
};

export default MasterComponent;
