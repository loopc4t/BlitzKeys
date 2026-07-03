// =====================================================
// DOM Elements
// =====================================================

const card = document.getElementById("card");

const options = document.getElementById("options");

const sentence = document.getElementById("sentence");

const input = document.getElementById("sentenceInput");

const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");

const score = document.getElementById("score");
const streak = document.getElementById("streak");
const speed = document.getElementById("speed");
const eflLevel = document.getElementById("eflLevel");
const level = document.getElementById("level");

const levelFlash = document.getElementById("levelFlash");
const levelBanner = document.getElementById("levelBanner");
const levelBannerLevel = document.getElementById("levelBannerLevel");
const levelBannerName = document.getElementById("levelBannerName");

const cardsButton = document.getElementById("cardsButton");
const cardsCount = document.getElementById("cardsCount");
const cardsModal = document.getElementById("cardsModal");
const cardsModalClose = document.getElementById("cardsModalClose");
const cardsGrid = document.getElementById("cardsGrid");

const aboutButton = document.getElementById("aboutButton");
const newGameButton = document.getElementById("newGameButton");
const aboutModal = document.getElementById("aboutModal");
const aboutModalClose = document.getElementById("aboutModalClose");
const aboutModalBackdrop = document.querySelector(".about-modal-backdrop");

function openAboutModal() {
  if (!aboutModal) return;
  aboutModal.classList.add("open");
  aboutModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  aboutModalClose?.focus();
}

function closeAboutModal() {
  if (!aboutModal) return;
  aboutModal.classList.remove("open");
  aboutModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  aboutButton?.focus();
}

aboutButton?.addEventListener("click", (event) => {
  event.preventDefault();
  openAboutModal();
});

newGameButton?.addEventListener("click", () => {
  startGame();
});

aboutModalClose?.addEventListener("click", closeAboutModal);
aboutModalBackdrop?.addEventListener("click", closeAboutModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && aboutModal?.classList.contains("open")) {
    closeAboutModal();
  }
});

const cardRevealOverlay = document.getElementById("cardRevealOverlay");
const cardRevealStage = document.getElementById("cardRevealStage");
const cardRevealCard = document.getElementById("cardRevealCard");
const cardRevealImage = document.getElementById("cardRevealImage");
const cardRevealName = document.getElementById("cardRevealName");
const cardRevealRarity = document.getElementById("cardRevealRarity");

// =====================================================
// Game State
// =====================================================

let deck = [];

let currentQuestion = null;

let questionIndex = 0;

let currentScore = 0;

let currentStreak = 0;

let startTime = null;

let lastSpeed = "—";

let currentLevel = 1;

let streakAbove40 = 0;

let streakAbove50 = 0;

let streakAbove60 = 0;

let streakAbove30 = 0;

let streakAbove10 = 0;

let currentEflLevel = "N/A";

// =====================================================
// Level Themes — palette swaps every SCORE_PER_LEVEL,
// Magic Jewelry (NES) style
// =====================================================

const SCORE_PER_LEVEL = 2000;

const LEVEL_THEMES = [
  {
    name: "Dark Forest",
    bg: "#080d08",
    panel: "#0d130d",
    cardBg: "#0d1620",
    crimson: "#b85dc0",
    blood: "#9b4da8",
    fog: "#a8b5a0",
    moss: "#2c5a2c",
    moonlight: "#d4dfc8",
    amber: "#ff8c00",
    muted: "#576657",
    red: "#e03030",
    green: "#4a9e5c",
    border: "rgba(192, 57, 43, 0.13)",
  },

  {
    name: "Neon Arcade",
    bg: "#05020a",
    panel: "#0d0518",
    cardBg: "#120a24",
    crimson: "#ff2ec4",
    blood: "#c026d3",
    fog: "#b8b5ff",
    moss: "#1e3a5f",
    moonlight: "#e0d4ff",
    amber: "#00e5ff",
    muted: "#4a4570",
    red: "#ff3860",
    green: "#39ff88",
    border: "rgba(255, 46, 196, 0.18)",
  },

  {
    name: "Molten Core",
    bg: "#0d0300",
    panel: "#1a0800",
    cardBg: "#210a05",
    crimson: "#ff5500",
    blood: "#cc2200",
    fog: "#ffcba8",
    moss: "#7a2c0a",
    moonlight: "#ffe0c2",
    amber: "#ffb700",
    muted: "#664433",
    red: "#ff2200",
    green: "#8fae4a",
    border: "rgba(255, 85, 0, 0.18)",
  },

  {
    name: "Frostbite",
    bg: "#030810",
    panel: "#071322",
    cardBg: "#0a1a2e",
    crimson: "#5dd0ff",
    blood: "#3a9fd6",
    fog: "#cfe8ff",
    moss: "#1e5a6e",
    moonlight: "#eaf6ff",
    amber: "#7fe0e0",
    muted: "#3d5a70",
    red: "#ff6b6b",
    green: "#4ae8c4",
    border: "rgba(93, 208, 255, 0.18)",
  },

  {
    name: "Toxic Swamp",
    bg: "#050a02",
    panel: "#0d1607",
    cardBg: "#101f0a",
    crimson: "#aef22e",
    blood: "#7fbf1f",
    fog: "#d4f0a8",
    moss: "#3f6b1a",
    moonlight: "#ecffd0",
    amber: "#e8ff4d",
    muted: "#4a5e33",
    red: "#ff5555",
    green: "#7fff4a",
    border: "rgba(174, 242, 46, 0.18)",
  },

  {
    name: "Royal Purple",
    bg: "#08040f",
    panel: "#140a24",
    cardBg: "#1c0f30",
    crimson: "#c084ff",
    blood: "#8b3fd6",
    fog: "#d8c8ff",
    moss: "#4a2c7a",
    moonlight: "#f0e6ff",
    amber: "#ffd700",
    muted: "#5a4a70",
    red: "#ff5599",
    green: "#7fd858",
    border: "rgba(192, 132, 255, 0.18)",
  },

  {
    name: "Blood Moon",
    bg: "#0a0202",
    panel: "#180505",
    cardBg: "#210808",
    crimson: "#ff1744",
    blood: "#b30021",
    fog: "#ffb8b8",
    moss: "#5a1414",
    moonlight: "#ffd6d6",
    amber: "#ff8a00",
    muted: "#6e3535",
    red: "#ff0033",
    green: "#c9d84a",
    border: "rgba(255, 23, 68, 0.2)",
  },

  {
    name: "Golden Hour",
    bg: "#0f0805",
    panel: "#1f120a",
    cardBg: "#291810",
    crimson: "#ffb84d",
    blood: "#e08b2e",
    fog: "#ffe0b8",
    moss: "#7a4a1a",
    moonlight: "#fff0d6",
    amber: "#ff6b35",
    muted: "#7a5a3a",
    red: "#ff4d4d",
    green: "#c9a24a",
    border: "rgba(255, 184, 77, 0.2)",
  },
];

// =====================================================
// Achievement Cards — city postcards unlocked by
// typing-speed milestones
// =====================================================

const ACHIEVEMENTS = [
  {
    id: "wpm40",
    name: "40 WPM Club",
    city: "Dublin",
    rarity: "common",
    image: "cards/dublin.jpg",
    condition: (ctx) => ctx.wpm >= 40,
  },

  {
    id: "wpm50",
    name: "50 WPM Club",
    city: "London",
    rarity: "common",
    image: "cards/london.jpg",
    condition: (ctx) => ctx.wpm >= 50,
  },

  {
    id: "wpm60",
    name: "60 WPM Club",
    city: "Los Angeles",
    rarity: "common",
    image: "cards/los_angeles.jpg",
    condition: (ctx) => ctx.wpm >= 60,
  },

  {
    id: "wpm70",
    name: "70 WPM Club",
    city: "New York City",
    rarity: "uncommon",
    image: "cards/new_york.jpg",
    condition: (ctx) => ctx.wpm >= 70,
  },

  {
    id: "streak5at40",
    name: "5 in a Row @ 40+",
    city: "Cape Town",
    rarity: "rare",
    image: "cards/cape_town.jpg",
    condition: (ctx) => ctx.streakAbove40 >= 5,
  },

  {
    id: "streak5at50",
    name: "5 in a Row @ 50+",
    city: "Sydney",
    rarity: "rare",
    image: "cards/sydney.jpg",
    condition: (ctx) => ctx.streakAbove50 >= 5,
  },

  {
    id: "streak10at40",
    name: "10 in a Row @ 40+",
    city: "Singapore",
    rarity: "rare",
    image: "cards/singapore.jpg",
    condition: (ctx) => ctx.streakAbove40 >= 10,
  },

  {
    id: "streak10at50",
    name: "10 in a Row @ 50+",
    city: "Auckland",
    rarity: "rare",
    image: "cards/auckland.jpg",
    condition: (ctx) => ctx.streakAbove50 >= 10,
  },

  {
    id: "streak10at60",
    name: "10 in a Row @ 60+",
    city: "Toronto",
    rarity: "legendary",
    image: "cards/toronto.jpg",
    condition: (ctx) => ctx.streakAbove60 >= 10,
  },
];

let unlockedCards = new Set();

let unlockQueue = [];

let unlockPopupShowing = false;

let revealTimeoutId = null;

// =====================================================
// Utility Functions
// =====================================================

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function normalizeQuotes(text) {
  return text
    .replace(/[\u2018\u2019\u02BC\u201A]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2026/g, "...");
}

function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getCorrectSentence() {
  return normalizeQuotes(
    currentQuestion.question.replace("_____", currentQuestion.answer),
  );
}

function calculateAccuracy(typed, correct) {
  if (typed.length === 0) return 100;

  let matches = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === correct[i]) {
      matches++;
    }
  }

  return Math.round((matches / typed.length) * 100);
}

function calculateWPM(characters, milliseconds) {
  if (milliseconds <= 0) return 0;

  return Math.round(characters / 5 / (milliseconds / 60000));
}

function calculateScore(wpm, accuracy) {
  let points = 50;

  if (wpm >= 90) points += 50;
  else if (wpm >= 80) points += 40;
  else if (wpm >= 70) points += 30;
  else if (wpm >= 60) points += 20;
  else if (wpm >= 50) points += 10;

  if (accuracy >= 95) points += 20;

  return points;
}

// =====================================================
// Leveling
// =====================================================

function levelForScore(currentScoreValue) {
  return Math.floor(currentScoreValue / SCORE_PER_LEVEL) + 1;
}

function themeForLevel(levelNumber) {
  return LEVEL_THEMES[(levelNumber - 1) % LEVEL_THEMES.length];
}

function applyTheme(levelNumber) {
  const theme = themeForLevel(levelNumber);

  const root = document.documentElement.style;

  root.setProperty("--bg", theme.bg);
  root.setProperty("--panel", theme.panel);
  root.setProperty("--card-bg", theme.cardBg);
  root.setProperty("--text", theme.moonlight);
  root.setProperty("--crimson", theme.crimson);
  root.setProperty("--blood", theme.blood);
  root.setProperty("--fog", theme.fog);
  root.setProperty("--moss", theme.moss);
  root.setProperty("--moonlight", theme.moonlight);
  root.setProperty("--amber", theme.amber);
  root.setProperty("--muted", theme.muted);
  root.setProperty("--red", theme.red);
  root.setProperty("--green", theme.green);
  root.setProperty("--border", theme.border);
}

function triggerLevelUp(newLevel) {
  const theme = themeForLevel(newLevel);

  levelBannerLevel.textContent = `LEVEL ${newLevel}`;
  levelBannerName.textContent = theme.name;

  levelFlash.classList.remove("show");
  void levelFlash.offsetWidth;
  levelFlash.classList.add("show");

  setTimeout(() => {
    applyTheme(newLevel);

    levelBanner.classList.add("show");
  }, 220);

  setTimeout(() => {
    levelBanner.classList.remove("show");
  }, 2400);
}

// =====================================================
// Achievements
// =====================================================

function checkAchievements(ctx) {
  // Only unlock one card per correct answer
  for (const achievement of ACHIEVEMENTS) {
    if (unlockedCards.has(achievement.id)) {
      continue;
    }

    if (!achievement.condition(ctx)) {
      continue;
    }

    unlockedCards.add(achievement.id);

    renderCardsGrid();

    unlockQueue.push(achievement);

    break; // Stop after unlocking one card
  }

  if (!unlockPopupShowing) {
    showNextCardUnlock();
  }
}

function showNextCardUnlock() {
  if (unlockQueue.length === 0) {
    unlockPopupShowing = false;

    cardRevealOverlay.classList.remove("show");

    return;
  }

  unlockPopupShowing = true;

  const achievement = unlockQueue.shift();

  cardRevealImage.src = achievement.image;
  cardRevealImage.alt = achievement.city;

  cardRevealName.textContent = achievement.city;

  cardRevealRarity.textContent = achievement.rarity;
  cardRevealRarity.className = `card-reveal-rarity tier-${achievement.rarity}`;

  cardRevealCard.className = `card-reveal-card rarity-${achievement.rarity}`;

  cardRevealOverlay.classList.add("show");

  cardRevealStage.classList.remove("pop");
  void cardRevealStage.offsetWidth;
  cardRevealStage.classList.add("pop");

  clearTimeout(revealTimeoutId);

  revealTimeoutId = setTimeout(advanceCardReveal, 3200);
}

function advanceCardReveal() {
  if (!unlockPopupShowing) {
    return;
  }

  clearTimeout(revealTimeoutId);

  cardRevealStage.classList.remove("pop");

  if (unlockQueue.length === 0) {
    cardRevealOverlay.classList.remove("show");

    unlockPopupShowing = false;

    return;
  }

  setTimeout(showNextCardUnlock, 350);
}

function renderCardsGrid() {
  cardsGrid.innerHTML = "";

  ACHIEVEMENTS.forEach((achievement) => {
    const unlocked = unlockedCards.has(achievement.id);

    const slot = document.createElement("div");

    slot.className =
      "card-slot" + (unlocked ? ` rarity-${achievement.rarity}` : " locked");

    const label = document.createElement("div");

    label.className = "card-slot-label";

    if (unlocked) {
      const img = document.createElement("img");

      img.src = achievement.image;
      img.alt = achievement.city;

      slot.appendChild(img);

      label.textContent = achievement.city;

      slot.addEventListener("mousemove", (event) => {
        const rect = slot.getBoundingClientRect();

        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;

        const rotateY = (px - 0.5) * 16;
        const rotateX = (0.5 - py) * 16;

        slot.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });

      slot.addEventListener("mouseleave", () => {
        slot.style.transform = "";
      });
    } else {
      label.textContent = achievement.name;
    }

    slot.appendChild(label);

    cardsGrid.appendChild(slot);
  });

  cardsCount.textContent = `${unlockedCards.size} / ${ACHIEVEMENTS.length}`;
}

// =====================================================
// UI Functions
// =====================================================

function updateProgress() {
  const intoLevel = currentScore % SCORE_PER_LEVEL;

  progressFill.style.width = `${(intoLevel / SCORE_PER_LEVEL) * 100}%`;

  progressLabel.textContent = `${intoLevel} / ${SCORE_PER_LEVEL} to Level ${currentLevel + 1}`;
}

function getEflLevelFromStreaks() {
  if (streakAbove50 >= 5) return "C1";
  if (streakAbove40 >= 5) return "B2";
  if (streakAbove30 >= 5) return "B1";
  if (streakAbove10 >= 5) return "A2";
  return "N/A";
}

function refreshEflLevel() {
  currentEflLevel = getEflLevelFromStreaks();

  if (eflLevel) {
    eflLevel.textContent = currentEflLevel;
  }
}

function updateStats(currentSpeed) {
  score.textContent = currentScore;

  level.textContent = currentLevel;

  streak.textContent = currentStreak > 0 ? `${currentStreak} 🔥` : "—";

  speed.textContent = currentSpeed !== undefined ? currentSpeed : lastSpeed;

  if (eflLevel) {
    eflLevel.textContent = currentEflLevel;
  }

  updateProgress();
}

function renderOptions() {
  options.innerHTML = currentQuestion.options.join(" • ");
}

function renderSentence() {
  sentence.innerHTML = escapeHTML(currentQuestion.question).replace(
    "_____",
    '<span class="blank"></span>',
  );
}

function clearInput() {
  input.value = "";

  input.style.borderColor = "";

  input.focus();
}

function showQuestion() {
  currentQuestion = deck[questionIndex];

  renderOptions();

  renderSentence();

  clearInput();

  startTime = null;

  updateStats();
}

function flash(correct) {
  card.classList.remove("correct", "wrong");

  void card.offsetWidth;

  card.classList.add(correct ? "correct" : "wrong");

  setTimeout(() => {
    card.classList.remove("correct", "wrong");
  }, 450);
}

// =====================================================
// Game Logic
// =====================================================

function checkAnswer() {
  const typed = normalizeQuotes(input.value.trim());

  const correctSentence = getCorrectSentence();

  const isCorrect = typed === correctSentence;

  if (isCorrect) {
    const elapsed = startTime === null ? 1 : Date.now() - startTime;

    const accuracyValue = calculateAccuracy(typed, correctSentence);

    const wpm = calculateWPM(correctSentence.length, elapsed);

    const points = calculateScore(wpm, accuracyValue);

    currentScore += points;
    currentStreak++;

    streakAbove40 = wpm >= 40 ? streakAbove40 + 1 : streakAbove40;
    streakAbove50 = wpm >= 50 ? streakAbove50 + 1 : streakAbove50;
    streakAbove60 = wpm >= 60 ? streakAbove60 + 1 : streakAbove60;
    streakAbove30 = wpm >= 30 ? streakAbove30 + 1 : streakAbove30;
    streakAbove10 = wpm >= 10 ? streakAbove10 + 1 : streakAbove10;

    refreshEflLevel();

    lastSpeed = wpm + " wpm";

    updateStats();

    checkAchievements({
      wpm,
      streakAbove40,
      streakAbove50,
      streakAbove60,
    });

    const newLevel = levelForScore(currentScore);

    if (newLevel > currentLevel) {
      currentLevel = newLevel;

      triggerLevelUp(currentLevel);

      updateStats();
    }
  } else {
    currentStreak = 0;

    refreshEflLevel();

    updateStats(lastSpeed);
  }

  flash(isCorrect);

  clearInput();

  if (!isCorrect) {
    return;
  }

  questionIndex++;

  if (questionIndex >= deck.length) {
    deck = shuffle(sentences);

    questionIndex = 0;
  }

  setTimeout(showQuestion, 500);
}

function clearSavedProgress() {
  try {
    localStorage.removeItem("blitzkeys_state");
  } catch (err) {
    console.warn("Could not clear saved state:", err);
  }
}

function startGame() {
  clearSavedProgress();

  deck = shuffle(sentences);

  questionIndex = 0;

  currentScore = 0;
  currentStreak = 0;
  currentLevel = 1;

  streakAbove40 = 0;
  streakAbove50 = 0;
  streakAbove60 = 0;
  streakAbove30 = 0;
  streakAbove10 = 0;
  currentEflLevel = "N/A";

  refreshEflLevel();

  unlockedCards = new Set();

  unlockQueue = [];

  unlockPopupShowing = false;

  input.disabled = false;

  lastSpeed = "—";

  applyTheme(currentLevel);

  renderCardsGrid();

  updateStats();

  showQuestion();
}

// =====================================================
// Event Listeners
// =====================================================

input.addEventListener("input", () => {
  if (startTime === null) {
    startTime = Date.now();
  }

  const typed = normalizeQuotes(input.value);

  const correctSentence = getCorrectSentence();

  // Clamp elapsed time so a near-instant first keystroke
  // can't produce a wildly inflated live WPM reading.
  const elapsed = Math.max(Date.now() - startTime, 150);

  const liveWpm = calculateWPM(typed.length, elapsed);

  updateStats(liveWpm + " wpm");

  input.style.borderColor = correctSentence.startsWith(typed)
    ? "var(--green)"
    : "var(--red)";
});

input.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  event.preventDefault();

  checkAnswer();
});

cardsButton.addEventListener("click", () => {
  cardsModal.classList.add("show");
});

cardsModalClose.addEventListener("click", () => {
  cardsModal.classList.remove("show");
});

cardsModal.addEventListener("click", (event) => {
  if (event.target === cardsModal) {
    cardsModal.classList.remove("show");
  }
});

cardRevealOverlay.addEventListener("click", () => {
  advanceCardReveal();
});

// =====================================================
// Initialization
// =====================================================

// =====================================================
// Persistence (save/restore)
// =====================================================

function saveState() {
  clearSavedProgress();
}

function loadState() {
  try {
    const raw = localStorage.getItem("blitzkeys_state");

    if (!raw) return false;

    const state = JSON.parse(raw);

    if (
      state.deckIndices &&
      Array.isArray(state.deckIndices) &&
      state.deckIndices.length > 0
    ) {
      deck = state.deckIndices.map((i) => sentences[i]).filter(Boolean);
    } else {
      deck = shuffle(sentences);
    }

    questionIndex =
      typeof state.questionIndex === "number" ? state.questionIndex : 0;

    currentScore =
      typeof state.currentScore === "number" ? state.currentScore : 0;
    currentStreak =
      typeof state.currentStreak === "number" ? state.currentStreak : 0;
    currentLevel =
      typeof state.currentLevel === "number"
        ? state.currentLevel
        : levelForScore(currentScore);

    streakAbove40 =
      typeof state.streakAbove40 === "number" ? state.streakAbove40 : 0;
    streakAbove50 =
      typeof state.streakAbove50 === "number" ? state.streakAbove50 : 0;
    streakAbove60 =
      typeof state.streakAbove60 === "number" ? state.streakAbove60 : 0;
    streakAbove30 =
      typeof state.streakAbove30 === "number" ? state.streakAbove30 : 0;
    streakAbove10 =
      typeof state.streakAbove10 === "number" ? state.streakAbove10 : 0;
    currentEflLevel = getEflLevelFromStreaks();

    unlockedCards = new Set(
      Array.isArray(state.unlockedCards) ? state.unlockedCards : [],
    );

    lastSpeed = state.lastSpeed || "—";

    input.disabled = false;

    applyTheme(currentLevel);

    renderCardsGrid();

    // restore input text if present
    if (state.inputValue) {
      input.value = state.inputValue;
    }

    updateStats();

    // make sure questionIndex is in bounds
    if (!deck || deck.length === 0) deck = shuffle(sentences);

    if (questionIndex >= deck.length) questionIndex = 0;

    showQuestion();

    return true;
  } catch (err) {
    console.warn("Could not load state:", err);

    return false;
  }
}

// Save state when the page is unloaded or hidden
window.addEventListener("beforeunload", saveState);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveState();
});

startGame();
