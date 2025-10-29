# 日本語会話練習プラットフォーム - Testing Guide

## 📦 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

---

## 🧪 Testing Features

### Feature 1: Session Start Screen
**What to test:**
- ✅ A welcome screen should appear when the app loads
- ✅ Shows list of 4 participants (田中さん, 佐藤さん, 山田さん, 鈴木さん)
- ✅ Shows session flow instructions
- ✅ "セッションを開始" button is visible

**How to test:**
1. Open the app
2. You should see the session start screen overlay
3. Click "セッションを開始" to proceed

---

### Feature 2: Timer Component
**What to test:**
- ✅ Timer displays countdown in MM:SS format
- ✅ Initial time is 20:00 (20 minutes for 4 participants)
- ✅ Moderator can start/pause the timer
- ✅ Timer countdown works when started
- ✅ 2-minute warning appears at 02:00
- ✅ Color changes: green → orange (≤2min) → red (≤1min)

**How to test:**
1. Start the session
2. Look for the timer at the top (green background)
3. As moderator (田中さん), click "開始" to start the timer
4. Watch it count down
5. Click "一時停止" to pause
6. **To test 2-minute warning:** Open browser console and run:
   ```javascript
   // This will set the timer to 2 minutes to test the warning
   ```
   Or wait until timer reaches 02:00

**Expected timer durations by participant count:**
- 2 participants: 10:00
- 3 participants: 15:00
- 4 participants: 20:00 (current mock data)
- 5 participants: 25:00
- 6 participants: 30:00

---

### Feature 3: Participants List
**What to test:**
- ✅ Shows all 4 participants with names
- ✅ Shows "4人" count badge
- ✅ First participant (田中さん) has crown icon (moderator)
- ✅ Current user (田中さん) can click hand-raise button
- ✅ Hand icon appears when raised
- ✅ Background changes to yellow when hand is raised

**How to test:**
1. Look at the left panel "参加者" section
2. Find the crown icon next to 田中さん
3. Click the hand button next to 田中さん (your user)
4. See the 🙋 emoji appear
5. Click again to lower hand

---

### Feature 4: Topic Section
**What to test:**
- ✅ Topic title displays: "科学の進歩と人間の責任"
- ✅ Blue NOTE badge appears
- ✅ Topic description is formatted nicely
- ✅ "坂口志文さん" is highlighted
- ✅ Four discussion questions appear as bullet points

**How to test:**
1. Look at the main content area (center panel)
2. Verify the blue box with topic content
3. Check that Japanese text displays correctly

---

### Feature 5: Bonus Vocabulary List
**What to test:**
- ✅ Purple header "ボーナス単語リスト" with "8語"
- ✅ Click header to expand/collapse
- ✅ Shows 8 vocabulary words with readings and meanings
- ✅ Each word has a star score (1-5)
- ✅ Color-coded by difficulty
- ✅ Legend shows difficulty levels

**How to test:**
1. Find the purple vocabulary section
2. Click the header to collapse
3. Click again to expand
4. Verify all 8 words are visible
5. Check score colors match difficulty

---

### Feature 6: Moderator Panel
**What to test:**
- ✅ Yellow/gold panel visible only for moderator (田中さん)
- ✅ Shows crown icon and "司会者パネル"
- ✅ Click to expand/collapse
- ✅ Displays 6 common phrases in Japanese
- ✅ Click any phrase to copy it
- ✅ "コピー済み" appears after clicking
- ✅ Shows moderator tips at bottom

**How to test:**
1. As moderator, find the golden panel
2. Click to expand
3. Click on any phrase
4. Verify "コピー済み" appears
5. Try pasting (Ctrl+V) - the phrase should paste

---

### Feature 7: Conversation Idle Prompt ⚠️ SPECIAL TESTING
**What to test:**
- ✅ Modal overlay appears when conversation is idle
- ✅ Shows "会話のヒント" title
- ✅ Displays conversation prompts
- ✅ Navigation arrows work (previous/next)
- ✅ Dot indicators show current prompt
- ✅ Can click dots to jump to specific prompt

**How to test (IMPORTANT - Manual Toggle Required):**

The idle prompt is controlled by a variable for testing purposes. To trigger it:

1. Open browser DevTools (F12)
2. Go to Console tab
3. Type this command and press Enter:
   ```javascript
   // Find the React component and update state
   // Since we're using React Context, we need to access it through React DevTools
   ```

**EASIER METHOD - Use React DevTools:**
1. Install React Developer Tools browser extension
2. Open React DevTools (Components tab)
3. Find `SessionProvider` component
4. Look for `conversationIdle` in the state
5. Double-click the value and change from `false` to `true`
6. The idle prompt should immediately appear

**Alternative - Code Modification for Testing:**
Open `src/context/SessionContext.jsx` and change line 60:
```javascript
// Change from:
const [conversationIdle, setConversationIdle] = useState(false);
// To:
const [conversationIdle, setConversationIdle] = useState(true);
```
Save the file and refresh the page.

**What to verify:**
- Full-screen overlay appears
- Animated bouncing chat icon
- Four different prompts can be navigated
- Dots indicate which prompt is active

---

### Feature 8: Shared Whiteboard
**What to test:**
- ✅ Cyan/turquoise header "共有ホワイトボード"
- ✅ Excalidraw iframe loads
- ✅ Can draw and interact with whiteboard
- ✅ External link button opens in new tab
- ✅ Instructions appear at bottom

**How to test:**
1. Scroll down to find whiteboard section
2. Try drawing inside the iframe
3. Click the external link icon (top right)
4. Verify Excalidraw opens in new tab

**Note:** In production, you would replace the Excalidraw URL with a shared room URL so all participants see the same board.

---

### Feature 9: Hand-Raising Feature
**What to test:**
- ✅ Each participant can raise/lower hand
- ✅ Hand emoji 🙋 appears when raised
- ✅ Participant card background turns yellow
- ✅ Border appears on left side

**How to test:**
1. Find your participant card (田中さん)
2. Click the hand button
3. Verify visual changes
4. Click again to lower hand

---

### Feature 10: Responsive Design
**What to test:**
- ✅ Desktop (>1200px): 2-column layout
- ✅ Tablet (768px-1200px): 2-column layout (narrower)
- ✅ Mobile (<768px): Single column, stacked layout

**How to test:**
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Try different screen sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)
4. Verify layout adapts properly

---

## 🎨 Visual Verification Checklist

### Color Scheme
- ✅ Primary background: Light beige (#d8d1d1)
- ✅ Secondary (header): Maroon/burgundy (#9e4145)
- ✅ Accent: Teal/green (#619e83)
- ✅ Timer: Green → Orange → Red
- ✅ Vocabulary: Purple gradient
- ✅ Moderator: Gold/yellow
- ✅ Whiteboard: Cyan

### Icons (Font Awesome)
- ✅ Crown for moderator
- ✅ Clock for timer
- ✅ Hand for raising hand
- ✅ Book for vocabulary
- ✅ Comments for idle prompt
- ✅ Chalkboard for whiteboard
- ✅ Check marks and copy icons

---

## 🐛 Known Limitations & Future Implementation

1. **Voice Chat**: Not implemented (use Discord as specified)
2. **Real-time Sync**: Currently using mock data, no WebSocket connection
3. **Whiteboard Sharing**: Iframe loads public Excalidraw, not a shared room
4. **Conversation Idle Detection**: Manual toggle only, no automatic detection
5. **Score Tracking**: Vocabulary scores not actually tracked yet

---

## 📝 Mock Data Reference

### Participants (4 users)
- 田中さん (ID: 1, Moderator, Current User)
- 佐藤さん (ID: 2)
- 山田さん (ID: 3)
- 鈴木さん (ID: 4, Not Ready)

### Vocabulary Words (8 words)
1. 倫理 (ethics) - Score: 3
2. 遺伝子編集 (gene editing) - Score: 5
3. 免疫 (immunity) - Score: 2
4. 制御 (control) - Score: 3
5. 克服 (overcome) - Score: 4
6. 寿命 (lifespan) - Score: 2
7. 進歩 (progress) - Score: 2
8. 責任 (responsibility) - Score: 1

---

## 🔧 Troubleshooting

### Issue: Components not showing
**Solution:** Check browser console for errors. Make sure all dependencies are installed.

### Issue: Styles look broken
**Solution:** Clear browser cache and hard refresh (Ctrl+Shift+R)

### Issue: Timer not counting
**Solution:** Make sure you clicked the "開始" button as the moderator

### Issue: Can't see moderator panel
**Solution:** You need to be participant ID 1 (田中さん) to see it. This is hardcoded for demo purposes.

### Issue: Idle prompt won't appear
**Solution:** Follow the React DevTools method above to manually set `conversationIdle` to `true`

---

## 📸 Screenshot Verification Points

When reviewing with PM, capture screenshots of:
1. ✅ Session start screen
2. ✅ Full dashboard with all components visible
3. ✅ Timer in different states (running, paused, warning)
4. ✅ Participant with hand raised
5. ✅ Expanded vocabulary list
6. ✅ Expanded moderator panel
7. ✅ Idle prompt modal
8. ✅ Mobile responsive view

---

## ✅ Final Acceptance Criteria

- [ ] All components render without errors
- [ ] Session flow works (start screen → main dashboard)
- [ ] Timer starts, pauses, and counts down correctly
- [ ] Participants list shows all users with proper badges
- [ ] Topic section displays formatted content
- [ ] Vocabulary list expands/collapses
- [ ] Moderator panel shows only for moderator
- [ ] Hand-raising works and shows visual feedback
- [ ] Idle prompt can be triggered and navigated
- [ ] Whiteboard iframe loads
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] All text displays properly in Japanese

---

## 🚀 Next Steps for Production

1. Integrate WebSocket for real-time synchronization
2. Implement actual conversation idle detection (audio/activity monitoring)
3. Set up shared whiteboard room URLs
4. Add user authentication
5. Implement vocabulary score tracking
6. Add session recording/replay features
7. Create admin panel for managing topics

---

## 📞 Contact

If you encounter any issues during testing, please note:
- Browser used
- Screen size
- Specific steps to reproduce
- Error messages (if any)
- Screenshots

**Happy Testing! 🎉**
