function setupAudioPlayer() {
  // Função para carregar o script do WaveSurfer dinamicamente
  function loadWaveSurferScript(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/blazysoftware/cdn@main/wavesurfer.min.js';
    script.onload = callback;
    document.head.appendChild(script);
  }

  // Função para aplicar CSS no Shadow DOM do typebot-standard
  function injectCSSIntoTypebotShadow() {
    const style = document.createElement('style');
    style.innerHTML = `
      .player {
          margin: 10px;
          position: relative;
      }

      .track {
          display: flex;
          align-items: center;
          margin: 10px;
          position: relative;
          width: 260px;
      }

      .track .controls {
          width: 20px;
          margin-right: 10px;
          margin-top: 6px;
          cursor: pointer;
      }

      .track .controls button {
          background: transparent;
          border: 0;
          cursor: pointer;    
      }

      .track .controls button svg {
          display: none;
          pointer-events: none;
      }

      .track .controls button[data-state="play"] svg.pause {
          display: block;
      }

      .track .controls button[data-state="pause"] svg.play {
          display: block;
      }

      .track .timeline {
          flex: 1;
          width: 100%;
          margin-left: 10px;
          margin-right: 10px;
      }

      .track .icon {
          position: relative; 
          margin-left: 10px;   
      }

      .track .icon svg {
          position: absolute;
          bottom: 0;
          left: -15px;
          pointer-events: none;
          user-select: none;
      }

      .track .avatar {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
      }

      .tempo {
          position: absolute;
          left: 42px;
          top: 45px;
          font-size: 13px;
          color: grey;
          animation-name: mostrar;
          animation-duration: 4s;
      }

      wave {
          overflow: hidden !important;
      }
    `;

    const typebotElement = document.querySelector('typebot-standard');
    if (typebotElement && typebotElement.shadowRoot) {
      typebotElement.shadowRoot.appendChild(style);
    }
  }

  // Função para observar a adição de novos elementos <audio>
  function observeShadowDOMForAudio() {
    const typebotElement = document.querySelector('typebot-standard');
    if (!typebotElement?.shadowRoot) return;

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.tagName === 'AUDIO') {
            createPlayer(node, typebotElement.shadowRoot);
          }
        });
      });
    });

    observer.observe(typebotElement.shadowRoot, {
      childList: true,
      subtree: true
    });
  }

  // Função principal para criar o player
  function createPlayer(audioElement, shadowRoot) {
    if (audioElement.dataset.hasPlayer) return;

    const container = document.createElement('div');
    container.classList.add('player');
    const waveformId = `waveform-${Math.random().toString(36).slice(2, 9)}`;

    container.innerHTML = `
      <div class="track">
        <div class="controls">
          <button data-state="play">
            <svg viewBox="0 0 34 34" height="34" width="34" class="play">
              <path fill="#858a8d" d="M8.5,8.7c0-1.7,1.2-2.4,2.6-1.5l14.4,8.3c1.4,0.8,1.4,2.2,0,3l-14.4,8.3 c-1.4,0.8-2.6,0.2-2.6-1.5V8.7z"/>
            </svg>
            <svg viewBox="0 0 34 34" height="34" width="34" class="pause">
              <path fill="#858a8d" d="M9.2,25c0,0.5,0.4,1,0.9,1h3.6c0.5,0,0.9-0.4,0.9-1V9c0-0.5-0.4-0.9-0.9-0.9h-3.6 C9.7,8,9.2,8.4,9.2,9V25z M20.2,8c-0.5,0-1,0.4-1,0.9V25c0,0.5,0.4,1,1,1h3.6c0.5,0,1-0.4,1-1V9c0-0.5-0.4-0.9-1-0.9 C23.8,8,20.2,8,20.2,8z"/>
            </svg>
            <div class="tempo">
              <span class="time">0:00</span>
              <span class="duration">0:00</span>
            </div>
          </button>
        </div>
        <div class="timeline" id="${waveformId}"></div>
        <div class="icon">
          <svg width="30px" height="30px" viewBox="0 0 100 100">
            <path fill="#48d44f" d="M75.46,49.16h0.003v-0.098c0-0.006,0-0.013,0-0.019h0V34.787c0-2.088-1.693-3.781-3.782-3.781   c-2.088,0-3.783,1.693-3.783,3.781v14.256c0,9.885-8.013,17.897-17.898,17.897s-17.898-8.013-17.898-17.897h0V34.787   c0-2.088-1.693-3.781-3.782-3.781c-2.088,0-3.783,1.693-3.783,3.781V49.16h0.003c0.058,12.724,9.447,23.243,21.678,25.065v5.438   H32.839v0.003c-2.074,0.018-3.75,1.701-3.75,3.779c0,2.078,1.676,3.761,3.75,3.779v0.003h34.29l0,0   c2.089,0,3.782-1.693,3.782-3.782c0-2.089-1.693-3.782-3.782-3.782l0,0H53.782v-5.438C66.013,72.403,75.403,61.884,75.46,49.16z"/>
            <path fill="#48d44f" d="M37.186,48.941c0,7.088,5.745,12.833,12.833,12.833c7.087,0,12.831-5.746,12.831-12.833   c0-0.096-0.012-0.188-0.014-0.283h0.053V25.322h-0.053c-0.153-6.955-5.826-12.549-12.817-12.549   c-6.992,0-12.666,5.594-12.819,12.549h-0.052v23.336h0.052C37.199,48.753,37.186,48.845,37.186,48.941z"/>
          </svg>
          <img class="avatar" src="${var_avatar}" alt="${var_nome}">
        </div>
      </div>
    `;

    const hostBubble = audioElement.closest('.typebot-host-bubble');
    if (hostBubble) {
      hostBubble.prepend(container);
      initializeWaveSurfer(audioElement, container, waveformId);
      audioElement.dataset.hasPlayer = true;
      audioElement.remove();
    }
  }

  function initializeWaveSurfer(audioElement, container, waveformId) {
    const wavesurfer = WaveSurfer.create({
      container: `#${waveformId}`,
      waveColor: "#ddd",
      progressColor: "#25D366",
      height: 25,
      barWidth: 2,
      cursorWidth: 15,
      backend: "MediaElement",
      responsive: true
    });

    wavesurfer.load(audioElement.src);
    setupPlayerControls(wavesurfer, container);
  }

  function setupPlayerControls(wavesurfer, container) {
    const playPauseBtn = container.querySelector('button');
    const timeEl = container.querySelector('.time');
    const durationEl = container.querySelector('.duration');
    let playState = false;

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const secondsRemainder = Math.round(seconds) % 60;
      return `${minutes}:${secondsRemainder.toString().padStart(2, '0')}`;
    };

    wavesurfer.on('ready', () => {
      durationEl.textContent = formatTime(wavesurfer.getDuration());
    });

    wavesurfer.on('audioprocess', () => {
      timeEl.textContent = formatTime(wavesurfer.getCurrentTime());
    });

    wavesurfer.on('finish', () => {
      playState = false;
      updateButtonState();
    });

    playPauseBtn.addEventListener('click', () => {
      playState = !playState;
      playState ? wavesurfer.play() : wavesurfer.pause();
      updateButtonState();
    });

    function updateButtonState() {
      const playIcon = container.querySelector('.play');
      const pauseIcon = container.querySelector('.pause');
      playIcon.style.display = playState ? 'none' : 'block';
      pauseIcon.style.display = playState ? 'block' : 'none';
      durationEl.style.display = playState ? 'none' : 'block';
      timeEl.style.display = playState ? 'block' : 'none';
    }
  }

  // Inicialização
  injectCSSIntoTypebotShadow();
  loadWaveSurferScript(observeShadowDOMForAudio);
}

// Uso
setupAudioPlayer();