# FarBird - Farcaster Mini App

A Flappy Bird clone built as a Farcaster Mini App.

## 🚀 Quick Start

1. **Install dependencies:**
```bash
   npm install
```

2. **Run locally:**
```bash
   npm run dev
```

3. **For Mini App testing, expose with ngrok:**
```bash
   npx ngrok http 3000
```

## ⚠️ IMPORTANT: Update Before Deploy

### Replace "yourdomain.com" with your actual domain in:

1. **index.html** (lines 8-9 and 12-14):
```html
   <meta name="fc:miniapp" content='{"version":"1","imageUrl":"https://YOURDOMAIN.com/og-image.png",...' />
   <meta property="og:image" content="https://YOURDOMAIN.com/og-image.png" />
```

2. **Your `.well-known/farcaster.json`**:
```json
   {
     "miniapp": {
       "iconUrl": "https://YOURDOMAIN.com/splash.png",
       "homeUrl": "https://YOURDOMAIN.com",
       "imageUrl": "https://YOURDOMAIN.com/og-image.png",
       "splashImageUrl": "https://YOURDOMAIN.com/splash.png"
     }
   }
```

## 🎨 Creating Images

### Quick Method:
1. Open `generate-images.html` in your browser
2. Click both buttons to download
3. Put images in your project root

### Manual Method:
- **og-image.png**: 1200x800px (3:2 ratio)
- **splash.png**: 200x200px

## 🧪 Testing

1. **Local Preview:**
```bash
   npm run dev
```

2. **Mini App Preview:**
   - Expose with ngrok: `npx ngrok http 3000`
   - Go to: https://farcaster.xyz/~/developers/mini-apps/preview
   - Enter your ngrok URL

3. **Test in Feed:**
   - Deploy to production
   - Share URL in a cast
   - Should show as rich embed

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Drag and drop your folder to Netlify

### GitHub Pages
1. Push to GitHub
2. Enable Pages in Settings
3. Deploy from main branch

## 🎮 Features

- ✅ Mini App SDK integration
- ✅ User authentication display
- ✅ Haptic feedback (mobile)
- ✅ Share score to Farcaster
- ✅ High score persistence
- ✅ Splash screen handling
- ✅ Safe area insets
- ✅ Responsive design

## 🐛 Troubleshooting

**Infinite loading screen?**
- Check console for errors
- Verify `sdk.actions.ready()` is called

**Images not showing?**
- Check URLs are correct
- Verify images are accessible via HTTPS
- Use PNG format

**Haptics not working?**
- Normal on web/desktop
- Test on Farcaster mobile app

## 📚 Resources

- [Mini Apps Docs](https://miniapps.farcaster.xyz)
- [Preview Tool](https://farcaster.xyz/~/developers/mini-apps/preview)
- [Developer Portal](https://farcaster.xyz/~/developers)

Happy building! 🚀