import React from 'react';
import './TopicSection.css';

export default function TopicSection() {
    // Topic content from prompt.txt
    const topicContent = {
        title: '科学の進歩と人間の責任',
        description: 'AI、バイオ技術、遺伝子編集などの新しい科学が急速に発展している。医療や生活を大きく変えるこれらの技術は、人間の寿命を延ばし、病気を克服する可能性を広げている。今年のノーベル生理学・医学賞を受賞した大阪大学の',
        highlight: '坂口志文さん',
        description2: 'も、「制御性T細胞（Treg）」の発見によって免疫をコントロールする新しい道を開いた。一方で、こうした技術の進歩は、便利さと同時に、倫理・安全・人間のあり方を問う課題を私たちに突きつけている。',
        questions: [
            '技術の進歩は、人間をどこまで幸せにできるのか？',
            '「できること」と「してよいこと」の境界はどこにあるのか？',
            '科学が社会に与える影響を、誰が・どのようにコントロールすべきか？',
            '未来のために、私たちはどんな"科学との向き合い方"を選ぶべきか？'
        ]
    };
    
    return (
        <div className="topic-section">
            <div className="topic-note-badge">
                <i className="fa-solid fa-circle-info"></i>
                <span>NOTE</span>
            </div>
            <h2 className="topic-title">{topicContent.title}</h2>
            <div className="topic-content">
                <p className="topic-description">
                    {topicContent.description}
                    <strong className="topic-highlight">{topicContent.highlight}</strong>
                    {topicContent.description2}
                </p>
                <div className="topic-questions">
                    <ul>
                        {topicContent.questions.map((question, index) => (
                            <li key={index}>{question}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
