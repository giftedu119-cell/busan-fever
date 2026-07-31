let viewedLevelIndex=null;
const defaultVisibleQuestLevel=visibleLevel;
visibleLevel=function(){return viewedLevelIndex===null?defaultVisibleQuestLevel():LEVELS[viewedLevelIndex][0]};
function updateLevelNavigation(){const current=defaultVisibleQuestLevel(),defaultIndex=LEVELS.findIndex(level=>level[0]===current),index=viewedLevelIndex===null?defaultIndex:viewedLevelIndex;document.getElementById('previousLevelButton').disabled=index===0;document.getElementById('nextLevelButton').disabled=index===LEVELS.length-1}
function moveQuestLevel(direction){const current=defaultVisibleQuestLevel(),defaultIndex=LEVELS.findIndex(level=>level[0]===current),index=viewedLevelIndex===null?defaultIndex:viewedLevelIndex;viewedLevelIndex=Math.max(0,Math.min(LEVELS.length-1,index+direction));renderQuestPath();updateLevelNavigation()}
const priorLevelPathRender=renderQuestPath;renderQuestPath=function(){priorLevelPathRender();updateLevelNavigation()};
renderQuestPath();
