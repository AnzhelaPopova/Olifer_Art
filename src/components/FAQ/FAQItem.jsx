import React, { useState } from 'react';
import './FAQItem.scss';

export default function FAQItem({ questions }) {
    const [expanded, setExpanded] = useState([]);

    const toggleAnswer = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !expanded[index];
        setExpanded(newExpanded);
    };

    return (
        <div className='container_question'>
            <h2>Вопросы и ответы</h2>
            {questions.map((faq, index) => (
                <div className='container_questionItem' key={index}>
                    <h3 className='questionItem' onClick={() => toggleAnswer(index)}>
                        {faq.question}
                    </h3>
                    {expanded[index] && (
                        <p className='answerItem' dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                    )}
                </div>
            ))}
        </div>
    );
}
