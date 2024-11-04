// Header background on scroll

window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) { // Y Radius value when the header-scrolled class appears
      header.classList.add('header-scrolled');
  } else {
      header.classList.remove('header-scrolled');
  }
});

// End of Header background on scroll 

// Drum Sound Strategies

class DrumStrategy {
  playSound() {
      throw new Error("This method should be overridden!");
  }
}

class WDrum extends DrumStrategy {
  playSound() {
      const audio = new Audio('sounds/crash.mp3');
      audio.play();
  }
}

class EDrum extends DrumStrategy {
  playSound() {
      const audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
  }
}

class RDrum extends DrumStrategy {
  playSound() {
      const audio = new Audio('sounds/snare.mp3');
      audio.play();
  }
}

class IDrum extends DrumStrategy {
  playSound() {
      const audio = new Audio('sounds/hi-hat.mp3');
      audio.play();
  }
}

class ODrum extends DrumStrategy {
  playSound() {
      const audio = new Audio('sounds/tom-2.mp3');
      audio.play();
  }
}

class PDrum extends DrumStrategy {
  playSound() {
      const audio = new Audio('sounds/tom-3.mp3');
      audio.play();
  }
}

// Drum Context
class DrumContext {
  constructor() {
      this.drumStrategy = null;
  }

  setStrategy(drumStrategy) {
      this.drumStrategy = drumStrategy;
  }

  playSound() {
      this.drumStrategy.playSound();
  }
}

// Mapping keys to strategies and buttons

const drumContext = new DrumContext();
const drumStrategies = {
  'a': new WDrum(),
  's': new EDrum(),
  'd': new RDrum(),
  'j': new IDrum(),
  'k': new ODrum(),
  'l': new PDrum(),
};

// Map keys to button elements
const drumButtons = {
  'a': document.querySelector('.a-drum'),
  's': document.querySelector('.s-drum'),
  'd': document.querySelector('.d-drum'),
  'j': document.querySelector('.j-drum'),
  'k': document.querySelector('.k-drum'),
  'l': document.querySelector('.l-drum'),
};

// Function to add the active class and play sound
function activateDrum(key) {
  const button = drumButtons[key];
  if (button && drumStrategies[key]) {
      // Set strategy and play sound
      drumContext.setStrategy(drumStrategies[key]);
      drumContext.playSound();

      // Add active class to button
      button.classList.add('active');

      // Remove active class after a short delay
      setTimeout(() => {
          button.classList.remove('active');
      }, 100);
  }
}

// Event listener for button clicks
document.querySelectorAll('.drum').forEach(button => {
  button.addEventListener('click', () => {
      const key = button.classList[1].charAt(0); // Get the key based on the class name
      activateDrum(key);
  });
});

// Event listener for key presses
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  activateDrum(key);
});

