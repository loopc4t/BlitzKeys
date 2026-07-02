# ⚡ BlitzKeys

An interactive vocabulary practice application featuring active recall learning through fill-in-the-blank sentences. Master English vocabulary with engaging gamification, dynamic themes, and collectible cards.

## 🎮 Features

- **Active Recall Learning**: Fill in missing words from contextual sentences to reinforce vocabulary retention
- **Interactive Gameplay**:
  - 🔍 Find the missing word
  - ⌨️ Type the complete sentence
  - ↵ Press Enter to submit
- **Dynamic Theming**: 6+ visually distinct themes including Dark Forest, Neon Arcade, Molten Core, Frostbite, Toxic Swamp, and Royal Purple
- **Gamification Elements**:
  - Score tracking with leveling system
  - Streak counter for consecutive correct answers
  - Speed metrics for timed performance
  - Level progression every 2,000 points
- **Collectible Cards**: Unlock and view unique cards as you progress through the game
- **Progress Tracking**: Visual progress bar and statistics display
- **Smooth Animations**: NES-inspired palette swaps and polished transitions

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required

### How to Run

1. Open `index.html` in your web browser
2. Start playing immediately

## 📖 How to Play

1. **Read the Sentence**: A vocabulary sentence appears with one word missing
2. **Choose Your Answer**: Select from the provided options or type the word you think fits
3. **Complete the Sentence**: Type the entire sentence with the missing word filled in
4. **Submit**: Press Enter to check your answer
5. **Progress**: Earn points, build streaks, and unlock levels

## 📁 Project Structure

```
BlitzKeyes/
├── index.html          # Main HTML structure
├── script.js           # Game logic and state management
├── data.js             # Vocabulary questions and answers
├── styles.css          # Styling and theme definitions
├── cards/              # Collectible card images
│   ├── auckland.jpg
│   ├── cape_town.jpg
│   ├── dublin.jpg
│   ├── london.jpg
│   ├── los_angeles.jpg
│   ├── new_york.jpg
│   ├── singapore.jpg
│   ├── sydney.jpg
│   └── toronto.jpg
└── README.md           # This file
```

## 🎨 Themes

BlitzKeys features an immersive theme system that transforms the visual appearance every 2,000 points:

- **Dark Forest**: Deep greens and purples with moonlit aesthetics
- **Neon Arcade**: Cyberpunk vibes with hot pink and cyan
- **Molten Core**: Fiery oranges and deep reds
- **Frostbite**: Cool blues and icy whites
- **Toxic Swamp**: Luminous greens and acidic yellows
- **Royal Purple**: Elegant purples and mystical tones

## 🎯 Game Mechanics

- **Score System**: +100 points per correct answer, -0 for incorrect (encourages learning)
- **Levels**: Unlock new themes and visual effects as your score increases
- **Streaks**: Track consecutive correct answers for motivation
- **Speed Calculation**: Monitor how quickly you complete each sentence
- **Card Rewards**: Collect unique cards as you level up

## 🛠️ Technical Stack

- **HTML5**: Semantic structure and form elements
- **CSS3**: Advanced styling with CSS variables, gradients, and animations
- **JavaScript (Vanilla)**: Pure JS game logic without frameworks

## 📊 Vocabulary Content

The application includes a curated set of English vocabulary sentences focusing on:

- Common word usage
- Contextual meaning
- Synonym differentiation
- Real-world application

## 🔧 Customization

To add more vocabulary questions, edit `data.js` and add new sentence objects:

```javascript
{
  question: "Your sentence with _____ blank word",
  options: ["option1", "option2", "option3"],
  answer: "option1"
}
```

## 💡 Tips for Best Practice

- Practice regularly to build vocabulary retention
- Focus on understanding word usage in context
- Use the speed tracking to improve your response time
- Try to maintain long streaks for motivation
- Review challenging words by replaying levels

## 📱 Browser Compatibility

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support

## 📝 License

This project is created for educational purposes.

## 🤝 Contributing

Feel free to expand the vocabulary deck, add new themes, or improve the UI. To contribute:

1. Add more questions to `data.js`
2. Create new theme palettes in `script.js`
3. Enhance styling in `styles.css`

---

**Happy Learning! ⚡**
