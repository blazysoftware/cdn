function setupAudioPlayer() {
  // Carregar WaveSurfer.js
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/blazysoftware/cdn@main/wavesurfer.min.js';
  document.head.appendChild(script);

  // Estilos básicos
  const style = document.createElement('style');
  style.textContent = `
    .audio-player {
      margin: 15px;
      padding: 10px;
      background: #f5f5f5;
      border-radius: 8px;
    }

    .waveform {
      height: 60px;
      margin: 10px 0;
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .play-btn {
      background: #25D366;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .time {
      font-size: 14px;
      color: #666;
    }
  `;
  document.head.appendChild(style);

  // Observar alterações no DOM
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.tagName === 'AUDIO') {
          createAudioPlayer(node);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Criar player customizado
  function createAudioPlayer(audioElement) {
    const container = document.createElement('div');
    container.className = 'audio-player';
    
    container.innerHTML = `
      <div class="waveform"></div>
      <div class="controls">
        <button class="play-btn">▶</button>
        <span class="time">0:00 / 0:00</span>
      </div>
    `;

    const hostBubble = audioElement.closest('.typebot-host-bubble');
    if (hostBubble) {
      hostBubble.prepend(container);
      initWaveSurfer(container, audioElement);
      audioElement.remove();
    }
  }

  // Inicializar WaveSurfer
  function initWaveSurfer(container, audioElement) {
    const wavesurfer = WaveSurfer.create({
      container: container.querySelector('.waveform'),
      waveColor: '#ddd',
      progressColor: '#25D366',
      height: 60,
      barWidth: 2,
      cursorWidth: 0,
      backend: 'MediaElement'
    });

    wavesurfer.load(audioElement.src);
    setupControls(wavesurfer, container);
  }

  // Configurar controles
  function setupControls(wavesurfer, container) {
    const playBtn = container.querySelector('.play-btn');
    const time = container.querySelector('.time');

    wavesurfer.on('ready', () => {
      const duration = formatTime(wavesurfer.getDuration());
      time.textContent = `0:00 / ${duration}`;
    });

    wavesurfer.on('audioprocess', () => {
      const current = formatTime(wavesurfer.getCurrentTime());
      const duration = formatTime(wavesurfer.getDuration());
      time.textContent = `${current} / ${duration}`;
    });

    playBtn.addEventListener('click', () => {
      wavesurfer.playPause();
      playBtn.textContent = wavesurfer.isPlaying() ? '⏸' : '▶';
    });
  }

  // Formatar tempo
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemainder = Math.floor(seconds % 60);
    return `${minutes}:${secondsRemainder.toString().padStart(2, '0')}`;
  }
}

// Inicializar
setupAudioPlayer();
