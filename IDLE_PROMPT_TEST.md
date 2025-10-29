# Quick Test: Conversation Idle Prompt

## Method 1: Browser Console (Easiest)

1. Open the app: `npm run dev`
2. Start the session (click "セッションを開始")
3. Press F12 to open DevTools
4. Paste this code in Console and press Enter:

```javascript
// This will show the idle prompt
window.sessionContext = {
  setConversationIdle: (value) => {
    // Find the React root and trigger state update
    const event = new CustomEvent('toggleIdle', { detail: value });
    window.dispatchEvent(event);
  }
};

// Trigger it
alert('To show idle prompt, you need to use React DevTools (see Method 2)');
```

## Method 2: React DevTools (Recommended)

### Step 1: Install React DevTools
- Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
- Firefox: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/

### Step 2: Use It
1. Open app and start session
2. Press F12 → Click "Components" tab (React icon)
3. In component tree, find: `SessionProvider`
4. In right panel, find hooks section
5. Look for `State` with `conversationIdle: false`
6. **Double-click `false` and type `true`**
7. Press Enter
8. ✅ Idle prompt should appear immediately!

### Step 3: Close It
- To hide again, change back to `false`

## Method 3: Code Change (Permanent for Testing)

Edit: `src/context/SessionContext.jsx`

Find line ~60:
```javascript
const [conversationIdle, setConversationIdle] = useState(false);
```

Change to:
```javascript
const [conversationIdle, setConversationIdle] = useState(true);
```

Save file, refresh browser.
- Idle prompt will show by default
- Change back to `false` when done testing

---

## What You Should See

When `conversationIdle` is `true`:

✅ Dark overlay covers screen
✅ White modal in center
✅ Bouncing chat icon (animated)
✅ Title: "会話のヒント"
✅ Subtitle: "会話が止まっていますね..."
✅ A conversation prompt in Japanese
✅ Left/right arrow buttons
✅ 4 dots at bottom (navigation indicators)

### Test Navigation:
- Click → (right arrow) to see next prompt
- Click ← (left arrow) to see previous prompt
- Click any dot to jump to that prompt
- Try all 4 prompts

---

## Troubleshooting

**Prompt won't show:**
- Check you started the session first
- Verify `sessionState` is `'in-progress'` in React DevTools
- Make sure `conversationIdle` is actually `true`

**Can't find SessionProvider:**
- Scroll to top of component tree in React DevTools
- It should be near the root, wrapping `Main`

**React DevTools not appearing:**
- Refresh page after installing extension
- Check browser extensions are enabled
- Try in incognito/private mode

---

## Video Demo Script

1. "Let me show you the conversation idle prompt feature"
2. Open React DevTools
3. Navigate to SessionProvider
4. "Here's the conversationIdle state - currently false"
5. Double-click and change to true
6. "And now the prompt appears!"
7. "I can navigate between different conversation prompts"
8. Click arrows and dots
9. "This helps participants restart discussion when it goes quiet"
10. Set back to false
11. "And it disappears"

---

Good luck with testing! 🎉
