import React, { createContext, useContext, useState, useEffect } from 'react';

const SessionContext = createContext();

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};

// Mock data for initial development
const MOCK_PARTICIPANTS = [
    { id: 1, name: '田中さん', isReady: true, handRaised: false },
    { id: 2, name: '佐藤さん', isReady: true, handRaised: false },
    { id: 3, name: '山田さん', isReady: true, handRaised: false },
    { id: 4, name: '鈴木さん', isReady: false, handRaised: false },
];

const MOCK_VOCABULARY = [
    { word: '倫理', reading: 'りんり', meaning: 'ethics', score: 3 },
    { word: '遺伝子編集', reading: 'いでんしへんしゅう', meaning: 'gene editing', score: 5 },
    { word: '免疫', reading: 'めんえき', meaning: 'immunity', score: 2 },
    { word: '制御', reading: 'せいぎょ', meaning: 'control', score: 3 },
    { word: '克服', reading: 'こくふく', meaning: 'overcome', score: 4 },
    { word: '寿命', reading: 'じゅみょう', meaning: 'lifespan', score: 2 },
    { word: '進歩', reading: 'しんぽ', meaning: 'progress', score: 2 },
    { word: '責任', reading: 'せきにん', meaning: 'responsibility', score: 1 },
];

const MODERATOR_PHRASES = [
    '○○さん、どう思いますか？',
    'みなさんはどう考えますか？',
    '他の意見はありますか？',
    'それについて、もっと詳しく教えていただけますか？',
    '次のポイントに移りましょうか。',
    '時間が少し残っていますが、最後に何か言いたいことはありますか？',
];

const IDLE_PROMPTS = [
    'この技術が将来、日常生活にどのように影響すると思いますか？',
    '倫理的な問題について、具体的な例を挙げて話し合ってみましょう。',
    'あなたの国では、この問題についてどのような議論がありますか？',
    '科学者と一般市民の責任の違いについて考えてみましょう。',
];

// Timer duration based on participant count (in seconds)
const TIMER_DURATIONS = {
    2: 10 * 60,
    3: 15 * 60,
    4: 20 * 60,
    5: 25 * 60,
    6: 30 * 60,
};

export const SessionProvider = ({ children }) => {
    // Session state
    const [sessionState, setSessionState] = useState('waiting'); // waiting, in-progress, ended
    const [participants, setParticipants] = useState(MOCK_PARTICIPANTS);
    const [moderatorId, setModeratorId] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(1); // Simulating current user
    
    // Timer state
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [showTimeWarning, setShowTimeWarning] = useState(false);
    
    // UI state
    const [conversationIdle, setConversationIdle] = useState(false); // FOR TESTING - Set to true to show idle prompt
    const [showModeratorPanel, setShowModeratorPanel] = useState(true);
    const [showVocabulary, setShowVocabulary] = useState(true);
    
    // Vocabulary data
    const [vocabulary] = useState(MOCK_VOCABULARY);
    const [moderatorPhrases] = useState(MODERATOR_PHRASES);
    const [idlePrompts] = useState(IDLE_PROMPTS);
    
    // Calculate initial time based on participant count
    useEffect(() => {
        const participantCount = participants.length;
        const duration = TIMER_DURATIONS[participantCount] || TIMER_DURATIONS[6];
        setTimeRemaining(duration);
    }, [participants.length]);
    
    // Timer countdown
    useEffect(() => {
        let interval;
        if (timerRunning && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining(prev => {
                    const newTime = prev - 1;
                    // Show warning at 2 minutes
                    if (newTime === 120 && !showTimeWarning) {
                        setShowTimeWarning(true);
                    }
                    // End session when time runs out
                    if (newTime <= 0) {
                        setTimerRunning(false);
                        setSessionState('ended');
                        return 0;
                    }
                    return newTime;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timerRunning, timeRemaining, showTimeWarning]);
    
    // Session actions
    const startSession = () => {
        // Assign random moderator if not set
        if (!moderatorId && participants.length > 0) {
            const randomIndex = Math.floor(Math.random() * participants.length);
            setModeratorId(participants[randomIndex].id);
        }
        setSessionState('in-progress');
    };
    
    const startTimer = () => {
        setTimerRunning(true);
    };
    
    const pauseTimer = () => {
        setTimerRunning(false);
    };
    
    const toggleHandRaise = (participantId) => {
        setParticipants(prev => prev.map(p => 
            p.id === participantId ? { ...p, handRaised: !p.handRaised } : p
        ));
    };
    
    const clearAllHandRaises = () => {
        setParticipants(prev => prev.map(p => ({ ...p, handRaised: false })));
    };
    
    const dismissTimeWarning = () => {
        setShowTimeWarning(false);
    };
    
    const toggleModeratorPanel = () => {
        setShowModeratorPanel(prev => !prev);
    };
    
    const toggleVocabulary = () => {
        setShowVocabulary(prev => !prev);
    };
    
    // Helper: Check if current user is moderator
    const isCurrentUserModerator = moderatorId === currentUserId;
    
    const value = {
        // State
        sessionState,
        participants,
        moderatorId,
        currentUserId,
        timeRemaining,
        timerRunning,
        showTimeWarning,
        conversationIdle,
        showModeratorPanel,
        showVocabulary,
        vocabulary,
        moderatorPhrases,
        idlePrompts,
        isCurrentUserModerator,
        
        // Actions
        startSession,
        startTimer,
        pauseTimer,
        toggleHandRaise,
        clearAllHandRaises,
        dismissTimeWarning,
        toggleModeratorPanel,
        toggleVocabulary,
        setConversationIdle, // FOR TESTING
    };
    
    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    );
};
