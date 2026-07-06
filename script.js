// =====================================================
// DOM Elements
// =====================================================

const card = document.getElementById("card");

const options = document.getElementById("options");

const sentence = document.getElementById("sentence");

const input = document.getElementById("sentenceInput");

const score = document.getElementById("score");
const streak = document.getElementById("streak");
const speed = document.getElementById("speed");
const eflLevel = document.getElementById("eflLevel");
const level = document.getElementById("level");

const levelFlash = document.getElementById("levelFlash");
const levelBanner = document.getElementById("levelBanner");
const levelBannerLevel = document.getElementById("levelBannerLevel");

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

let streakAbove70 = 0;

let streakAbove30 = 0;

let streakAbove10 = 0;

let currentEflLevel = "N/A";

// =====================================================
// Leveling — level up every SCORE_PER_LEVEL points
// (palette rotation removed; theme stays fixed now)
// =====================================================

const SCORE_PER_LEVEL = 1000;

const LEVEL_THEMES = [
  {
    name: "Hyrule Castle",
    bg: "#0a0a10",
    panel: "#121218",
    cardBg: "#181820",
    crimson: "#8fa3c9",
    blood: "#55628a",
    fog: "#c3c9d9",
    moss: "#3a4258",
    moonlight: "#e8ecf5",
    amber: "#c9a227",
    frame: "#5a5f70",
    muted: "#565c6e",
    red: "#e2503b",
    green: "#4fae5c",
    border: "rgba(143, 163, 201, 0.18)",
  },

  {
    name: "Hyrule Field",
    bg: "#0a1608",
    panel: "#142013",
    cardBg: "#1c2c18",
    crimson: "#f2c14e",
    blood: "#c99a2e",
    fog: "#d9e8c2",
    moss: "#4a7d2e",
    moonlight: "#f4f8e0",
    amber: "#c9a83a",
    frame: "#7a8a52",
    muted: "#5a6b3e",
    red: "#e2503b",
    green: "#7fc93a",
    border: "rgba(242, 193, 78, 0.2)",
  },

  {
    name: "Death Mountain",
    bg: "#170805",
    panel: "#260d08",
    cardBg: "#33120c",
    crimson: "#ff6a2e",
    blood: "#cc4416",
    fog: "#ffcbb0",
    moss: "#7a2c10",
    moonlight: "#ffe4cf",
    amber: "#d98a3a",
    frame: "#8a5a42",
    muted: "#6e4433",
    red: "#ff3b1f",
    green: "#c99a3a",
    border: "rgba(255, 106, 46, 0.2)",
  },

  {
    name: "Zora's Domain",
    bg: "#04141c",
    panel: "#082330",
    cardBg: "#0c2f40",
    crimson: "#4fd6ff",
    blood: "#2ea6cf",
    fog: "#c9f0ff",
    moss: "#1c5a6e",
    moonlight: "#e7faff",
    amber: "#5cc2d9",
    frame: "#4a6f7a",
    muted: "#356575",
    red: "#ff5f5f",
    green: "#4de0b0",
    border: "rgba(79, 214, 255, 0.2)",
  },

  {
    name: "Lost Woods",
    bg: "#0a1410",
    panel: "#101f18",
    cardBg: "#16281f",
    crimson: "#56e0a0",
    blood: "#2fae7a",
    fog: "#c8e0c2",
    moss: "#234a30",
    moonlight: "#e6f5df",
    amber: "#a3c94a",
    frame: "#47614f",
    muted: "#45614a",
    red: "#ff5555",
    green: "#7fe066",
    border: "rgba(86, 224, 160, 0.18)",
  },

  {
    name: "Ganon's Tower",
    bg: "#0c0208",
    panel: "#180510",
    cardBg: "#210818",
    crimson: "#ff2e6d",
    blood: "#b3003d",
    fog: "#ffb8d0",
    moss: "#5a1430",
    moonlight: "#ffd6e6",
    amber: "#d97a3a",
    frame: "#5a3f52",
    muted: "#6e3550",
    red: "#ff0044",
    green: "#8a4ad8",
    border: "rgba(255, 46, 109, 0.2)",
  },

  {
    name: "Gerudo Desert",
    bg: "#170a04",
    panel: "#241008",
    cardBg: "#30160c",
    crimson: "#ff6a3d",
    blood: "#cc4a1f",
    fog: "#f0c9ae",
    moss: "#7a3a1a",
    moonlight: "#ffe0c2",
    amber: "#d99a52",
    frame: "#8a704a",
    muted: "#7a4a3a",
    red: "#ff3b2e",
    green: "#c98a3a",
    border: "rgba(255, 106, 61, 0.2)",
  },

  {
    name: "Triforce Chamber",
    bg: "#120d02",
    panel: "#1f1704",
    cardBg: "#2b2006",
    crimson: "#ffd700",
    blood: "#e0a800",
    fog: "#fff0b8",
    moss: "#7a5a10",
    moonlight: "#fff8d6",
    amber: "#d9c25a",
    frame: "#8a7a4a",
    muted: "#7a6a3a",
    red: "#ff5540",
    green: "#8fd858",
    border: "rgba(255, 215, 0, 0.25)",
  },
];

// =====================================================
// Achievement Cards — city postcards unlocked by
// speed streak milestones
// =====================================================

const ACHIEVEMENTS = [
  {
    id: "streak40x5",
    name: "5x 40+ Streak",
    city: "Dublin",
    rarity: "common",
    image: "cards/dublin.jpg",
    condition: (ctx) =>
      ctx.streakAbove40 >= 5 ||
      ctx.streakAbove50 >= 3 ||
      ctx.streakAbove60 >= 2,
  },

  {
    id: "streak40x10",
    name: "10x 40+ Streak",
    city: "London",
    rarity: "common",
    image: "cards/london.jpg",
    condition: (ctx) =>
      ctx.streakAbove40 >= 10 ||
      ctx.streakAbove50 >= 5 ||
      ctx.streakAbove60 >= 3,
  },

  {
    id: "streak50x5",
    name: "5x 50+ Streak",
    city: "Los Angeles",
    rarity: "common",
    image: "cards/los_angeles.jpg",
    condition: (ctx) => ctx.streakAbove50 >= 5 || ctx.streakAbove60 >= 4,
  },

  {
    id: "streak50x10",
    name: "10x 50+ Streak",
    city: "New York City",
    rarity: "uncommon",
    image: "cards/new_york.jpg",
    condition: (ctx) => ctx.streakAbove50 >= 10 || ctx.streakAbove60 >= 5,
  },

  {
    id: "streak50x15",
    name: "15x 50+ Streak",
    city: "Cape Town",
    rarity: "rare",
    image: "cards/cape_town.jpg",
    condition: (ctx) => ctx.streakAbove50 >= 15 || ctx.streakAbove60 >= 6,
  },

  {
    id: "streak60x7",
    name: "7x 60+ Streak",
    city: "Sydney",
    rarity: "rare",
    image: "cards/sydney.jpg",
    condition: (ctx) => ctx.streakAbove60 >= 7 || ctx.streakAbove70 >= 3,
  },

  {
    id: "streak60x10",
    name: "10x 60+ Streak",
    city: "Singapore",
    rarity: "rare",
    image: "cards/singapore.jpg",
    condition: (ctx) => ctx.streakAbove60 >= 10 || ctx.streakAbove70 >= 4,
  },

  {
    id: "streak60x15",
    name: "15x 60+ Streak",
    city: "Auckland",
    rarity: "rare",
    image: "cards/auckland.jpg",
    condition: (ctx) => ctx.streakAbove60 >= 15 || ctx.streakAbove70 >= 5,
  },

  {
    id: "streak60x20",
    name: "20x 60+ Streak",
    city: "Toronto",
    rarity: "legendary",
    image: "cards/toronto.jpg",
    condition: (ctx) => ctx.streakAbove60 >= 20 || ctx.streakAbove70 >= 10,
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
  // Theme no longer changes with level — always the base Hyrule Castle palette.
  return LEVEL_THEMES[0];
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
  root.setProperty("--frame", theme.frame);
  root.setProperty("--muted", theme.muted);
  root.setProperty("--red", theme.red);
  root.setProperty("--green", theme.green);
  root.setProperty("--border", theme.border);
}

function triggerLevelUp(newLevel) {
  levelBannerLevel.textContent = `LEVEL ${newLevel}`;

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
  // Progress bar removed from the UI; level/score are shown in the stats bar.
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

    streakAbove40 = wpm >= 40 ? streakAbove40 + 1 : 0;
    streakAbove50 = wpm >= 50 ? streakAbove50 + 1 : 0;
    streakAbove60 = wpm >= 60 ? streakAbove60 + 1 : 0;
    streakAbove70 = wpm >= 70 ? streakAbove70 + 1 : 0;
    streakAbove30 = wpm >= 30 ? streakAbove30 + 1 : 0;
    streakAbove10 = wpm >= 10 ? streakAbove10 + 1 : 0;

    refreshEflLevel();

    lastSpeed = wpm + " wpm";

    updateStats();

    checkAchievements({
      wpm,
      streakAbove40,
      streakAbove50,
      streakAbove60,
      streakAbove70,
    });

    const newLevel = levelForScore(currentScore);

    if (newLevel > currentLevel) {
      currentLevel = newLevel;

      triggerLevelUp(currentLevel);

      updateStats();
    }
  } else {
    currentStreak = 0;

    streakAbove40 = 0;
    streakAbove50 = 0;
    streakAbove60 = 0;
    streakAbove70 = 0;
    streakAbove30 = 0;
    streakAbove10 = 0;

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
  streakAbove70 = 0;
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
    streakAbove70 =
      typeof state.streakAbove70 === "number" ? state.streakAbove70 : 0;
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
