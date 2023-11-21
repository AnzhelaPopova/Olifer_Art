import React, { useState } from 'react';
import './FaqList.scss';


const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div onClick={handleClick} className="question">
                {isOpen ? '-' : '+'} {question}
            </div>
            {isOpen && <div>{answer}</div>}
        </div>
    );
};

const FaqList = ({ faqItems }) => {
    return (
        <div>
            {faqItems.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default FaqList;
