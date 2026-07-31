/* First-run flow: language → profile → short guide → home. */
function startApp() {
  const name = document.getElementById('firstName').value.trim();
  if (!name) return;

  localStorage.nickname = name;
  document.getElementById('profileStep').classList.add('hide');
  document.getElementById('guideStep').classList.remove('hide');
}

function finishGuide() {
  localStorage.busanFeverOnboardingVersion = ONBOARDING_VERSION;
  document.getElementById('onboarding').classList.add('hide');
  render();
  showScreen('home');
}

function showScreen(screenName) {
  const homeScreen = document.getElementById('homeScreen');
  const questScreen = document.getElementById('questScreen');
  const mapScreen = document.getElementById('mapScreen');
  document.getElementById('siteHero').classList.toggle('hide', screenName !== 'home');
  document.getElementById('siteIntro').classList.toggle('hide', screenName !== 'home');

  homeScreen.classList.toggle('hide', screenName !== 'home');
  questScreen.classList.toggle('hide', screenName !== 'quests');
  mapScreen.classList.toggle('hide', screenName !== 'map');

  document.getElementById('homeNav').classList.toggle('active', screenName === 'home');
  document.getElementById('questNav').classList.toggle('active', screenName === 'quests');
  document.getElementById('mapNav').classList.toggle('active', screenName === 'map');

  if (screenName === 'map') {
    initializeMap();
    setTimeout(() => {
      map.invalidateSize();
      renderMapMarkers();
    }, 100);
  }
}

function updateHome() {
  const name = localStorage.nickname || '탐험가';
  const current = getCurrentQuestId();
  document.getElementById('homeGreeting').innerHTML = `${name}님,<br>부산 바다를 수집해요!`;
  document.getElementById('homeStatus').textContent = current > 55
    ? '55개의 부산 바다 퀘스트를 모두 완료했어요!'
    : `${current}번째 바다 퀘스트가 기다리고 있어요.`;
}

const originalRender = render;
render = function () {
  originalRender();
  updateHome();
};

if (localStorage.busanFeverOnboardingVersion === ONBOARDING_VERSION) {
  showScreen('home');
}
