import React from 'react';
import { useSession } from '../context/SessionContext';
import './VocabularyList.css';

export default function VocabularyList() {
    const { vocabulary, showVocabulary, toggleVocabulary } = useSession();
    
    // Get difficulty color based on score
    const getDifficultyColor = (score) => {
        if (score >= 5) return 'very-hard';
        if (score >= 4) return 'hard';
        if (score >= 3) return 'medium';
        if (score >= 2) return 'easy';
        return 'very-easy';
    };
    
    return (
        <div className="vocabulary-list">
            <div className="vocabulary-header" onClick={toggleVocabulary}>
                <div className="vocabulary-title">
                    <i className="fa-solid fa-book"></i>
                    <h3>ボーナス単語リスト</h3>
                    <span className="vocabulary-count">{vocabulary.length}語</span>
                </div>
                <button className="toggle-btn">
                    <i className={`fa-solid fa-chevron-${showVocabulary ? 'up' : 'down'}`}></i>
                </button>
            </div>
            
            {showVocabulary && (
                <div className="vocabulary-content">
                    <p className="vocabulary-description">
                        会話中にこれらの単語を使うと、スコアがもらえます！
                    </p>
                    <div className="vocabulary-grid">
                        {vocabulary.map((item, index) => (
                            <div key={index} className="vocabulary-item">
                                <div className="vocab-main">
                                    <div className="vocab-word">
                                        <span className="word-text">{item.word}</span>
                                        <span className="word-reading">{item.reading}</span>
                                    </div>
                                    <span className="vocab-meaning">{item.meaning}</span>
                                </div>
                                <div className={`vocab-score ${getDifficultyColor(item.score)}`}>
                                    <i className="fa-solid fa-star"></i>
                                    <span>{item.score}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="vocabulary-legend">
                        <span className="legend-title">難易度：</span>
                        <span className="legend-item very-easy">★1</span>
                        <span className="legend-item easy">★2</span>
                        <span className="legend-item medium">★3</span>
                        <span className="legend-item hard">★4</span>
                        <span className="legend-item very-hard">★5</span>
                    </div>
                </div>
            )}
        </div>
    );
}
