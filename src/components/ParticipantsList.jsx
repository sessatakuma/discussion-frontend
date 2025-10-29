import React from 'react';
import { useSession } from '../context/SessionContext';
import './ParticipantsList.css';

export default function ParticipantsList() {
    const { participants, moderatorId, toggleHandRaise, currentUserId } = useSession();
    
    return (
        <div className="participants-list">
            <div className="participants-header">
                <h3>参加者</h3>
                <span className="participant-count">{participants.length}人</span>
            </div>
            <div className="participants-container">
                {participants.map(participant => (
                    <div 
                        key={participant.id} 
                        className={`participant-item ${participant.handRaised ? 'hand-raised' : ''}`}
                    >
                        <div className="participant-info">
                            <span className="participant-name">
                                {participant.name}
                                {moderatorId === participant.id && (
                                    <span className="moderator-badge" title="司会者">
                                        <i className="fa-solid fa-crown"></i>
                                    </span>
                                )}
                            </span>
                            {participant.handRaised && (
                                <span className="hand-raised-icon" title="手を挙げています">
                                    🙋
                                </span>
                            )}
                        </div>
                        {participant.id === currentUserId && (
                            <button 
                                className={`hand-raise-btn ${participant.handRaised ? 'active' : ''}`}
                                onClick={() => toggleHandRaise(participant.id)}
                                title={participant.handRaised ? '手を下ろす' : '手を挙げる'}
                            >
                                <i className={`fa-solid ${participant.handRaised ? 'fa-hand' : 'fa-hand-back-fist'}`}></i>
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
