function applyHomeLanguageCopy() {
  const lang = localStorage.busanFeverLanguage || 'ko';
  const name = localStorage.nickname || (lang === 'ko' ? '탐험가' : lang === 'ja' ? '冒険者' : lang === 'zh' ? '探索者' : 'Explorer');
  const current = getCurrentQuestId();
  const greeting = document.getElementById('homeGreeting');
  const status = document.getElementById('homeStatus');

  if (lang === 'en') {
    greeting.textContent = `${name}, let’s collect the sea!`;
    status.textContent = current > 55 ? 'You completed all 55 Busan sea quests!' : `Busan Quest ${current} is waiting for you.`;
  } else if (lang === 'ja') {
    greeting.textContent = `${name}さん、釜山の海を集めよう！`;
    status.textContent = current > 55 ? '55個の釜山・海クエストをすべて完了しました！' : `${current}番目の海クエストが待っています。`;
  } else if (lang === 'zh') {
    greeting.textContent = `${name}，一起收集釜山的大海吧！`;
    status.textContent = current > 55 ? '你已完成全部55个釜山海洋任务！' : `第 ${current} 个海洋任务正在等你。`;
  } else {
    greeting.textContent = `${name}님, 부산 바다를 수집해요!`;
    status.textContent = current > 55 ? '55개의 부산 바다 퀘스트를 모두 완료했어요!' : `${current}번째 바다 퀘스트가 기다리고 있어요.`;
  }
}

const previousProfileLanguageSetter = setProfileLanguage;
setProfileLanguage = function (nextLanguage) {
  previousProfileLanguageSetter(nextLanguage);
  applyHomeLanguageCopy();
};

const previousLanguageSelector = selectLanguage;
selectLanguage = function (nextLanguage) {
  previousLanguageSelector(nextLanguage);
  applyHomeLanguageCopy();
};

const previousHomeUpdater = updateHome;
updateHome = function () {
  previousHomeUpdater();
  applyHomeLanguageCopy();
};

applyHomeLanguageCopy();
