# 日本語会話練習プラットフォーム (Japanese Conversation Practice Platform)

An interactive web application for group conversation practice in Japanese, designed for language learning sessions.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open automatically at `http://localhost:3000`

## ✨ Features

- **Session Management**: Start screen with participant list and session flow
- **Smart Timer**: Dynamic countdown based on participant count (10-30 minutes)
- **Participants Display**: Live participant list with moderator indicators
- **Topic Section**: Beautifully formatted discussion topics
- **Bonus Vocabulary**: Word list with difficulty ratings and scores
- **Moderator Panel**: Special tools and phrases for session moderator
- **Idle Prompts**: Suggested topics when conversation stalls
- **Shared Whiteboard**: Embedded collaborative drawing board
- **Hand-Raising**: Visual indicators for speaking requests
- **Responsive Design**: Works on desktop, tablet, and mobile

## 📚 Documentation

- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Complete feature overview
- **[TESTING_GUIDE.md](./TESTING_GUIDE.md)** - Comprehensive testing instructions
- **[IDLE_PROMPT_TEST.md](./IDLE_PROMPT_TEST.md)** - Special testing for idle prompt feature

## 🎯 Usage

1. **Start Session**: Click "セッションを開始" on the welcome screen
2. **Moderator**: One participant is automatically assigned as moderator (crowned)
3. **Timer**: Moderator starts the countdown timer
4. **Discuss**: Use the topic and vocabulary to guide conversation
5. **Hand Raise**: Click hand button to indicate you want to speak
6. **Whiteboard**: Draw ideas and notes collaboratively
7. **Moderator Tools**: Access conversation phrases and session controls

## 🧪 Testing

See [TESTING_GUIDE.md](./TESTING_GUIDE.md) for detailed testing instructions.

**Quick test:**
1. Run `npm run dev`
2. Click "セッションを開始"
3. Explore all features as moderator (田中さん)

## 🏗️ Architecture

- **React 16.14** with Hooks
- **Context API** for state management
- **Bootstrap 4** + Custom CSS
- **Webpack 5** for bundling
- **Font Awesome 6** for icons

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📝 Mock Data

Current demo uses 4 participants:
- 田中さん (Moderator)
- 佐藤さん
- 山田さん
- 鈴木さん

## 🔧 Development

```bash
# Install dependencies
npm install

# Development server with hot reload
npm run dev

# Build for production
npm run build

# Watch mode for development
npm run watch
```

## 🌟 Highlights

- ✅ All features fully implemented
- ✅ Clean, modern UI design
- ✅ Smooth animations
- ✅ Mobile-responsive
- ✅ Japanese language support
- ✅ Easy to extend

## 📞 Support

For testing issues, see troubleshooting sections in:
- [TESTING_GUIDE.md](./TESTING_GUIDE.md)
- [IDLE_PROMPT_TEST.md](./IDLE_PROMPT_TEST.md)

## 🚧 Future Enhancements

- WebSocket for real-time synchronization
- Backend API integration
- User authentication
- Automatic idle detection
- Score tracking system
- Session recording

---

**Ready for PM review and testing!** 🎉
