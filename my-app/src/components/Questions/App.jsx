import React from 'react';
import FaqList from './FaqList/FaqList';
import customData from './FaqList/FaqList.json';

const Questions = () => {
    return (
        <div>
            <FaqList faqItems={customData.data.FaqItems} />
        </div>
    );
};

export default Questions;
