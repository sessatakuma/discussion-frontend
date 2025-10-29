# 📋 PM Review Checklist

## Pre-Review Setup

- [ ] Node.js installed
- [ ] Run `npm install` completed successfully
- [ ] Run `npm run dev` - server starts at http://localhost:3000
- [ ] Browser opens automatically (or manually open localhost:3000)
- [ ] Install React Developer Tools extension (for idle prompt testing)

---

## ✅ Feature Acceptance Testing

### 1. Session Start Screen
**Test Steps:**
1. App loads and shows welcome screen
2. See "日本語会話練習セッション" title
3. See 4 participants listed (田中、佐藤、山田、鈴木)
4. See "準備完了" badges (3 ready, 1 waiting)
5. See session flow instructions (4 numbered steps)
6. See tips section with 3 bullet points
7. Click "セッションを開始" button

**Expected Result:**
- [x] Welcome screen displays correctly
- [x] All text in Japanese renders properly
- [x] Button is clickable and responsive
- [x] Screen transitions to main dashboard

**Issues Found:** __畫面的比例有點太大了__

---

### 2. Timer Component
**Test Steps:**
1. Find timer in top section (green background)
2. Verify shows "20:00" initially (4 participants)
3. As moderator, see "開始" and timer controls
4. Click "開始" button
5. Watch timer count down (20:00 → 19:59 → 19:58...)
6. Click "一時停止" button
7. Verify timer stops
8. Click "開始" again to resume

**Expected Result:**
- [ ] Timer displays MM:SS format
- [ ] Initial time is 20:00
- [ ] Start button works
- [ ] Countdown works (1 second intervals)
- [ ] Pause button works
- [ ] Resume works
- [ ] Green background initially
- [ ] Timer controls visible to moderator

**2-Minute Warning Test:**
- [ ] (Optional) Timer turns orange at ≤2:00
- [ ] Warning modal appears at exactly 2:00
- [ ] Modal shows "残り時間はあと2分です"
- [ ] "了解" button dismisses modal

**Issues Found:** ___________________________

---

### 3. Participants List
**Test Steps:**
1. Find "参加者" section in left panel
2. Verify shows "4人" badge
3. See 4 participants listed
4. Find crown icon (👑) next to 田中さん
5. Click hand button next to 田中さん (your user)
6. See 🙋 emoji appear
7. See background turn yellow
8. Click hand button again to lower

**Expected Result:**
- [ ] All 4 participants visible
- [ ] Count badge shows "4人"
- [ ] Crown icon on moderator (田中さん)
- [ ] Hand button clickable
- [ ] Hand emoji appears when raised
- [ ] Background changes to yellow
- [ ] Left border appears (yellow/orange)
- [ ] Hand lowers when clicked again

**Issues Found:** ___________________________

---

### 4. Topic Section
**Test Steps:**
1. Find blue topic box in center panel
2. See "NOTE" badge (blue with info icon)
3. Read title: "科学の進歩と人間の責任"
4. See description paragraph
5. Find highlighted text: "坂口志文さん"
6. See 4 bullet-point questions
7. Verify all Japanese text is readable

**Expected Result:**
- [ ] Blue gradient background
- [ ] Left border (blue)
- [ ] NOTE badge visible
- [ ] Title prominent and bold
- [ ] Description text justified
- [ ] Highlighted name has yellow background
- [ ] 4 questions with bullet points
- [ ] Questions inside white box
- [ ] All Japanese characters render correctly

**Issues Found:** ___________________________

---

### 5. Bonus Vocabulary List
**Test Steps:**
1. Find purple "ボーナス単語リスト" section
2. See "8語" badge
3. Click header to collapse
4. Click header again to expand
5. See all 8 vocabulary words
6. Check each word has:
   - Japanese word (kanji/kana)
   - Reading (hiragana)
   - English meaning
   - Star score (1-5)
7. Verify colors match difficulty
8. See legend at bottom

**Expected Result:**
- [ ] Purple header with gradient
- [ ] Count shows "8語"
- [ ] Expand/collapse animation smooth
- [ ] All 8 words visible when expanded
- [ ] Each word has 3 parts + score
- [ ] Scores color-coded:
  - ★1: Green
  - ★2: Light orange
  - ★3: Orange
  - ★4: Red-orange
  - ★5: Red
- [ ] Legend shows all 5 difficulty levels
- [ ] Description text visible

**Vocabulary Words to Verify:**
- [ ] 倫理 (ethics) - ★3
- [ ] 遺伝子編集 (gene editing) - ★5
- [ ] 免疫 (immunity) - ★2
- [ ] 制御 (control) - ★3
- [ ] 克服 (overcome) - ★4
- [ ] 寿命 (lifespan) - ★2
- [ ] 進歩 (progress) - ★2
- [ ] 責任 (responsibility) - ★1

**Issues Found:** ___________________________

---

### 6. Moderator Panel
**Test Steps:**
1. Find golden/yellow "司会者パネル" section (left panel)
2. See crown icon and "あなた" badge
3. Click header to collapse
4. Click header again to expand
5. Read info message (blue info box)
6. Click on first phrase "○○さん、どう思いますか？"
7. See "コピー済み" appear briefly
8. Try pasting (Ctrl+V) - phrase should paste
9. Click other phrases to test copy functionality
10. Scroll down to see "司会者の役割" tips

**Expected Result:**
- [ ] Golden/yellow gradient header
- [ ] Crown icon visible
- [ ] "あなた" badge shows you're moderator
- [ ] Expand/collapse works
- [ ] Info box explains functionality
- [ ] All 6 phrases visible
- [ ] Click copies to clipboard
- [ ] "コピー済み" confirmation appears
- [ ] Can actually paste the phrase
- [ ] Tips section at bottom
- [ ] 4 tips listed

**Moderator Phrases to Verify:**
- [ ] ○○さん、どう思いますか？
- [ ] みなさんはどう考えますか？
- [ ] 他の意見はありますか？
- [ ] それについて、もっと詳しく教えていただけますか？
- [ ] 次のポイントに移りましょうか。
- [ ] 時間が少し残っていますが、最後に何か言いたいことはありますか？

**Issues Found:** ___________________________

---

### 7. Conversation Idle Prompt ⚠️
**SPECIAL TESTING REQUIRED**

**Setup Steps (Use React DevTools):**
1. Press F12 to open DevTools
2. Click "Components" tab (React icon)
3. In component tree, find "SessionProvider"
4. In right panel, find hooks → State
5. Find "conversationIdle: false"
6. Double-click "false" and type "true"
7. Press Enter

**Test Steps:**
1. Idle prompt overlay appears
2. See dark semi-transparent background
3. See white modal in center
4. See bouncing chat icon (animated)
5. Read title: "会話のヒント"
6. Read subtitle
7. See conversation prompt text
8. Click right arrow (→)
9. See next prompt
10. Click left arrow (←)
11. See previous prompt
12. Click dots at bottom to jump
13. Verify all 4 prompts accessible

**Expected Result:**
- [ ] Overlay covers full screen
- [ ] Modal centered
- [ ] Chat icon bounces continuously
- [ ] Title and subtitle visible
- [ ] Prompt text readable (Japanese)
- [ ] Left/right arrows work
- [ ] 4 dots visible at bottom
- [ ] Active dot is highlighted (wider)
- [ ] Click dot jumps to that prompt
- [ ] Quote icons around text

**4 Prompts to Verify:**
- [ ] この技術が将来、日常生活にどのように影響すると思いますか？
- [ ] 倫理的な問題について、具体的な例を挙げて話し合ってみましょう。
- [ ] あなたの国では、この問題についてどのような議論がありますか？
- [ ] 科学者と一般市民の責任の違いについて考えてみましょう。

**To Close:**
- Set "conversationIdle" back to "false" in React DevTools

**Issues Found:** ___________________________

---

### 8. Shared Whiteboard
**Test Steps:**
1. Scroll to bottom of center panel
2. Find "共有ホワイトボード" section (cyan header)
3. See Excalidraw iframe loading
4. Try drawing/writing in the whiteboard
5. Test eraser tool
6. Click external link icon (top right)
7. Verify opens in new tab

**Expected Result:**
- [ ] Cyan/turquoise header
- [ ] Chalkboard icon visible
- [ ] Excalidraw loads in iframe
- [ ] Can draw/write inside
- [ ] Tools are accessible
- [ ] External link button works
- [ ] Opens in new browser tab
- [ ] Instructions at bottom visible

**Issues Found:** ___________________________

---

### 9. Hand-Raising Integration Test
**Test Steps:**
1. In participants list, raise hand (田中さん)
2. Verify changes:
   - 🙋 emoji appears
   - Background turns yellow
   - Border appears on left
3. In browser console, simulate others raising hands
4. Lower your hand
5. Verify returns to normal appearance

**Expected Result:**
- [ ] Hand raise button toggles state
- [ ] Visual feedback immediate
- [ ] Animation smooth
- [ ] Can raise/lower multiple times
- [ ] UI updates consistently

**Issues Found:** ___________________________

---

### 10. Responsive Design Testing
**Test Steps:**
1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test these sizes:
   - iPhone SE (375px width)
   - iPad (768px width)
   - Desktop (1920px width)
4. For each size:
   - Verify layout adapts
   - Check text readability
   - Test all interactive elements
   - Verify scrolling works

**Expected Result:**

**Desktop (>1200px):**
- [ ] 2-column layout
- [ ] Left panel: 350px width
- [ ] Center panel: remaining space
- [ ] All components visible

**Tablet (768-1200px):**
- [ ] 2-column layout (narrower)
- [ ] Proper spacing maintained
- [ ] Touch targets adequate

**Mobile (<768px):**
- [ ] Single column layout
- [ ] Components stacked vertically
- [ ] Left panel components appear first
- [ ] Center panel components below
- [ ] Font sizes readable
- [ ] Buttons large enough
- [ ] No horizontal scrolling

**Issues Found:** ___________________________

---

## 🎨 Visual/UI Quality Check

### Design Consistency
- [ ] Colors match theme (beige, burgundy, teal)
- [ ] Font weights consistent
- [ ] Spacing/padding uniform
- [ ] Border radius consistent (8-12px)
- [ ] Shadows appropriate
- [ ] Icons aligned properly

### Typography
- [ ] All Japanese text readable
- [ ] No character encoding issues
- [ ] Font sizes appropriate
- [ ] Line heights comfortable
- [ ] No text overflow/truncation

### Animations
- [ ] Smooth transitions
- [ ] No jarring movements
- [ ] Loading states handled
- [ ] Hover effects work
- [ ] Click feedback visible

### Overall Polish
- [ ] Professional appearance
- [ ] Intuitive interface
- [ ] Clear visual hierarchy
- [ ] Accessibility considerations
- [ ] No broken layouts

**Issues Found:** ___________________________

---

## 🐛 Bug Testing

### Console Errors
**Test Steps:**
1. Open console (F12 → Console tab)
2. Look for red error messages
3. Note any warnings
4. Test all features while watching console

**Expected Result:**
- [ ] No JavaScript errors
- [ ] No network errors
- [ ] Only npm deprecation warnings (acceptable)

**Issues Found:** ___________________________

### Browser Compatibility
**Test in:**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Edge

**Expected Result:**
- [ ] Works in all browsers
- [ ] Layout consistent
- [ ] Features functional

**Issues Found:** ___________________________

### Performance
- [ ] Page loads quickly (<2 seconds)
- [ ] Interactions responsive
- [ ] Timer counts smoothly
- [ ] No lag when scrolling
- [ ] No memory leaks visible

**Issues Found:** ___________________________

---

## 📸 Screenshot Collection

Please capture screenshots of:
- [ ] Session start screen
- [ ] Main dashboard (full view)
- [ ] Timer with controls
- [ ] Participant with hand raised
- [ ] Expanded vocabulary list
- [ ] Expanded moderator panel
- [ ] Idle prompt modal (all 4 prompts)
- [ ] Whiteboard section
- [ ] Mobile view (375px)
- [ ] Tablet view (768px)

**Screenshot Notes:** ___________________________

---

## ✅ Final Acceptance

### Functional Requirements
- [ ] All features implemented
- [ ] No critical bugs
- [ ] UI/UX acceptable
- [ ] Performance acceptable
- [ ] Mobile responsive

### Documentation Quality
- [ ] Testing guide clear
- [ ] Implementation summary helpful
- [ ] Code comments adequate
- [ ] File structure understandable

### Code Quality
- [ ] Components organized
- [ ] State management clear
- [ ] Styling consistent
- [ ] Easy to extend

---

## 🚦 Final Decision

**Status:** ⬜ Approved  ⬜ Approved with Changes  ⬜ Needs Revision

**Priority Changes Needed:**
1. _________________________________
2. _________________________________
3. _________________________________

**Nice-to-Have Improvements:**
1. _________________________________
2. _________________________________
3. _________________________________

**Additional Comments:**
_______________________________________________________________
_______________________________________________________________
_______________________________________________________________

---

## 📞 Next Steps

After review:
1. Discuss any issues found
2. Prioritize changes (if any)
3. Plan for production enhancements
4. Set timeline for backend integration

**Reviewer:** ___________________________
**Date:** ___________________________
**Time Spent on Review:** ___________________________

---

**Thank you for your thorough review! 🎉**
