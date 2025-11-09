// Word-level lyrics data with timestamps
const lyricsData = [
    // Line 1: "I wanna rock right now"
    {
        time: 26.36,
        words: [
            { text: "I wanna", time: 26.36 },
            { text: "I wanna", time: 27.70 },
            { text: "rock right now", time: 29.10 }
        ]
    },
    // Line 2: "I wanna dance in the lights"
    {
        time: 30.92,
        words: [
            { text: "I wanna", time: 30.92 },
            { text: "da—", time: 31.25 },
            { text: "I wanna", time: 31.90 },
            { text: "dance", time: 32.45 },
            { text: "in the", time: 32.85 },
            { text: "lights", time: 33.55 },
        ]
    },
    // Line 3: "I wanna rock your body"
    {
        time: 34.75,
        words: [
            { text: "I wanna", time: 34.75 },
            { text: "ro—", time: 35.18 },
            { text: "I wanna", time: 35.67 },
            { text: "rock", time: 36.32 },
            { text: "your", time: 36.92 },
            { text: "body", time: 37.50 }
        ]
    },
    // Line 4: "I wanna go for a ride"
    {
        time: 38.70,
        words: [
            { text: "I wanna go", time: 38.70 },
            { text: "I wanna", time: 39.60 },
            { text: "go", time: 40.20 },
            { text: "for a ride", time: 40.70 }
        ]
    },
    // Line 5: "Hop in the music and rock your body right"
    {
        time: 42.41,
        words: [
            { text: "Hop in the music", time: 42.41 },
            { text: "and", time: 43.40 },
            { text: "rock", time: 43.90 },
            { text: "your", time: 44.40 },
            { text: "body", time: 44.80 },
            { text: "right", time: 45.60 }
        ]
    },
    // Line 6: "Rock that body, come on, come on, rock that body"
    {
        time: 46.05,
        words: [
            { text: "Rock", time: 46.05 },
            { text: "that body", time: 46.40 },
            { text: "come on", time: 46.90 },
            { text: "come on", time: 47.30 },
            { text: "rock that", time: 47.70 },
            { text: "body", time: 48.10 }
        ]
    },
    // Line 7: "Rock your body"
    {
        time: 49.00,
        words: [
            { text: "Rock", time: 49.00 },
            { text: "your body", time: 49.30 },
        ]
    },
    // Line 8: "Rock that body, come on, come on, rock that body"
    {
        time: 49.89,
        words: [
            { text: "Rock", time: 49.89 },
            { text: "that body", time: 50.24 },
            { text: "come on", time: 50.74 },
            { text: "come on", time: 51.14 },
            { text: "rock", time: 51.54 },
            { text: "that", time: 52.30 },
            { text: "body", time: 52.74 }
        ]
    },
    // Line 9: "Rock that body, come on, come on, rock that body"
    {
        time: 53.71,
        words: [
            { text: "Rock", time: 53.71 },
            { text: "that body", time: 54.06 },
            { text: "come on", time: 54.56 },
            { text: "come on", time: 54.96 },
            { text: "rock that body", time: 55.36 }
        ]
    },
    // Line 10: "Rock your body"
    {
        time: 56.65,
        words: [
            { text: "Rock", time: 56.65 },
            { text: "your", time: 56.95 },
            { text: "body", time: 57.15 }
        ]
    },
    {
        // [00:57.61]Rock that body, come on, come on, rock that body
        time: 57.61,
        words: [
            { text: "Rock", time: 57.61 },
            { text: "your", time: 57.91 },
            { text: "body", time: 58.21 },
            { text: "come on", time: 58.61 },
            { text: "come on", time: 59.01 },
            { text: "rock that body", time: 59.71 }
        ]
    }

];

// DOM Elements
const video = document.getElementById('video-player');
const lyricsDisplay = document.getElementById('lyrics-display');
// const spriteImage = document.getElementById('sprite-image');

let currentLyricIndex = -1;
let currentWordIndex = -1;

// Video time constraints
const START_TIME = 31;
const END_TIME = 57.71;

/* CHARACTER ANIMATION CODE - COMMENTED OUT
// Dynamically generate frame paths - loop through all possible frames
const frames = [];
for (let i = 1; i <= 48; i++) {
    frames.push(`animations/dan${i}.png`);
}
console.log(frames)

// Shuffle frames array for variety
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

let shuffledFrames = shuffleArray(frames);
let currentFrame = 0;
let animationInterval = null;
let positionInterval = null;
let characterCounter = 0; // Track number of characters created

// Screen positions for the dancing character - closer to center
const positions = [
    { top: '20%', left: '20%' },      // Top-left
    { top: '20%', right: '20%' },     // Top-right
    { bottom: '20%', left: '20%' },   // Bottom-left
    { bottom: '20%', right: '20%' },  // Bottom-right
    { top: '50%', left: '15%' },      // Middle-left
    { top: '50%', right: '15%' },     // Middle-right
    { top: '15%', left: '50%' },      // Top-center
    { bottom: '15%', left: '50%' }    // Bottom-center
];

let currentPosition = 0;
let lastWordTime = -1; // Track last word we created a character for
let wordCounter = 0; // Count words to spawn character every N words
let usedPositions = new Set(); // Track which positions are occupied
const MAX_CHARACTERS = 1; // Maximum characters on screen at once
*/

/* CHARACTER FUNCTIONS - COMMENTED OUT
// Create a new character at a random position
function createCharacter() {
    // Don't create if max characters reached
    const currentCharacters = document.querySelectorAll('.character-sprite');
    if (currentCharacters.length >= MAX_CHARACTERS) {
        // Remove the oldest character to make room
        const oldestChar = currentCharacters[0];
        if (oldestChar.dataset.intervalId) {
            clearInterval(parseInt(oldestChar.dataset.intervalId));
        }
        // Free up the old position
        if (oldestChar.dataset.positionIndex) {
            usedPositions.delete(parseInt(oldestChar.dataset.positionIndex));
        }
        oldestChar.remove();
    }
    
    // Get a shuffled copy of frames for this character
    const characterFrames = shuffleArray(frames);
    let frameIndex = 0;
    
    // Get an unused random position (different from currently used ones)
    let positionIndex;
    let attempts = 0;
    do {
        positionIndex = Math.floor(Math.random() * positions.length);
        attempts++;
    } while (usedPositions.has(positionIndex) && attempts < 20);
    
    // If couldn't find unused position after many attempts, pick any random one
    if (usedPositions.has(positionIndex)) {
        positionIndex = Math.floor(Math.random() * positions.length);
        // Remove from used positions if it was there
        usedPositions.delete(positionIndex);
    }
    
    usedPositions.add(positionIndex);
    const randomPos = positions[positionIndex];
    
    // Create new character element
    const character = document.createElement('div');
    character.className = 'character-sprite';
    character.style.position = 'fixed';
    character.style.width = '200px';
    character.style.height = '200px';
    character.style.imageRendering = 'pixelated';
    character.style.zIndex = '5';
    character.style.opacity = '0';
    character.style.transition = 'opacity 0.3s ease-in';
    character.dataset.positionIndex = positionIndex; // Store for cleanup
    
    // Apply random position
    if (randomPos.top) character.style.top = randomPos.top;
    if (randomPos.bottom) character.style.bottom = randomPos.bottom;
    if (randomPos.left) character.style.left = randomPos.left;
    if (randomPos.right) character.style.right = randomPos.right;
    
    // Create image
    const img = document.createElement('img');
    img.src = characterFrames[0];
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    
    character.appendChild(img);
    document.body.appendChild(character);
    
    // Fade in
    setTimeout(() => {
        character.style.opacity = '1';
    }, 10);
    
    // Animate this character's frames
    const animationInterval = setInterval(() => {
        frameIndex = (frameIndex + 1) % characterFrames.length;
        img.src = characterFrames[frameIndex];
        
        // Re-shuffle when cycle completes
        if (frameIndex === 0) {
            characterFrames.splice(0, characterFrames.length, ...shuffleArray(frames));
        }
    }, 300);
    
    // Store interval on the element so we can clear it later
    character.dataset.intervalId = animationInterval;
    
    characterCounter++;
}

// Clear all characters from screen
function clearAllCharacters() {
    const characters = document.querySelectorAll('.character-sprite');
    characters.forEach(char => {
        // Clear the animation interval for each character
        if (char.dataset.intervalId) {
            clearInterval(parseInt(char.dataset.intervalId));
        }
        char.remove();
    });
    characterCounter = 0;
    lastWordTime = -1;
    wordCounter = 0;
    usedPositions.clear(); // Clear used positions
}

// Start animation (clear previous characters and create initial character)
function startSpriteAnimation() {
    clearAllCharacters();
    // Create first character immediately when starting
    createCharacter();
}

function stopSpriteAnimation() {
    // Clear all characters when stopped
    clearAllCharacters();
}
END CHARACTER FUNCTIONS */

// Initialize video
function initializeVideo() {
    video.currentTime = START_TIME;

    // Prevent video from playing beyond END_TIME
    video.addEventListener('timeupdate', () => {
        if (video.currentTime >= END_TIME) {
            video.pause();
            video.currentTime = START_TIME;
            // stopSpriteAnimation(); // COMMENTED OUT
        }
        updateActiveLyric(video.currentTime);
    });

    // When video is loaded, set to start time
    video.addEventListener('loadedmetadata', () => {
        video.currentTime = START_TIME;
    });

    // Start/stop animation with video
    // video.addEventListener('play', startSpriteAnimation); // COMMENTED OUT
    // video.addEventListener('pause', stopSpriteAnimation); // COMMENTED OUT
}

// Display current word as large karaoke-style text with fade transition
function displayCurrentWord(text) {
    lyricsDisplay.innerHTML = `<span class="text-9xl font-bold text-white animate-fade-in" style="font-family: 'Fredoka One', cursive; letter-spacing: 0.05em;">${text}</span>`;
}

// Update active lyric with word-level synchronization
function updateActiveLyric(currentTime) {
    let activeLine = -1;
    let activeWord = -1;
    let currentWordText = '';

    // Find the current line and word based on time
    for (let i = 0; i < lyricsData.length; i++) {
        const line = lyricsData[i];

        if (currentTime >= line.time) {
            activeLine = i;

            // Find active word within this line
            for (let j = 0; j < line.words.length; j++) {
                if (currentTime >= line.words[j].time) {
                    activeWord = j;
                    currentWordText = line.words[j].text;
                } else {
                    break;
                }
            }
        } else {
            break;
        }
    }

    // Only update display if word has changed
    if (currentWordText && (activeLine !== currentLyricIndex || activeWord !== currentWordIndex)) {
        displayCurrentWord(currentWordText);
        
        /* CHARACTER CREATION - COMMENTED OUT
        // Create a new character every 3rd word (only if video is playing)
        if (!video.paused) {
            wordCounter++;
            if (wordCounter % 3 === 0) {
                createCharacter();
            }
        }
        */
    }

    currentLyricIndex = activeLine;
    currentWordIndex = activeWord;
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            break;
        case 'ArrowLeft':
            e.preventDefault();
            video.currentTime = Math.max(START_TIME, video.currentTime - 5);
            break;
        case 'ArrowRight':
            e.preventDefault();
            video.currentTime = Math.min(END_TIME, video.currentTime + 5);
            break;
    }
});

// Initialize on load
initializeVideo();
