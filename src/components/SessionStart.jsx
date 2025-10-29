import React from 'react';
import { useSession } from '../context/SessionContext';
import './SessionStart.css';

export default function SessionStart() {
    const { sessionState, startSession, participants } = useSession();
    
    if (sessionState !== 'waiting') {
        return null;
    }
    
    return (
        <div className="session-start-overlay">
            <div className="session-start-container">
                <div className="start-header">
                    <i className="fa-solid fa-comments"></i>
                    <h1>日本語会話練習セッション</h1>
                    <p className="start-subtitle">みなさん、準備はいいですか？</p>
                </div>
                
                <div className="start-content">
                    <div className="participants-ready">
                        <h3>参加者一覧</h3>
                        <div className="ready-list">
                            {participants.map(participant => (
                                <div key={participant.id} className="ready-item">
                                    <i className={`fa-solid ${participant.isReady ? 'fa-circle-check' : 'fa-circle'}`}></i>
                                    <span>{participant.name}</span>
                                    {participant.isReady ? (
                                        <span className="ready-badge">準備完了</span>
                                    ) : (
                                        <span className="waiting-badge">待機中...</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="session-instructions">
                        <h3>セッションの流れ</h3>
                        <ol>
                            <li>
                                <i className="fa-solid fa-crown"></i>
                                <span>司会者が自動的に選ばれます</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-book-open"></i>
                                <span>司会者がトピックの説明を読み上げます</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-clock"></i>
                                <span>タイマーが開始され、会話が始まります</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-users"></i>
                                <span>全員で議論を楽しみましょう！</span>
                            </li>
                        </ol>
                    </div>
                    
                    <div className="session-tips">
                        <i className="fa-solid fa-lightbulb"></i>
                        <div>
                            <strong>ヒント：</strong>
                            <ul>
                                <li>手を挙げる機能で、発言したいときに意思表示できます</li>
                                <li>ボーナス単語を使うと、追加ポイントがもらえます</li>
                                <li>ホワイトボードでアイデアを共有できます</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <button className="start-session-btn" onClick={startSession}>
                    <i className="fa-solid fa-play"></i>
                    <span>セッションを開始</span>
                </button>
            </div>
        </div>
    );
}
