// ── DATA ──────────────────────────────────────────────
const artists = [
  {
    id: 1,
    nameKr: '장원',
    nameEn: 'Jang Won',
    titleKr: '시간의 리듬',
    titleEn: 'Rhythm of Time',
    medium: 'Zine 및 만화책',
    mediumEn: 'Zine and comic book',
    size: '140×210 mm',
    image: 'image7.jpg',
    docent: 'Docent1.mp3',
    descKr: '본 작업은 반복되는 하루를 따라가며 시간의 흐름과 감정의 변화를 시각적 서사로 표현한 작업입니다. 아침부터 밤까지 이어지는 장면의 변화를 통해 서로 다른 시간의 감각과 피로의 누적을 보여주고자 하였습니다. 익숙하게 반복되는 일상 속에서도 시간은 결코 동일하게 흐르지 않으며, 순간마다 다른 감정과 분위기를 만들어 냅니다. 또한 만화책 형식을 활용해 시간의 흐름을 연속적으로 보여주고, 관람자가 자신의 일상과 연결 지어 공감할 수 있도록 구성하였습니다. 이를 통해 평범한 하루 속 시간의 리듬과 감정의 흔적을 되돌아보게 하고자 하였습니다.',
    descEn: 'This work traces the arc of a recurring day, rendering the passage of time and shifting emotions as a visual narrative. Scenes unfolding from morning to night convey the different qualities of each hour and the slow accumulation of fatigue. Even within a familiar routine, time never flows the same way twice—each moment carries its own mood. Using the comic book format to show this passage continuously, the work invites viewers to connect it to their own daily lives and reflect on the rhythms and emotional traces of an ordinary day.',
  },
  {
    id: 2,
    nameKr: '권성욱',
    nameEn: 'Kwon Seong-wook',
    titleKr: '그때 그 잔상',
    titleEn: 'The Afterimage of That Moment',
    medium: '3D 모델링을 통한 AI 영상',
    mediumEn: 'AI video with 3D modeling',
    size: '1920×1080 px',
    image: 'image4.jpg',
    docent: 'Docent2.mp3',
    descKr: '본 작업은 오토바이를 타던 시절에 경험한 속도감과 스쳐 지나가던 풍경의 기억을 영상으로 재구성한 작업입니다. 오토바이를 타고 이동하는 순간에만 느낄 수 있는 감각과 시각적 인상을 기록하고자 하였으며, 빠르게 흘러가는 풍경 속에 남겨진 잔상을 화면에 담아내고자 하였습니다. 작품에 등장하는 오토바이는 직접 모델링하였으며, 이후 AI 기술을 활용하여 영상의 이미지를 확장하고 완성하였습니다.',
    descEn: 'This work reconstructs through video the memories of speed and fleeting scenery from the artist\'s days riding a motorcycle. It seeks to preserve the sensations and afterimages unique to that experience—landscapes rushing past and dissolving from view. The motorcycle was modeled by the artist, with AI used to expand and complete the imagery.',
  },
  {
    id: 3,
    nameKr: '안서영',
    nameEn: 'Ahn Seo-yeong',
    titleKr: '생성의 장',
    titleEn: 'Field of Becoming',
    medium: '식물 염료 수채화 아트북',
    mediumEn: 'Plant-Dye Watercolor Artbook',
    size: '1450×600 mm',
    image: 'image3.jpg',
    docent: 'Docent3.mp3',
    descKr: '본 작업은 식물을 통해 존재를 끊임없이 생성되고 변화하는 과정으로 바라봅니다. 같은 식물이라도 시점과 환경, 시간에 따라 전혀 다른 색과 형태를 드러내며 하나의 고정된 이미지로 환원되지 않습니다. 지그재그 구조의 수채화 진(zine)은 페이지마다 변화하는 식물의 모습을 보여 주며, 펼쳐졌을 때는 하나의 꽃으로 연결됩니다. 또한 직접 제작한 식물성 수채 물감의 우연한 색 변화와 번짐은 생성과 공존의 흐름을 시각적으로 담아냅니다. 이를 통해 존재가 계속해서 피어나는 과정 자체를 이야기하고자 하였습니다.',
    descEn: 'This work uses plants as a lens through which existence is seen as a process of continuous becoming. The same plant reveals entirely different colors and forms depending on perspective, environment, and time—never reducible to a single fixed image. A zigzag-structured watercolor zine shows the plant in its many changing states, connecting into a single flower when fully unfolded. Accidental shifts in color and bleeding of hand-made botanical pigments further express the flow of becoming and coexistence.',
  },
  {
    id: 4,
    nameKr: '권지윤',
    nameEn: 'Kwon Ji-yoon',
    titleKr: '나를 움직이게 하는 힘',
    titleEn: 'Driving Force',
    medium: '3D 영상',
    mediumEn: '3D animation',
    size: '1920×1080 px',
    image: 'image6.jpg',
    docent: 'Docent4.mp3',
    descKr: '본 작업은 인간을 움직이게 하고 살아가게 하는 근본적인 힘인 \'원동력\'을 주제로 합니다. 작가의 원동력인 불안, 욕망, 책임감, 희망 등 다양한 감정을 자신만의 방식으로 해석하여 표현하였습니다. 이를 통해 내면의 한계를 깨고 새로운 세계로 도약하는 의미를 담고자 하였습니다. 또한 때로는 무겁고 버거운 감정들조차 앞으로 나아가게 하는 힘이 될 수 있음을 이야기하며, 성장과 변화의 과정 속에서 발견한 자신만의 원동력과 그 의미를 담아내고자 하였습니다.',
    descEn: 'This work takes "motivation"—the fundamental force that drives people to act and live—as its subject. The artist gives form to the emotions that fuel her own drive: anxiety, desire, responsibility, and hope. The work speaks to breaking through inner limits and leaping into new territory, and reflects on how even the heaviest emotions can become the force that moves us forward.',
  },
  {
    id: 5,
    nameKr: '이은영',
    nameEn: 'Lee Eun-young',
    titleKr: 'Hang On!',
    titleEn: 'Hang On!',
    medium: '행거, 옷걸이, 아두이노 등 혼합 매체 설치',
    mediumEn: 'Hanger, coat hooks, Arduino, mixed media installation',
    size: '1400×250 mm',
    image: 'image2.jpg',
    docent: 'Docent5.mp3',
    descKr: '본 작업은 \'옷 걸기\'라는 일상적인 행위를 소리를 발생시키는 인터페이스로 전환한 인터랙티브 사운드 설치 작업입니다. 이 작업은 \'분해와 분석\'이라는 탐구에서 출발하였으며, 음악을 드럼·베이스·보컬 등 개별 사운드로 분해하고 음악이 어떤 행위와 맥락 속에서 관람자에게 낯설게 다가올 수 있는지를 분석하여 그 구조를 물리적 공간에 펼쳐 놓았습니다. 관람자의 동작은 하나의 덩어리처럼 들리던 음악 속 사운드를 분해하고 재조립하며, 각 소리를 독립적으로 인식하도록 만듭니다. 이를 통해 음악을 단순히 흘려듣는 것이 아니라 직접 탐색하고 구성하는 새로운 감상 방식을 제안하고자 하였습니다.',
    descEn: 'This interactive sound installation transforms the everyday act of hanging clothes into a sound-generating interface. Starting from an inquiry into deconstruction and analysis, the work breaks music into individual layers—drums, bass, vocals—and maps that structure onto a physical space. Viewers\' movements disassemble and reassemble sounds that would normally be heard as one, allowing each layer to be perceived on its own. The work proposes a new way of engaging with music: not as passive listening, but as active exploration.',
  },
  {
    id: 6,
    nameKr: '주지디',
    nameEn: 'Joo Ji-di',
    titleKr: '모호한 자아',
    titleEn: 'Ambiguous Self',
    medium: '영상 및 평면 혼합',
    mediumEn: 'Mixed media (video and print)',
    size: '210×297 mm',
    image: 'image5.jpg',
    docent: 'Docent6.mp3',
    descKr: '본 작업은 성장 과정에서 형성되는 자아와 외부 시선의 관계를 탐구한 작업입니다. 타인의 기대와 평가 속에서 자아는 끊임없이 형성되고 변화하며, 동시에 점차 모호해집니다. 작품은 개인의 경험을 바탕으로 애니메이션과 레이어 작업을 활용하여 다양한 감정과 정체성이 겹쳐지는 모습을 표현하였습니다. 이를 통해 성장 과정에서 경험하는 자아에 대한 혼란과 탐색의 과정을 담아내고자 하였습니다.',
    descEn: 'This work explores the relationship between the self and the external gaze as it forms through the process of growing up. Shaped by others\' expectations and judgments, the self is continually constructed and transformed—and gradually grows more uncertain. Using animation and layering techniques drawn from personal experience, the work expresses the overlapping of different emotions and identities, capturing the confusion and ongoing search for self that define the experience of growing up.',
  },
  {
    id: 7,
    nameKr: '최수아',
    nameEn: 'Choi Su-a',
    titleKr: '빛과 그림자 탐구',
    titleEn: 'Exploring Light and Shadow',
    medium: '영상 및 평면 혼합',
    mediumEn: 'Mixed media (video and print)',
    size: '210×297 mm',
    image: 'image1.jpg',
    docent: 'Docent7.mp3',
    descKr: '본 작업은 빛이 재료와 만나는 순간에 나타나는 비고정적 이미지를 수집한 아카이브입니다. 구겨지고 비틀린 표면은 빛을 일정하게 반사하는 대신 사방으로 분산시키며 예측 불가능한 풍경을 만들어 냅니다. 빛의 방향과 오브제의 형태, 관람자의 위치에 따라 이미지는 끊임없이 변화하며 고정된 실체를 갖지 않습니다. 작가는 변화의 결과를 보여주기보다 일렁이는 상태 자체를 경험할 수 있도록 공간을 구성하였습니다. 관람자는 오브제 주변을 이동하며 이미지가 특정 대상에 머무는 것이 아니라 유동적으로 형성되는 하나의 현상임을 감각하게 됩니다.',
    descEn: 'This work is an archive of unstable images captured at the moment light meets material. Crumpled and twisted surfaces scatter light unpredictably rather than reflecting it evenly. As the angle of light, the shape of the object, and the viewer\'s position change, so does the image—never settling into a fixed form. The space is arranged not to present the results of change, but to let viewers experience the state of flux itself. Moving around the objects, they come to sense the image not as something fixed, but as a fluid, ever-forming phenomenon.',
  },
];

// SVG icons per artwork type
const icons = [
  // 1 zine/book
  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 3h16v18H4zm2 2v14h12V5z M7 8h10v2H7zm0 4h10v2H7zm0 4h6v2H7z"/></svg>`,
  // 2 video/film
  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4h20v16H2zm2 2v12h16V6zm4 2l8 4-8 4z"/></svg>`,
  // 3 nature/leaf
  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-9 5z"/></svg>`,
  // 4 3d/cube
  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  // 5 sound/music
  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 19V6l12-3v13M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/></svg>`,
  // 6 layers/identity
  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5"/></svg>`,
  // 7 light/camera
  `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"/><path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>`,
];

// ── STATE ──────────────────────────────────────────────
let currentPage = 'home';
let currentAudio = null;
let currentArtistId = null;
let activeLang = {};

// ── RENDER ─────────────────────────────────────────────
function renderHome() {
  const grid = document.getElementById('icon-grid');
  grid.innerHTML = artists.map((a, i) => `
    <button class="icon-card" onclick="navigateTo(${a.id})" aria-label="${a.nameKr} - ${a.titleKr}">
      <span class="card-num">0${a.id}</span>
      <div class="card-icon-box ${i % 3 === 1 ? 'is-red' : ''}">${icons[i]}</div>
      <span class="card-name-en">${a.nameEn}</span>
      <span class="card-title-kr">〈${a.titleKr}〉</span>
      <span class="card-title-en">${a.titleEn}</span>
    </button>
  `).join('');
}

function renderDetailPages() {
  const container = document.getElementById('detail-container');
  container.innerHTML = artists.map((a, i) => `
    <section class="page-detail" id="page-${a.id}" data-id="${a.id}">
      <div class="detail-hero">
        <button class="detail-back" onclick="navigateTo('home')">
          <svg viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Home
        </button>
        <div class="detail-num">0${a.id} / 07</div>
        <h1 class="detail-title-kr">〈${a.titleKr}〉</h1>
        <div class="detail-title-en">${a.titleEn}</div>
        <div class="detail-artist-kr">${a.nameKr}</div>
        <div class="detail-artist-en">${a.nameEn}</div>
      </div>

      <div class="detail-body">
        <div class="detail-image-wrap">
          <img src="${a.image}" alt="${a.titleKr}" onerror="this.parentElement.innerHTML='<div class=\\'detail-image-placeholder\\'><span>${a.image}</span></div>'">
        </div>

        <div class="detail-meta-bar">
          <div class="meta-item">
            <span class="meta-label">Medium</span>
            <span class="meta-value">${a.mediumEn}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Size</span>
            <span class="meta-value">${a.size}</span>
          </div>
        </div>

        <div class="docent-section">
          <div class="docent-label">Audio Docent · 음성 도슨트</div>
          <div class="docent-player">
            <button class="play-btn" id="play-${a.id}" onclick="togglePlay(${a.id})" aria-label="Play docent audio">
              <svg id="play-icon-${a.id}" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
            </button>
            <div class="player-controls">
              <div class="docent-title">${a.nameKr}, 〈${a.titleKr}〉</div>
              <div class="progress-bar-wrap" id="bar-wrap-${a.id}" onclick="seekAudio(event, ${a.id})">
                <div class="progress-bar-fill" id="bar-${a.id}"></div>
              </div>
              <div class="player-time" id="time-${a.id}">0:00 / 0:00</div>
            </div>
          </div>
          <audio id="audio-${a.id}" src="${a.docent}" preload="none"></audio>
        </div>

        <div class="description-section">
          <div class="desc-lang-toggle">
            <button class="lang-btn active" id="btn-kr-${a.id}" onclick="setLang(${a.id}, 'kr')">한국어</button>
            <button class="lang-btn" id="btn-en-${a.id}" onclick="setLang(${a.id}, 'en')">English</button>
          </div>
          <p class="desc-text visible" id="desc-kr-${a.id}">${a.descKr}</p>
          <p class="desc-text" id="desc-en-${a.id}">${a.descEn}</p>
        </div>

        <div class="detail-footer">
          <div class="footer-nav">
            <button class="footer-nav-btn" onclick="navigateTo(${a.id - 1 < 1 ? 1 : a.id - 1})" ${a.id === 1 ? 'disabled' : ''}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Prev
            </button>
            <button class="footer-nav-btn" onclick="navigateTo(${a.id + 1 > 7 ? 7 : a.id + 1})" ${a.id === 7 ? 'disabled' : ''}>
              Next
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
          <span class="footer-count">0${a.id} / 07</span>
        </div>
      </div>
    </section>
  `).join('');
}

function renderDrawerLinks() {
  const nav = document.getElementById('drawer-nav');
  nav.innerHTML = `
    <a href="#" onclick="navigateTo('home'); return false;">Home</a>
    ${artists.map(a => `
      <a href="#" onclick="navigateTo(${a.id}); return false;">
        <span class="drawer-num">0${a.id}</span>${a.nameKr} &mdash; 〈${a.titleKr}〉
      </a>
    `).join('')}
  `;
}

// ── NAVIGATION ─────────────────────────────────────────
function navigateTo(target) {
  stopAllAudio();
  closeDrawer();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('page-home').style.display = 'none';
  document.querySelectorAll('.page-detail').forEach(p => {
    p.classList.remove('active');
  });

  if (target === 'home') {
    document.getElementById('page-home').style.display = 'flex';
    currentPage = 'home';
  } else {
    const page = document.getElementById(`page-${target}`);
    if (page) {
      page.classList.add('active');
      currentPage = target;
    }
  }
}

// ── DRAWER ─────────────────────────────────────────────
function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');
  const hamburger = document.getElementById('hamburger');
  drawer.classList.toggle('open');
  overlay.classList.toggle('show');
  hamburger.classList.toggle('active');
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('show');
  document.getElementById('hamburger').classList.remove('active');
}

// ── AUDIO ──────────────────────────────────────────────
function stopAllAudio() {
  artists.forEach(a => {
    const audio = document.getElementById(`audio-${a.id}`);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    const btn = document.getElementById(`play-${a.id}`);
    if (btn) btn.classList.remove('playing');
    const icon = document.getElementById(`play-icon-${a.id}`);
    if (icon) icon.innerHTML = `<path d="M5 3l14 9-14 9V3z"/>`;
    const bar = document.getElementById(`bar-${a.id}`);
    if (bar) bar.style.width = '0%';
  });
}

function togglePlay(id) {
  const audio = document.getElementById(`audio-${id}`);
  const btn = document.getElementById(`play-${id}`);
  const icon = document.getElementById(`play-icon-${id}`);

  if (!audio) return;

  if (audio.paused) {
    stopAllAudio();
    audio.play().catch(() => {});
    btn.classList.add('playing');
    icon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
  } else {
    audio.pause();
    btn.classList.remove('playing');
    icon.innerHTML = `<path d="M5 3l14 9-14 9V3z"/>`;
  }
}

function seekAudio(e, id) {
  const audio = document.getElementById(`audio-${id}`);
  if (!audio || !audio.duration) return;
  const wrap = document.getElementById(`bar-wrap-${id}`);
  const rect = wrap.getBoundingClientRect();
  const ratio = (e.clientX - rect.left) / rect.width;
  audio.currentTime = ratio * audio.duration;
}

function formatTime(s) {
  if (isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function setupAudioListeners() {
  artists.forEach(a => {
    const audio = document.getElementById(`audio-${a.id}`);
    if (!audio) return;

    audio.addEventListener('timeupdate', () => {
      const bar = document.getElementById(`bar-${a.id}`);
      const time = document.getElementById(`time-${a.id}`);
      if (bar && audio.duration) {
        bar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
      }
      if (time) {
        time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
      }
    });

    audio.addEventListener('ended', () => {
      const btn = document.getElementById(`play-${a.id}`);
      const icon = document.getElementById(`play-icon-${a.id}`);
      if (btn) btn.classList.remove('playing');
      if (icon) icon.innerHTML = `<path d="M5 3l14 9-14 9V3z"/>`;
    });
  });
}

// ── LANGUAGE TOGGLE ────────────────────────────────────
function setLang(id, lang) {
  const krBtn = document.getElementById(`btn-kr-${id}`);
  const enBtn = document.getElementById(`btn-en-${id}`);
  const krDesc = document.getElementById(`desc-kr-${id}`);
  const enDesc = document.getElementById(`desc-en-${id}`);

  if (lang === 'kr') {
    krBtn.classList.add('active');
    enBtn.classList.remove('active');
    krDesc.classList.add('visible');
    enDesc.classList.remove('visible');
  } else {
    enBtn.classList.add('active');
    krBtn.classList.remove('active');
    enDesc.classList.add('visible');
    krDesc.classList.remove('visible');
  }
}

// ── QR DEEP LINK ───────────────────────────────────────
function handleDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const work = params.get('work');
  if (work) {
    const id = parseInt(work);
    if (id >= 1 && id <= 7) {
      navigateTo(id);
      return;
    }
  }
  const hash = window.location.hash;
  if (hash && hash.startsWith('#work-')) {
    const id = parseInt(hash.replace('#work-', ''));
    if (id >= 1 && id <= 7) navigateTo(id);
  }
}

// ── INIT ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  renderDetailPages();
  renderDrawerLinks();
  setupAudioListeners();
  handleDeepLink();

  document.getElementById('drawer-overlay').addEventListener('click', closeDrawer);
});
