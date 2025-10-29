import React from 'react';
import './Whiteboard.css';

export default function Whiteboard() {
    // Using Excalidraw as the embedded whiteboard solution
    // Alternative: https://tldraw.com or other whiteboard services
    const whiteboardUrl = 'https://excalidraw.com/';
    
    return (
        <div className="whiteboard-container">
            <div className="whiteboard-header">
                <div className="whiteboard-title">
                    <i className="fa-solid fa-chalkboard"></i>
                    <h3>共有ホワイトボード</h3>
                </div>
                <a 
                    href={whiteboardUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="open-external-btn"
                    title="新しいタブで開く"
                >
                    <i className="fa-solid fa-up-right-from-square"></i>
                </a>
            </div>
            <div className="whiteboard-content">
                <iframe
                    src={whiteboardUrl}
                    title="Shared Whiteboard"
                    className="whiteboard-iframe"
                    allow="clipboard-write"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
                />
            </div>
            <div className="whiteboard-instructions">
                <i className="fa-solid fa-lightbulb"></i>
                <span>アイデアをここに描いたり、メモを書いたりできます。全員がリアルタイムで見ることができます。</span>
            </div>
        </div>
    );
}
