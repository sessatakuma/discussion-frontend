# 📁 Project File Structure

## Complete Directory Tree

```
discussion-frontend/
│
├── 📄 package.json                      # Project dependencies and scripts
├── 📄 webpack.config.js                 # Webpack configuration
├── 📄 README.md                         # Original readme
├── 📄 README_NEW.md                     # Updated readme (use this)
├── 📄 prompt.txt                        # Sample topic content
│
├── 📖 IMPLEMENTATION_SUMMARY.md         # ⭐ Complete implementation overview
├── 📖 TESTING_GUIDE.md                  # ⭐ Comprehensive testing guide
├── 📖 IDLE_PROMPT_TEST.md               # ⭐ Special test instructions
│
├── 📂 dist/                             # Distribution/build output
│   ├── index.html                       # Main HTML file
│   ├── index.bundle.js                  # Compiled JavaScript (generated)
│   └── images/                          # Static images
│       └── icon.png
│
├── 📂 node_modules/                     # Dependencies (auto-generated)
│
└── 📂 src/                              # Source code
    │
    ├── 📄 index.jsx                     # App entry point + SessionProvider wrapper
    ├── 📄 index.css                     # Global styles and CSS variables
    │
    ├── 📂 context/                      # State Management
    │   └── 📄 SessionContext.jsx        # Global state context (all app state here)
    │
    └── 📂 components/                   # React Components
        │
        ├── 📄 Nav.jsx                   # Header/Navigation bar
        ├── 📄 Nav.css
        │
        ├── 📄 Footer.jsx                # Footer component
        ├── 📄 Footer.css
        │
        ├── 📄 Main.jsx                  # ⭐ Main layout orchestrator
        ├── 📄 Main.css                  # Grid layout and responsive styles
        │
        ├── 📄 SessionStart.jsx          # ✨ Session start screen overlay
        ├── 📄 SessionStart.css
        │
        ├── 📄 Timer.jsx                 # ✨ Countdown timer component
        ├── 📄 Timer.css
        │
        ├── 📄 ParticipantsList.jsx      # ✨ Participants display
        ├── 📄 ParticipantsList.css
        │
        ├── 📄 TopicSection.jsx          # ✨ Discussion topic display
        ├── 📄 TopicSection.css
        │
        ├── 📄 VocabularyList.jsx        # ✨ Bonus vocabulary panel
        ├── 📄 VocabularyList.css
        │
        ├── 📄 ModeratorPanel.jsx        # ✨ Moderator-only tools
        ├── 📄 ModeratorPanel.css
        │
        ├── 📄 IdlePrompt.jsx            # ✨ Conversation idle prompt modal
        ├── 📄 IdlePrompt.css
        │
        ├── 📄 Whiteboard.jsx            # ✨ Shared whiteboard iframe
        └── 📄 Whiteboard.css

✨ = Newly implemented components
⭐ = Important files to read first
```

---

## 📋 Component Hierarchy

```
App (index.jsx)
└── SessionProvider (context)
    └── Main.jsx
        ├── Nav.jsx
        ├── <main>
        │   ├── SessionStart.jsx (overlay when sessionState='waiting')
        │   ├── IdlePrompt.jsx (overlay when conversationIdle=true)
        │   └── <main-content>
        │       ├── <left-panel>
        │       │   ├── Timer.jsx
        │       │   ├── ParticipantsList.jsx
        │       │   └── ModeratorPanel.jsx (if isCurrentUserModerator)
        │       └── <center-panel>
        │           ├── TopicSection.jsx
        │           ├── VocabularyList.jsx
        │           └── Whiteboard.jsx
        └── Footer.jsx
```

---

## 🎯 Key Files to Review

### For Understanding Implementation
1. **`IMPLEMENTATION_SUMMARY.md`** - Start here! Complete overview
2. **`src/context/SessionContext.jsx`** - All state and mock data
3. **`src/components/Main.jsx`** - Layout and component orchestration

### For Testing
1. **`TESTING_GUIDE.md`** - Comprehensive testing instructions
2. **`IDLE_PROMPT_TEST.md`** - Special instructions for one feature

### For Development
1. **`package.json`** - Dependencies and scripts
2. **`webpack.config.js`** - Build configuration
3. **`dist/index.html`** - HTML template

---

## 📦 Component Details

### Core Components

| Component | Purpose | File | State Source |
|-----------|---------|------|--------------|
| Main | Layout orchestrator | Main.jsx | SessionContext |
| SessionProvider | Global state | SessionContext.jsx | React Context |

### Feature Components

| Component | Purpose | File | Key Features |
|-----------|---------|------|--------------|
| SessionStart | Welcome screen | SessionStart.jsx | Participant list, instructions |
| Timer | Countdown timer | Timer.jsx | Dynamic duration, start/pause, warnings |
| ParticipantsList | Show participants | ParticipantsList.jsx | Moderator indicator, hand-raising |
| TopicSection | Display topic | TopicSection.jsx | Markdown-style formatting |
| VocabularyList | Bonus words | VocabularyList.jsx | Expandable, color-coded scores |
| ModeratorPanel | Moderator tools | ModeratorPanel.jsx | Conversation phrases, tips |
| IdlePrompt | Conversation prompts | IdlePrompt.jsx | Navigation, multiple prompts |
| Whiteboard | Shared board | Whiteboard.jsx | Excalidraw iframe |

### Existing Components

| Component | Purpose | File | Notes |
|-----------|---------|------|-------|
| Nav | Header | Nav.jsx | Pre-existing, maintained |
| Footer | Footer | Footer.jsx | Pre-existing, maintained |

---

## 🗂️ CSS Organization

Each component has its own CSS file:
- Component-specific styles in component CSS
- Global styles in `index.css`
- Layout styles in `Main.css`

### CSS Variables (in index.css)
```css
--clr-primary-100: #d8d1d140    /* Light beige transparent */
--clr-primary-200: #d8d1d1cc    /* Light beige semi-transparent */
--clr-primary: #d8d1d1          /* Light beige */
--clr-secondary: #9e4145        /* Burgundy/maroon */
--clr-accent: #619e83           /* Teal green */
```

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, project metadata |
| `webpack.config.js` | Build configuration, dev server |
| `dist/index.html` | HTML template, Font Awesome, Google Fonts |

---

## 📊 State Management

### SessionContext provides:

**State Variables:**
- `sessionState` - 'waiting', 'in-progress', 'ended'
- `participants` - Array of participant objects
- `moderatorId` - ID of current moderator
- `currentUserId` - ID of current user (simulated)
- `timeRemaining` - Timer seconds
- `timerRunning` - Boolean
- `showTimeWarning` - Boolean
- `conversationIdle` - Boolean (for testing)
- `showModeratorPanel` - Boolean
- `showVocabulary` - Boolean
- `vocabulary` - Array of vocabulary objects
- `moderatorPhrases` - Array of phrases
- `idlePrompts` - Array of prompts
- `isCurrentUserModerator` - Computed boolean

**Actions:**
- `startSession()`
- `startTimer()`
- `pauseTimer()`
- `toggleHandRaise(participantId)`
- `clearAllHandRaises()`
- `dismissTimeWarning()`
- `toggleModeratorPanel()`
- `toggleVocabulary()`
- `setConversationIdle(value)` - For testing

---

## 🎨 Styling Approach

### Component Styles
- Each component has dedicated CSS file
- BEM-like naming convention
- Scoped to component class

### Responsive Breakpoints
- Desktop: > 1200px
- Tablet: 768px - 1200px
- Mobile: < 768px

### Animation Classes
- `fadeIn` - Fade in effect
- `slideUp` - Slide up effect
- `pulse` - Pulsing effect
- `bounce` - Bouncing effect
- `wave` - Waving effect

---

## 🚀 Build Output

When you run `npm run build`:
```
dist/
├── index.html        # Entry HTML
├── index.bundle.js   # All compiled JavaScript
└── images/           # Static assets
```

When you run `npm run dev`:
- Webpack dev server runs on port 3000
- Hot module replacement enabled
- Source maps generated for debugging

---

## 🔍 Finding Things

### Need to modify...

**Timer duration?**
→ `src/context/SessionContext.jsx` line ~40 (TIMER_DURATIONS)

**Participants?**
→ `src/context/SessionContext.jsx` line ~15 (MOCK_PARTICIPANTS)

**Vocabulary?**
→ `src/context/SessionContext.jsx` line ~23 (MOCK_VOCABULARY)

**Topic content?**
→ `src/components/TopicSection.jsx` line ~7 (topicContent)

**Colors?**
→ `src/index.css` line ~26 (CSS variables)

**Layout?**
→ `src/components/Main.css` (grid layout)

**Whiteboard URL?**
→ `src/components/Whiteboard.jsx` line ~7 (whiteboardUrl)

---

## 📝 Quick Reference

### Start Development
```bash
npm run dev
```

### Check for Errors
```bash
# Build output will show any errors
npm run build
```

### View App
```
http://localhost:3000
```

### Open Specific Component
- Timer: src/components/Timer.jsx
- Participants: src/components/ParticipantsList.jsx
- Moderator: src/components/ModeratorPanel.jsx
- Vocabulary: src/components/VocabularyList.jsx
- Topic: src/components/TopicSection.jsx
- Whiteboard: src/components/Whiteboard.jsx
- Idle Prompt: src/components/IdlePrompt.jsx
- Session Start: src/components/SessionStart.jsx

---

**Pro Tip:** Use your IDE's file search (Ctrl+P in VS Code) to quickly jump to any component!
