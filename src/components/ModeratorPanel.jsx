import React, { useState } from 'react';
import { useSession } from '../context/SessionContext';
import './ModeratorPanel.css';

export default function ModeratorPanel() {
    const { 
        isCurrentUserModerator, 
        moderatorPhrases, 
        showModeratorPanel, 
        toggleModeratorPanel 
    } = useSession();
    
    const [copiedIndex, setCopiedIndex] = useState(null);
    
    if (!isCurrentUserModerator) {
        return null;
    }
    
    const handleCopyPhrase = (phrase, index) => {
        navigator.clipboard.writeText(phrase).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        });
    };
    
    return (
        <div className="moderator-panel">
            <div className="moderator-header" onClick={toggleModeratorPanel}>
                <div className="moderator-title">
                    <i className="fa-solid fa-crown"></i>
                    <h3>司会者パネル</h3>
                    <span className="moderator-badge-small">あなた</span>
                </div>
                <button className="toggle-btn">
                    <i className={`fa-solid fa-chevron-${showModeratorPanel ? 'up' : 'down'}`}></i>
                </button>
            </div>
            
            {showModeratorPanel && (
                <div className="moderator-content">
                    <div className="moderator-info">
                        <i className="fa-solid fa-circle-info"></i>
                        <p>会話をスムーズに進めるためのフレーズ集です。クリックでコピーできます。</p>
                    </div>
                    <div className="phrases-list">
                        {moderatorPhrases.map((phrase, index) => (
                            <div 
                                key={index} 
                                className="phrase-item"
                                onClick={() => handleCopyPhrase(phrase, index)}
                            >
                                <span className="phrase-text">{phrase}</span>
                                <button className="copy-btn">
                                    {copiedIndex === index ? (
                                        <>
                                            <i className="fa-solid fa-check"></i>
                                            <span>コピー済み</span>
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-solid fa-copy"></i>
                                            <span>コピー</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="moderator-tips">
                        <h4>司会者の役割</h4>
                        <ul>
                            <li>トピックの説明を読み上げる</li>
                            <li>タイマーを開始・停止する</li>
                            <li>参加者全員が発言できるように促す</li>
                            <li>会話が途切れたら、新しい視点を提案する</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
