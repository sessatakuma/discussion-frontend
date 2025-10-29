import React from 'react';

import Nav from 'components/Nav';
import Footer from 'components/Footer';
import SessionStart from 'components/SessionStart';
import Timer from 'components/Timer';
import ParticipantsList from 'components/ParticipantsList';
import TopicSection from 'components/TopicSection';
import VocabularyList from 'components/VocabularyList';
import ModeratorPanel from 'components/ModeratorPanel';
import IdlePrompt from 'components/IdlePrompt';
import Whiteboard from 'components/Whiteboard';

import { useSession } from '../context/SessionContext';

import 'components/Main.css';

export default function Main() {
    const { sessionState } = useSession();
    
    return <>
        <Nav/>
        <main className="main-container">
            {/* Session start screen overlay */}
            <SessionStart />
            
            {/* Idle prompt overlay */}
            <IdlePrompt />
            
            {sessionState !== 'waiting' && (
                <>
                    <div className="main-content">
                        <div className="left-panel">
                            <Timer />
                            <ParticipantsList />
                            <ModeratorPanel />
                        </div>
                        
                        <div className="center-panel">
                            <TopicSection />
                            <VocabularyList />
                            <Whiteboard />
                        </div>
                    </div>
                </>
            )}
        </main>
        <Footer/>
    </>
}