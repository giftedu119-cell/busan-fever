const QUEST_ENGLISH_TASKS={
  1:'Make “BUSAN” in the sand and take a photo with the sea.',
  2:'Find three seagulls and take a photo with them.',
  3:'Record the waves for 20 seconds and capture the biggest wave.',
  4:'Walk the beach for 15 minutes and photograph the waves, sand, and sky.',
  5:'Find three signature Busan foods at the market and take a verification photo at the entrance.',
  6:'Walk to Nurimaru and take a photo with the building and the sea.',
  7:'Find three camellia or pine trees along the coastal trail and photograph them.',
  8:'Take a reflection photo of the seaside skyscrapers.',
  9:'Find a movie-themed sculpture or handprint and copy its pose in a photo.',
  10:'Film the beach train passing by and take a verification photo at Mipo Station.',
  11:'Walk Dalmaji-gil for at least 20 minutes and save the best sea-view spot.',
  12:'Photograph Haewoljeong with the sea and record the origin of Dalmaji-gil’s name.',
  13:'Find the red and white lighthouses and photograph both.',
  14:'Record the types of boats visible from the observatory and take a sea photo.',
  15:'Photograph three differently shaped shells, then leave them where you found them.',
  16:'Walk barefoot on the beach for 10 minutes and photograph your footprints with the sea.',
  17:'Walk to the observatory and photograph all of Songjeong Beach.',
  18:'Find your zodiac animal at Haedong Yonggungsa and take a verification photo.',
  19:'Walk the coastal trail for 20 minutes and mark the windiest spot on the map.',
  20:'Photograph the entire Gwangan Bridge and find out its length.'
};
function englishQuestTask(quest){return QUEST_ENGLISH_TASKS[quest.id]||`Complete Quest ${quest.id}: take a verification photo at this location.`}
const QUEST_ENGLISH_PLACES={1:'Haeundae Beach',2:'Haeundae Beach',3:'Haeundae Beach',4:'Haeundae Beach Trail',5:'Haeundae Traditional Market',6:'Dongbaekseom Island',7:'Dongbaekseom Coastal Trail',8:'Marine City Coast',9:'Haeundae Movie Street',10:'Mipo',11:'Dalmaji-gil',12:'Haewoljeong Pavilion',13:'Cheongsapo',14:'Cheongsapo Daritdol Observatory',15:'Gudeokpo Coast',16:'Songjeong Beach',17:'Songjeong Jukdo Park',18:'Haedong Yonggungsa Temple',19:'Osiria Coastal Trail',20:'Gwangalli Beach'};
function selectedLanguageQuestTask(quest){const lang=localStorage.busanFeverLanguage||'ko';if(lang==='ko')return quest.title;if(lang==='en')return englishQuestTask(quest);if(lang==='ja')return `釜山クエスト ${quest.id}：この場所で写真認証ミッションを完了してください。`;return `釜山任务 ${quest.id}：请在此地点完成照片验证任务。`}
function selectedLanguagePlace(quest){const lang=localStorage.busanFeverLanguage||'ko';if(lang==='ko')return quest.place;if(lang==='en')return QUEST_ENGLISH_PLACES[quest.id]||`Busan location ${quest.id}`;if(lang==='ja')return `釜山スポット ${quest.id}`;return `釜山地点 ${quest.id}`}
localizedPlace=function(quest){return selectedLanguagePlace(quest)};
localizedTitle=function(quest){return selectedLanguageQuestTask(quest)};
render();
