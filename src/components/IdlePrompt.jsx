import React, { useState } from 'react';
import { useSession } from '../context/SessionContext';
import './IdlePrompt.css';

export default function IdlePrompt() {
    const { conversationIdle, idlePrompts } = useSession();
    const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
    
    if (!conversationIdle) {
        return null;
    }
    
    const handleNextPrompt = () => {
        setCurrentPromptIndex((prev) => (prev + 1) % idlePrompts.length);
    };
    
    const handlePrevPrompt = () => {
        setCurrentPromptIndex((prev) => (prev - 1 + idlePrompts.length) % idlePrompts.length);
    };
    
    return (
        <div className="idle-prompt-overlay">
            <div className="idle-prompt-container">
                <div className="idle-prompt-icon">
                    <i className="fa-solid fa-comments"></i>
                </div>
                <h3 className="idle-prompt-title">会話のヒント</h3>
                <p className="idle-prompt-subtitle">
                    会話が止まっていますね。こんな話題はいかがですか？
                </p>
                <div className="idle-prompt-content">
                    <button 
                        className="prompt-nav-btn prev" 
                        onClick={handlePrevPrompt}
                        aria-label="前のヒント"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div className="prompt-text">
                        <i className="fa-solid fa-quote-left quote-icon"></i>
                        {idlePrompts[currentPromptIndex]}
                        <i className="fa-solid fa-quote-right quote-icon"></i>
                    </div>
                    <button 
                        className="prompt-nav-btn next" 
                        onClick={handleNextPrompt}
                        aria-label="次のヒント"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div className="prompt-indicator">
                    {idlePrompts.map((_, index) => (
                        <span 
                            key={index} 
                            className={`indicator-dot ${index === currentPromptIndex ? 'active' : ''}`}
                            onClick={() => setCurrentPromptIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}
