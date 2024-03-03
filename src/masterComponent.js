import React, { useState } from 'react';
import ResultsDisplay from './components/results-display/results-display';
import ParentComponent from './components/textbox-typingbox-parent/textbox-typingbox-parent';

const FIRST_STORY = "Henhacks 2024 champs.";

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
