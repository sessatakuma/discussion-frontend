import React from 'react';
import { useSession } from '../context/SessionContext';
import './Timer.css';

export default function Timer() {
    const { 
        timeRemaining, 
        timerRunning, 
        startTimer, 
        pauseTimer,
        isCurrentUserModerator,
        showTimeWarning,
        dismissTimeWarning,
        sessionState
    } = useSession();
    
    // Format time as MM:SS
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    const isLowTime = timeRemaining <= 120 && timeRemaining > 0; // 2 minutes or less
    const isCriticalTime = timeRemaining <= 60 && timeRemaining > 0; // 1 minute or less
    
    if (sessionState === 'waiting') {
        return null; // Don't show timer before session starts
    }
    
    return (
        <>
            <div className={`timer-container ${isLowTime ? 'low-time' : ''} ${isCriticalTime ? 'critical-time' : ''}`}>
                <div className="timer-display">
                    <i className="fa-solid fa-clock timer-icon"></i>
                    <span className="time-text">{formatTime(timeRemaining)}</span>
                </div>
                
                {isCurrentUserModerator && (
                    <div className="timer-controls">
                        {!timerRunning ? (
                            <button 
                                className="timer-btn start-btn" 
                                onClick={startTimer}
                                disabled={timeRemaining === 0}
                            >
                                <i className="fa-solid fa-play"></i>
                                <span>開始</span>
                            </button>
                        ) : (
                            <button 
                                className="timer-btn pause-btn" 
                                onClick={pauseTimer}
                            >
                                <i className="fa-solid fa-pause"></i>
                                <span>一時停止</span>
                            </button>
                        )}
                    </div>
                )}
                
                {!isCurrentUserModerator && (
                    <div className="timer-status">
                        {timerRunning ? (
                            <span className="status-indicator running">
                                <span className="pulse-dot"></span>
                                進行中
                            </span>
                        ) : (
                            <span className="status-indicator paused">一時停止</span>
                        )}
                    </div>
                )}
            </div>
            
            {/* Time Warning Modal */}
            {showTimeWarning && (
                <div className="time-warning-overlay" onClick={dismissTimeWarning}>
                    <div className="time-warning-modal" onClick={(e) => e.stopPropagation()}>
                        <i className="fa-solid fa-triangle-exclamation warning-icon"></i>
                        <h3>時間のお知らせ</h3>
                        <p>残り時間はあと<strong>2分</strong>です。</p>
                        <p>そろそろまとめに入りましょう。</p>
                        <button className="dismiss-btn" onClick={dismissTimeWarning}>
                            了解
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
