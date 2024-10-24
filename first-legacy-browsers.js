/************** 
 * First *
 **************/


// store info about the experiment session:
let expName = 'first';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);





flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'a.xlsx', 'path': 'a.xlsx'},
    {'name': 'female/BF34HAS.JPG', 'path': 'female/BF34HAS.JPG'},
    {'name': 'female/AF28DIS.JPG', 'path': 'female/AF28DIS.JPG'},
    {'name': 'female/AF02ANS.JPG', 'path': 'female/AF02ANS.JPG'},
    {'name': 'female/AF11HAS.JPG', 'path': 'female/AF11HAS.JPG'},
    {'name': 'female/BF03AFS.JPG', 'path': 'female/BF03AFS.JPG'},
    {'name': 'female/BF15DIS.JPG', 'path': 'female/BF15DIS.JPG'},
    {'name': 'female/AF11ANS.JPG', 'path': 'female/AF11ANS.JPG'},
    {'name': 'female/BF21SAS.JPG', 'path': 'female/BF21SAS.JPG'},
    {'name': 'female/AF14HAS.JPG', 'path': 'female/AF14HAS.JPG'},
    {'name': 'female/BF18ANS.JPG', 'path': 'female/BF18ANS.JPG'},
    {'name': 'female/AF26SAS.JPG', 'path': 'female/AF26SAS.JPG'},
    {'name': 'female/AF23SAS.JPG', 'path': 'female/AF23SAS.JPG'},
    {'name': 'female/AF26SUS.JPG', 'path': 'female/AF26SUS.JPG'},
    {'name': 'female/BF23SUS.JPG', 'path': 'female/BF23SUS.JPG'},
    {'name': 'female/AF09DIS.JPG', 'path': 'female/AF09DIS.JPG'},
    {'name': 'female/AF09ANS.JPG', 'path': 'female/AF09ANS.JPG'},
    {'name': 'female/AF01HAS.JPG', 'path': 'female/AF01HAS.JPG'},
    {'name': 'female/BF01HAS.JPG', 'path': 'female/BF01HAS.JPG'},
    {'name': 'female/AF30SUS.JPG', 'path': 'female/AF30SUS.JPG'},
    {'name': 'female/BF09SAS.JPG', 'path': 'female/BF09SAS.JPG'},
    {'name': 'female/AF15DIS.JPG', 'path': 'female/AF15DIS.JPG'},
    {'name': 'female/AF17AFS.JPG', 'path': 'female/AF17AFS.JPG'},
    {'name': 'female/BF31SUS.JPG', 'path': 'female/BF31SUS.JPG'},
    {'name': 'female/AF17HAS.JPG', 'path': 'female/AF17HAS.JPG'},
    {'name': 'female/BF20SAS.JPG', 'path': 'female/BF20SAS.JPG'},
    {'name': 'female/AF19HAS.JPG', 'path': 'female/AF19HAS.JPG'},
    {'name': 'female/AF06DIS.JPG', 'path': 'female/AF06DIS.JPG'},
    {'name': 'female/BF17DIS.JPG', 'path': 'female/BF17DIS.JPG'},
    {'name': 'female/BF17AFS.JPG', 'path': 'female/BF17AFS.JPG'},
    {'name': 'female/AF28ANS.JPG', 'path': 'female/AF28ANS.JPG'},
    {'name': 'female/BF26DIS.JPG', 'path': 'female/BF26DIS.JPG'},
    {'name': 'female/AF10HAS.JPG', 'path': 'female/AF10HAS.JPG'},
    {'name': 'female/AF17SAS.JPG', 'path': 'female/AF17SAS.JPG'},
    {'name': 'female/BF34SUS.JPG', 'path': 'female/BF34SUS.JPG'},
    {'name': 'female/BF07SUS.JPG', 'path': 'female/BF07SUS.JPG'},
    {'name': 'female/BF31DIS.JPG', 'path': 'female/BF31DIS.JPG'},
    {'name': 'female/AF22AFS.JPG', 'path': 'female/AF22AFS.JPG'},
    {'name': 'female/BF17ANS.JPG', 'path': 'female/BF17ANS.JPG'},
    {'name': 'female/BF30AFS.JPG', 'path': 'female/BF30AFS.JPG'},
    {'name': 'female/AF14DIS.JPG', 'path': 'female/AF14DIS.JPG'},
    {'name': 'female/AF21SUS.JPG', 'path': 'female/AF21SUS.JPG'},
    {'name': 'female/AF33HAS.JPG', 'path': 'female/AF33HAS.JPG'},
    {'name': 'female/AF20ANS.JPG', 'path': 'female/AF20ANS.JPG'},
    {'name': 'female/BF18DIS.JPG', 'path': 'female/BF18DIS.JPG'},
    {'name': 'female/AF01DIS.JPG', 'path': 'female/AF01DIS.JPG'},
    {'name': 'female/BF05AFS.JPG', 'path': 'female/BF05AFS.JPG'},
    {'name': 'female/AF25AFS.JPG', 'path': 'female/AF25AFS.JPG'},
    {'name': 'female/AF29SAS.JPG', 'path': 'female/AF29SAS.JPG'},
    {'name': 'female/AF02SAS.JPG', 'path': 'female/AF02SAS.JPG'},
    {'name': 'female/BF11HAS.JPG', 'path': 'female/BF11HAS.JPG'},
    {'name': 'female/BF06SUS.JPG', 'path': 'female/BF06SUS.JPG'},
    {'name': 'female/BF29ANS.JPG', 'path': 'female/BF29ANS.JPG'},
    {'name': 'female/BF19SUS.JPG', 'path': 'female/BF19SUS.JPG'},
    {'name': 'female/BF10ANS.JPG', 'path': 'female/BF10ANS.JPG'},
    {'name': 'female/BF25SAS.JPG', 'path': 'female/BF25SAS.JPG'},
    {'name': 'female/AF09SUS.JPG', 'path': 'female/AF09SUS.JPG'},
    {'name': 'female/AF15ANS.JPG', 'path': 'female/AF15ANS.JPG'},
    {'name': 'female/AF08SAS.JPG', 'path': 'female/AF08SAS.JPG'},
    {'name': 'female/BF21AFS.JPG', 'path': 'female/BF21AFS.JPG'},
    {'name': 'female/BF29SUS.JPG', 'path': 'female/BF29SUS.JPG'},
    {'name': 'female/AF23SUS.JPG', 'path': 'female/AF23SUS.JPG'},
    {'name': 'female/AF20SAS.JPG', 'path': 'female/AF20SAS.JPG'},
    {'name': 'female/AF02DIS.JPG', 'path': 'female/AF02DIS.JPG'},
    {'name': 'female/AF24HAS.JPG', 'path': 'female/AF24HAS.JPG'},
    {'name': 'female/BF35ANS.JPG', 'path': 'female/BF35ANS.JPG'},
    {'name': 'female/BF30HAS.JPG', 'path': 'female/BF30HAS.JPG'},
    {'name': 'female/AF34ANS.JPG', 'path': 'female/AF34ANS.JPG'},
    {'name': 'female/AF05SAS.JPG', 'path': 'female/AF05SAS.JPG'},
    {'name': 'female/AF35AFS.JPG', 'path': 'female/AF35AFS.JPG'},
    {'name': 'female/BF16SAS.JPG', 'path': 'female/BF16SAS.JPG'},
    {'name': 'female/BF22AFS.JPG', 'path': 'female/BF22AFS.JPG'},
    {'name': 'female/AF07ANS.JPG', 'path': 'female/AF07ANS.JPG'},
    {'name': 'female/AF19SUS.JPG', 'path': 'female/AF19SUS.JPG'},
    {'name': 'female/BF27SAS.JPG', 'path': 'female/BF27SAS.JPG'},
    {'name': 'female/BF27SUS.JPG', 'path': 'female/BF27SUS.JPG'},
    {'name': 'female/BF14ANS.JPG', 'path': 'female/BF14ANS.JPG'},
    {'name': 'female/BF12AFS.JPG', 'path': 'female/BF12AFS.JPG'},
    {'name': 'female/BF20SUS.JPG', 'path': 'female/BF20SUS.JPG'},
    {'name': 'female/BF04HAS.JPG', 'path': 'female/BF04HAS.JPG'},
    {'name': 'female/AF09HAS.JPG', 'path': 'female/AF09HAS.JPG'},
    {'name': 'female/BF16HAS.JPG', 'path': 'female/BF16HAS.JPG'},
    {'name': 'female/BF27ANS.JPG', 'path': 'female/BF27ANS.JPG'},
    {'name': 'female/AF18SUS.JPG', 'path': 'female/AF18SUS.JPG'},
    {'name': 'female/AF29SUS.JPG', 'path': 'female/AF29SUS.JPG'},
    {'name': 'female/AF03HAS.JPG', 'path': 'female/AF03HAS.JPG'},
    {'name': 'female/BF05HAS.JPG', 'path': 'female/BF05HAS.JPG'},
    {'name': 'female/AF28SUS.JPG', 'path': 'female/AF28SUS.JPG'},
    {'name': 'female/BF20HAS.JPG', 'path': 'female/BF20HAS.JPG'},
    {'name': 'female/BF35HAS.JPG', 'path': 'female/BF35HAS.JPG'},
    {'name': 'female/AF07AFS.JPG', 'path': 'female/AF07AFS.JPG'},
    {'name': 'female/AF21ANS.JPG', 'path': 'female/AF21ANS.JPG'},
    {'name': 'female/AF29HAS.JPG', 'path': 'female/AF29HAS.JPG'},
    {'name': 'female/BF01DIS.JPG', 'path': 'female/BF01DIS.JPG'},
    {'name': 'female/BF34ANS.JPG', 'path': 'female/BF34ANS.JPG'},
    {'name': 'female/BF14SUS.JPG', 'path': 'female/BF14SUS.JPG'},
    {'name': 'female/BF03HAS.JPG', 'path': 'female/BF03HAS.JPG'},
    {'name': 'female/BF26SAS.JPG', 'path': 'female/BF26SAS.JPG'},
    {'name': 'female/AF16DIS.JPG', 'path': 'female/AF16DIS.JPG'},
    {'name': 'female/AF24SAS.JPG', 'path': 'female/AF24SAS.JPG'},
    {'name': 'female/BF02ANS.JPG', 'path': 'female/BF02ANS.JPG'},
    {'name': 'female/BF28DIS.JPG', 'path': 'female/BF28DIS.JPG'},
    {'name': 'female/BF18SAS.JPG', 'path': 'female/BF18SAS.JPG'},
    {'name': 'female/BF12HAS.JPG', 'path': 'female/BF12HAS.JPG'},
    {'name': 'female/BF19DIS.JPG', 'path': 'female/BF19DIS.JPG'},
    {'name': 'female/AF15AFS.JPG', 'path': 'female/AF15AFS.JPG'},
    {'name': 'male/AM29SAS.JPG', 'path': 'male/AM29SAS.JPG'},
    {'name': 'male/BM26DIS.JPG', 'path': 'male/BM26DIS.JPG'},
    {'name': 'male/AM06ANS.JPG', 'path': 'male/AM06ANS.JPG'},
    {'name': 'male/BM12ANS.JPG', 'path': 'male/BM12ANS.JPG'},
    {'name': 'male/AM19SUS.JPG', 'path': 'male/AM19SUS.JPG'},
    {'name': 'male/BM30SAS.JPG', 'path': 'male/BM30SAS.JPG'},
    {'name': 'male/BM33SUS.JPG', 'path': 'male/BM33SUS.JPG'},
    {'name': 'male/BM14AFS.JPG', 'path': 'male/BM14AFS.JPG'},
    {'name': 'male/BM10SUS.JPG', 'path': 'male/BM10SUS.JPG'},
    {'name': 'male/AM32AFS.JPG', 'path': 'male/AM32AFS.JPG'},
    {'name': 'male/BM30SUS.JPG', 'path': 'male/BM30SUS.JPG'},
    {'name': 'male/AM30HAS.JPG', 'path': 'male/AM30HAS.JPG'},
    {'name': 'male/BM19HAS.JPG', 'path': 'male/BM19HAS.JPG'},
    {'name': 'male/BM29SUS.JPG', 'path': 'male/BM29SUS.JPG'},
    {'name': 'male/AM02ANS.JPG', 'path': 'male/AM02ANS.JPG'},
    {'name': 'male/BM21ANS.JPG', 'path': 'male/BM21ANS.JPG'},
    {'name': 'male/BM34AFS.JPG', 'path': 'male/BM34AFS.JPG'},
    {'name': 'male/AM06DIS.JPG', 'path': 'male/AM06DIS.JPG'},
    {'name': 'male/BM16AFS.JPG', 'path': 'male/BM16AFS.JPG'},
    {'name': 'male/BM33AFS.JPG', 'path': 'male/BM33AFS.JPG'},
    {'name': 'male/BM12SUS.JPG', 'path': 'male/BM12SUS.JPG'},
    {'name': 'male/AM31ANS.JPG', 'path': 'male/AM31ANS.JPG'},
    {'name': 'male/AM27DIS.JPG', 'path': 'male/AM27DIS.JPG'},
    {'name': 'male/BM12SAS.JPG', 'path': 'male/BM12SAS.JPG'},
    {'name': 'male/AM26ANS.JPG', 'path': 'male/AM26ANS.JPG'},
    {'name': 'male/BM33ANS.JPG', 'path': 'male/BM33ANS.JPG'},
    {'name': 'male/AM23ANS.JPG', 'path': 'male/AM23ANS.JPG'},
    {'name': 'male/BM23HAS.JPG', 'path': 'male/BM23HAS.JPG'},
    {'name': 'male/BM07HAS.JPG', 'path': 'male/BM07HAS.JPG'},
    {'name': 'male/BM13ANS.JPG', 'path': 'male/BM13ANS.JPG'},
    {'name': 'male/AM16DIS.JPG', 'path': 'male/AM16DIS.JPG'},
    {'name': 'male/AM27AFS.JPG', 'path': 'male/AM27AFS.JPG'},
    {'name': 'male/BM22SAS.JPG', 'path': 'male/BM22SAS.JPG'},
    {'name': 'male/BM04HAS.JPG', 'path': 'male/BM04HAS.JPG'},
    {'name': 'male/AM08SAS.JPG', 'path': 'male/AM08SAS.JPG'},
    {'name': 'male/AM23SAS.JPG', 'path': 'male/AM23SAS.JPG'},
    {'name': 'male/AM24HAS.JPG', 'path': 'male/AM24HAS.JPG'},
    {'name': 'male/BM07SAS.JPG', 'path': 'male/BM07SAS.JPG'},
    {'name': 'male/BM01DIS.JPG', 'path': 'male/BM01DIS.JPG'},
    {'name': 'male/BM18DIS.JPG', 'path': 'male/BM18DIS.JPG'},
    {'name': 'male/BM13SUS.JPG', 'path': 'male/BM13SUS.JPG'},
    {'name': 'male/AM07SAS.JPG', 'path': 'male/AM07SAS.JPG'},
    {'name': 'male/AM19DIS.JPG', 'path': 'male/AM19DIS.JPG'},
    {'name': 'male/BM14DIS.JPG', 'path': 'male/BM14DIS.JPG'},
    {'name': 'male/AM05HAS.JPG', 'path': 'male/AM05HAS.JPG'},
    {'name': 'male/AM23DIS.JPG', 'path': 'male/AM23DIS.JPG'},
    {'name': 'male/AM18ANS.JPG', 'path': 'male/AM18ANS.JPG'},
    {'name': 'male/BM02SUS.JPG', 'path': 'male/BM02SUS.JPG'},
    {'name': 'male/BM23ANS.JPG', 'path': 'male/BM23ANS.JPG'},
    {'name': 'male/BM14HAS.JPG', 'path': 'male/BM14HAS.JPG'},
    {'name': 'male/AM22HAS.JPG', 'path': 'male/AM22HAS.JPG'},
    {'name': 'male/AM16AFS.JPG', 'path': 'male/AM16AFS.JPG'},
    {'name': 'male/BM29SAS.JPG', 'path': 'male/BM29SAS.JPG'},
    {'name': 'male/AM27SAS.JPG', 'path': 'male/AM27SAS.JPG'},
    {'name': 'male/AM06SAS.JPG', 'path': 'male/AM06SAS.JPG'},
    {'name': 'male/AM13ANS.JPG', 'path': 'male/AM13ANS.JPG'},
    {'name': 'male/AM23SUS.JPG', 'path': 'male/AM23SUS.JPG'},
    {'name': 'male/BM32DIS.JPG', 'path': 'male/BM32DIS.JPG'},
    {'name': 'male/BM26SAS.JPG', 'path': 'male/BM26SAS.JPG'},
    {'name': 'male/BM20DIS.JPG', 'path': 'male/BM20DIS.JPG'},
    {'name': 'male/AM25ANS.JPG', 'path': 'male/AM25ANS.JPG'},
    {'name': 'male/AM27HAS.JPG', 'path': 'male/AM27HAS.JPG'},
    {'name': 'male/AM10ANS.JPG', 'path': 'male/AM10ANS.JPG'},
    {'name': 'male/BM04DIS.JPG', 'path': 'male/BM04DIS.JPG'},
    {'name': 'male/BM05SAS.JPG', 'path': 'male/BM05SAS.JPG'},
    {'name': 'male/AM21ANS.JPG', 'path': 'male/AM21ANS.JPG'},
    {'name': 'male/BM08SUS.JPG', 'path': 'male/BM08SUS.JPG'},
    {'name': 'male/AM10DIS.JPG', 'path': 'male/AM10DIS.JPG'},
    {'name': 'male/BM22ANS.JPG', 'path': 'male/BM22ANS.JPG'},
    {'name': 'male/BM17ANS.JPG', 'path': 'male/BM17ANS.JPG'},
    {'name': 'male/AM34ANS.JPG', 'path': 'male/AM34ANS.JPG'},
    {'name': 'male/BM28AFS.JPG', 'path': 'male/BM28AFS.JPG'},
    {'name': 'male/AM06SUS.JPG', 'path': 'male/AM06SUS.JPG'},
    {'name': 'male/BM06AFS.JPG', 'path': 'male/BM06AFS.JPG'},
    {'name': 'male/BM15AFS.JPG', 'path': 'male/BM15AFS.JPG'},
    {'name': 'male/BM22AFS.JPG', 'path': 'male/BM22AFS.JPG'},
    {'name': 'male/AM07AFS.JPG', 'path': 'male/AM07AFS.JPG'},
    {'name': 'male/AM06AFS.JPG', 'path': 'male/AM06AFS.JPG'},
    {'name': 'male/AM35SUS.JPG', 'path': 'male/AM35SUS.JPG'},
    {'name': 'male/AM03AFS.JPG', 'path': 'male/AM03AFS.JPG'},
    {'name': 'male/BM24SAS.JPG', 'path': 'male/BM24SAS.JPG'},
    {'name': 'male/AM26DIS.JPG', 'path': 'male/AM26DIS.JPG'},
    {'name': 'male/AM29AFS.JPG', 'path': 'male/AM29AFS.JPG'},
    {'name': 'male/BM15SUS.JPG', 'path': 'male/BM15SUS.JPG'},
    {'name': 'male/BM25SAS.JPG', 'path': 'male/BM25SAS.JPG'},
    {'name': 'male/BM33DIS.JPG', 'path': 'male/BM33DIS.JPG'},
    {'name': 'male/AM21AFS.JPG', 'path': 'male/AM21AFS.JPG'},
    {'name': 'male/AM16HAS.JPG', 'path': 'male/AM16HAS.JPG'},
    {'name': 'male/AM28DIS.JPG', 'path': 'male/AM28DIS.JPG'},
    {'name': 'male/BM09SAS.JPG', 'path': 'male/BM09SAS.JPG'},
    {'name': 'male/AM32DIS.JPG', 'path': 'male/AM32DIS.JPG'},
    {'name': 'male/AM28SUS.JPG', 'path': 'male/AM28SUS.JPG'},
    {'name': 'male/AM25DIS.JPG', 'path': 'male/AM25DIS.JPG'},
    {'name': 'male/BM29AFS.JPG', 'path': 'male/BM29AFS.JPG'},
    {'name': 'male/AM13SUS.JPG', 'path': 'male/AM13SUS.JPG'},
    {'name': 'male/AM06HAS.JPG', 'path': 'male/AM06HAS.JPG'},
    {'name': 'male/AM17SUS.JPG', 'path': 'male/AM17SUS.JPG'},
    {'name': 'male/BM21AFS.JPG', 'path': 'male/BM21AFS.JPG'},
    {'name': 'male/BM17SUS.JPG', 'path': 'male/BM17SUS.JPG'},
    {'name': 'male/BM09HAS.JPG', 'path': 'male/BM09HAS.JPG'},
    {'name': 'male/BM28ANS.JPG', 'path': 'male/BM28ANS.JPG'},
    {'name': 'male/AM02DIS.JPG', 'path': 'male/AM02DIS.JPG'},
    {'name': 'male/AM07ANS.JPG', 'path': 'male/AM07ANS.JPG'},
    {'name': 'male/AM05AFS.JPG', 'path': 'male/AM05AFS.JPG'},
    {'name': 'male/BM05ANS.JPG', 'path': 'male/BM05ANS.JPG'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var facesClock;
var face_stimuli;
var mouse_2;
var responseClock;
var polygon_sadness;
var text_sadness;
var polygon_disgust;
var text_disgust;
var polygon_fear;
var text_fear;
var polygon_happiness;
var text_happiness;
var polygon_surprise;
var text_surprise;
var polygon_anger;
var text_anger;
var mouse;
var confidenceClock;
var question_confidence;
var polygon_confidence1;
var polygon_confidence2;
var polygon_confidence3;
var polygon_confidence4;
var confidence_fullysure1;
var confidence_verysure2;
var confidence_unsure3;
var confidence_guessed4;
var confidence_text1;
var confidence_text2;
var confidence_text3;
var confidence_text4;
var mouse_3;
var brake_routineClock;
var text;
var key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "faces"
  facesClock = new util.Clock();
  face_stimuli = new visual.ImageStim({
    win : psychoJS.window,
    name : 'face_stimuli', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.7, 0.8],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "response"
  responseClock = new util.Clock();
  polygon_sadness = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_sadness', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0.0, 
    pos: [0.5, 0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  text_sadness = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sadness',
    text: 'sadness',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  polygon_disgust = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_disgust', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0.0, 
    pos: [0.3, 0.319], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  text_disgust = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_disgust',
    text: 'disgust',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, 0.319], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  polygon_fear = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_fear', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), 0.319], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  text_fear = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_fear',
    text: 'fear',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0.319], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  polygon_happiness = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_happiness', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.5), 0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  text_happiness = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_happiness',
    text: 'happiness',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  polygon_surprise = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_surprise', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0.0, 
    pos: [(- 0.3), (- 0.319)], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  text_surprise = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_surprise',
    text: 'surprise',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), (- 0.319)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  polygon_anger = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_anger', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0.0, 
    pos: [0.3, (- 0.319)], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  text_anger = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_anger',
    text: 'anger',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, (- 0.319)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "confidence"
  confidenceClock = new util.Clock();
  question_confidence = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_confidence',
    text: 'How confident are you?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  polygon_confidence1 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_confidence1', 
    edges: 100, size:[0.1, 0.1],
    ori: 0.0, 
    pos: [(- 0.6), 0.0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 3.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  polygon_confidence2 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_confidence2', 
    edges: 100, size:[0.1, 0.1],
    ori: 0.0, 
    pos: [(- 0.2), 0.0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 3.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  polygon_confidence3 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_confidence3', 
    edges: 100, size:[0.1, 0.1],
    ori: 0.0, 
    pos: [0.2, 0.0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 3.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  polygon_confidence4 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_confidence4', 
    edges: 100, size:[0.1, 0.1],
    ori: 0.0, 
    pos: [0.6, 0.0], 
    draggable: false, 
    anchor: 'center',
    lineWidth: 3.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: [0.0, 0.0, 0.0],
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  confidence_fullysure1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_fullysure1',
    text: '%100 sure',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), (- 0.1)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  confidence_verysure2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_verysure2',
    text: 'very sure',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.1)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  confidence_unsure3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_unsure3',
    text: 'unsure',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.1)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  confidence_guessed4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_guessed4',
    text: 'guessed',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, (- 0.1)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  confidence_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_text1',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.6), 0.0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  confidence_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_text2',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), 0.0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  confidence_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_text3',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0.0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  confidence_text4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'confidence_text4',
    text: '4',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0.0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -12.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "brake_routine"
  brake_routineClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Take a break! Press space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'a.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(facesRoutineBegin(snapshot));
      trialsLoopScheduler.add(facesRoutineEachFrame());
      trialsLoopScheduler.add(facesRoutineEnd(snapshot));
      trialsLoopScheduler.add(responseRoutineBegin(snapshot));
      trialsLoopScheduler.add(responseRoutineEachFrame());
      trialsLoopScheduler.add(responseRoutineEnd(snapshot));
      trialsLoopScheduler.add(confidenceRoutineBegin(snapshot));
      trialsLoopScheduler.add(confidenceRoutineEachFrame());
      trialsLoopScheduler.add(confidenceRoutineEnd(snapshot));
      trialsLoopScheduler.add(brake_routineRoutineBegin(snapshot));
      trialsLoopScheduler.add(brake_routineRoutineEachFrame());
      trialsLoopScheduler.add(brake_routineRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var facesMaxDurationReached;
var gotValidClick;
var facesMaxDuration;
var facesComponents;
function facesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'faces' ---
    t = 0;
    facesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    facesMaxDurationReached = false;
    // update component parameters for each repeat
    face_stimuli.setImage(image_path);
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('faces.started', globalClock.getTime());
    facesMaxDuration = null
    // keep track of which components have finished
    facesComponents = [];
    facesComponents.push(face_stimuli);
    facesComponents.push(mouse_2);
    
    facesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function facesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'faces' ---
    // get current time
    t = facesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *face_stimuli* updates
    if (t >= 0.0 && face_stimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      face_stimuli.tStart = t;  // (not accounting for frame time here)
      face_stimuli.frameNStart = frameN;  // exact frame index
      
      face_stimuli.setAutoDraw(true);
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval(face_stimuli)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_2.clicked_name.push(null);
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    facesComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function facesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'faces' ---
    facesComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('faces.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "faces" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var responseMaxDurationReached;
var responseMaxDuration;
var responseComponents;
function responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'response' ---
    t = 0;
    responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    responseMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('response.started', globalClock.getTime());
    responseMaxDuration = null
    // keep track of which components have finished
    responseComponents = [];
    responseComponents.push(polygon_sadness);
    responseComponents.push(text_sadness);
    responseComponents.push(polygon_disgust);
    responseComponents.push(text_disgust);
    responseComponents.push(polygon_fear);
    responseComponents.push(text_fear);
    responseComponents.push(polygon_happiness);
    responseComponents.push(text_happiness);
    responseComponents.push(polygon_surprise);
    responseComponents.push(text_surprise);
    responseComponents.push(polygon_anger);
    responseComponents.push(text_anger);
    responseComponents.push(mouse);
    
    responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'response' ---
    // get current time
    t = responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_sadness* updates
    if (t >= 0.0 && polygon_sadness.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_sadness.tStart = t;  // (not accounting for frame time here)
      polygon_sadness.frameNStart = frameN;  // exact frame index
      
      polygon_sadness.setAutoDraw(true);
    }
    
    
    // *text_sadness* updates
    if (t >= 0.0 && text_sadness.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sadness.tStart = t;  // (not accounting for frame time here)
      text_sadness.frameNStart = frameN;  // exact frame index
      
      text_sadness.setAutoDraw(true);
    }
    
    
    // *polygon_disgust* updates
    if (t >= 0.0 && polygon_disgust.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_disgust.tStart = t;  // (not accounting for frame time here)
      polygon_disgust.frameNStart = frameN;  // exact frame index
      
      polygon_disgust.setAutoDraw(true);
    }
    
    
    // *text_disgust* updates
    if (t >= 0.0 && text_disgust.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_disgust.tStart = t;  // (not accounting for frame time here)
      text_disgust.frameNStart = frameN;  // exact frame index
      
      text_disgust.setAutoDraw(true);
    }
    
    
    // *polygon_fear* updates
    if (t >= 0.0 && polygon_fear.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_fear.tStart = t;  // (not accounting for frame time here)
      polygon_fear.frameNStart = frameN;  // exact frame index
      
      polygon_fear.setAutoDraw(true);
    }
    
    
    // *text_fear* updates
    if (t >= 0.0 && text_fear.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_fear.tStart = t;  // (not accounting for frame time here)
      text_fear.frameNStart = frameN;  // exact frame index
      
      text_fear.setAutoDraw(true);
    }
    
    
    // *polygon_happiness* updates
    if (t >= 0.0 && polygon_happiness.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_happiness.tStart = t;  // (not accounting for frame time here)
      polygon_happiness.frameNStart = frameN;  // exact frame index
      
      polygon_happiness.setAutoDraw(true);
    }
    
    
    // *text_happiness* updates
    if (t >= 0.0 && text_happiness.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_happiness.tStart = t;  // (not accounting for frame time here)
      text_happiness.frameNStart = frameN;  // exact frame index
      
      text_happiness.setAutoDraw(true);
    }
    
    
    // *polygon_surprise* updates
    if (t >= 0.0 && polygon_surprise.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_surprise.tStart = t;  // (not accounting for frame time here)
      polygon_surprise.frameNStart = frameN;  // exact frame index
      
      polygon_surprise.setAutoDraw(true);
    }
    
    
    // *text_surprise* updates
    if (t >= 0.0 && text_surprise.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_surprise.tStart = t;  // (not accounting for frame time here)
      text_surprise.frameNStart = frameN;  // exact frame index
      
      text_surprise.setAutoDraw(true);
    }
    
    
    // *polygon_anger* updates
    if (t >= 0.0 && polygon_anger.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_anger.tStart = t;  // (not accounting for frame time here)
      polygon_anger.frameNStart = frameN;  // exact frame index
      
      polygon_anger.setAutoDraw(true);
    }
    
    
    // *text_anger* updates
    if (t >= 0.0 && text_anger.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_anger.tStart = t;  // (not accounting for frame time here)
      text_anger.frameNStart = frameN;  // exact frame index
      
      text_anger.setAutoDraw(true);
    }
    
    // *mouse* updates
    if (t >= 0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([polygon_sadness, polygon_disgust, polygon_fear, polygon_happiness, polygon_surprise, polygon_anger, text_disgust, text_surprise, text_anger, text_sadness, text_fear, text_happiness])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var emotion_clickables;
var clicked_emotion;
function responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'response' ---
    responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('response.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // Run 'End Routine' code from code
    emotion_clickables = [polygon_sadness, polygon_disgust, polygon_fear, polygon_happiness, polygon_surprise, polygon_anger, text_sadness, text_disgust, text_fear, text_happiness, text_surprise, text_anger];
    clicked_emotion = null;
    for (var stim, _pj_c = 0, _pj_a = emotion_clickables, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        stim = _pj_a[_pj_c];
        if (mouse.isPressedIn(stim)) {
            clicked_emotion = stim.name;
        }
    }
    if (clicked_emotion) {
        clicked_emotion = clicked_emotion.replace("polygon_", "").replace("text_", "");
        if ((clicked_emotion === emotion)) {
            psychoJS.experiment.addData("emotion_correct", 1);
        } else {
            psychoJS.experiment.addData("emotion_correct", 0);
        }
    } else {
        psychoJS.experiment.addData("emotion_correct", "no_response");
    }
    psychoJS.experiment.addData("emotion_response", clicked_emotion);
    
    // the Routine "response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var confidenceMaxDurationReached;
var confidenceMaxDuration;
var confidenceComponents;
function confidenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'confidence' ---
    t = 0;
    confidenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    confidenceMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_3.mouseClock.reset();
    psychoJS.experiment.addData('confidence.started', globalClock.getTime());
    confidenceMaxDuration = null
    // keep track of which components have finished
    confidenceComponents = [];
    confidenceComponents.push(question_confidence);
    confidenceComponents.push(polygon_confidence1);
    confidenceComponents.push(polygon_confidence2);
    confidenceComponents.push(polygon_confidence3);
    confidenceComponents.push(polygon_confidence4);
    confidenceComponents.push(confidence_fullysure1);
    confidenceComponents.push(confidence_verysure2);
    confidenceComponents.push(confidence_unsure3);
    confidenceComponents.push(confidence_guessed4);
    confidenceComponents.push(confidence_text1);
    confidenceComponents.push(confidence_text2);
    confidenceComponents.push(confidence_text3);
    confidenceComponents.push(confidence_text4);
    confidenceComponents.push(mouse_3);
    
    confidenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function confidenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'confidence' ---
    // get current time
    t = confidenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_confidence* updates
    if (t >= 0.0 && question_confidence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_confidence.tStart = t;  // (not accounting for frame time here)
      question_confidence.frameNStart = frameN;  // exact frame index
      
      question_confidence.setAutoDraw(true);
    }
    
    
    // *polygon_confidence1* updates
    if (t >= 0.0 && polygon_confidence1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_confidence1.tStart = t;  // (not accounting for frame time here)
      polygon_confidence1.frameNStart = frameN;  // exact frame index
      
      polygon_confidence1.setAutoDraw(true);
    }
    
    
    // *polygon_confidence2* updates
    if (t >= 0.0 && polygon_confidence2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_confidence2.tStart = t;  // (not accounting for frame time here)
      polygon_confidence2.frameNStart = frameN;  // exact frame index
      
      polygon_confidence2.setAutoDraw(true);
    }
    
    
    // *polygon_confidence3* updates
    if (t >= 0.0 && polygon_confidence3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_confidence3.tStart = t;  // (not accounting for frame time here)
      polygon_confidence3.frameNStart = frameN;  // exact frame index
      
      polygon_confidence3.setAutoDraw(true);
    }
    
    
    // *polygon_confidence4* updates
    if (t >= 0.0 && polygon_confidence4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_confidence4.tStart = t;  // (not accounting for frame time here)
      polygon_confidence4.frameNStart = frameN;  // exact frame index
      
      polygon_confidence4.setAutoDraw(true);
    }
    
    
    // *confidence_fullysure1* updates
    if (t >= 0.0 && confidence_fullysure1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_fullysure1.tStart = t;  // (not accounting for frame time here)
      confidence_fullysure1.frameNStart = frameN;  // exact frame index
      
      confidence_fullysure1.setAutoDraw(true);
    }
    
    
    // *confidence_verysure2* updates
    if (t >= 0.0 && confidence_verysure2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_verysure2.tStart = t;  // (not accounting for frame time here)
      confidence_verysure2.frameNStart = frameN;  // exact frame index
      
      confidence_verysure2.setAutoDraw(true);
    }
    
    
    // *confidence_unsure3* updates
    if (t >= 0.0 && confidence_unsure3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_unsure3.tStart = t;  // (not accounting for frame time here)
      confidence_unsure3.frameNStart = frameN;  // exact frame index
      
      confidence_unsure3.setAutoDraw(true);
    }
    
    
    // *confidence_guessed4* updates
    if (t >= 0.0 && confidence_guessed4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_guessed4.tStart = t;  // (not accounting for frame time here)
      confidence_guessed4.frameNStart = frameN;  // exact frame index
      
      confidence_guessed4.setAutoDraw(true);
    }
    
    
    // *confidence_text1* updates
    if (t >= 0.0 && confidence_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_text1.tStart = t;  // (not accounting for frame time here)
      confidence_text1.frameNStart = frameN;  // exact frame index
      
      confidence_text1.setAutoDraw(true);
    }
    
    
    // *confidence_text2* updates
    if (t >= 0.0 && confidence_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_text2.tStart = t;  // (not accounting for frame time here)
      confidence_text2.frameNStart = frameN;  // exact frame index
      
      confidence_text2.setAutoDraw(true);
    }
    
    
    // *confidence_text3* updates
    if (t >= 0.0 && confidence_text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_text3.tStart = t;  // (not accounting for frame time here)
      confidence_text3.frameNStart = frameN;  // exact frame index
      
      confidence_text3.setAutoDraw(true);
    }
    
    
    // *confidence_text4* updates
    if (t >= 0.0 && confidence_text4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      confidence_text4.tStart = t;  // (not accounting for frame time here)
      confidence_text4.frameNStart = frameN;  // exact frame index
      
      confidence_text4.setAutoDraw(true);
    }
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_3.clickableObjects = eval([polygon_confidence1, polygon_confidence2, polygon_confidence3, polygon_confidence4, confidence_fullysure1, confidence_verysure2, confidence_unsure3, confidence_guessed4, confidence_text1, confidence_text2, confidence_text3, confidence_text4])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_3.clickableObjects)) {
              mouse_3.clickableObjects = [mouse_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_3.clickableObjects) {
              if (obj.contains(mouse_3)) {
                  gotValidClick = true;
                  mouse_3.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_3.clicked_name.push(null);
          }
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    confidenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var confidence_clickables;
var clicked_confidence;
var confidence_level;
function confidenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'confidence' ---
    confidenceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('confidence.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_3.x', mouse_3.x);
    psychoJS.experiment.addData('mouse_3.y', mouse_3.y);
    psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton);
    psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton);
    psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton);
    psychoJS.experiment.addData('mouse_3.time', mouse_3.time);
    psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name);
    
    // Run 'End Routine' code from code_2
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    confidence_clickables = [polygon_confidence1, polygon_confidence2, polygon_confidence3, polygon_confidence4, confidence_fullysure1, confidence_verysure2, confidence_unsure3, confidence_guessed4, confidence_text1, confidence_text2, confidence_text3, confidence_text4];
    clicked_confidence = null;
    confidence_level = null;
    for (var stim, _pj_c = 0, _pj_a = confidence_clickables, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        stim = _pj_a[_pj_c];
        if (mouse.isPressedIn(stim)) {
            clicked_confidence = stim.name;
            break;
        }
    }
    if (clicked_confidence) {
        if ((_pj.in_es6("confidence1", clicked_confidence) || _pj.in_es6("fullysure", clicked_confidence))) {
            confidence_level = "fully_sure";
        } else {
            if ((_pj.in_es6("confidence2", clicked_confidence) || _pj.in_es6("verysure", clicked_confidence))) {
                confidence_level = "very_sure";
            } else {
                if ((_pj.in_es6("confidence3", clicked_confidence) || _pj.in_es6("unsure", clicked_confidence))) {
                    confidence_level = "unsure";
                } else {
                    if ((_pj.in_es6("confidence4", clicked_confidence) || _pj.in_es6("guessed", clicked_confidence))) {
                        confidence_level = "guessed";
                    }
                }
            }
        }
        psychoJS.experiment.addData("confidence_rating", confidence_level);
    } else {
        psychoJS.experiment.addData("confidence_rating", "no_response");
    }
    if ((mouse.getPressed()[0] === 0)) {
        console.log("Warning: No click detected for confidence rating");
    }
    
    // the Routine "confidence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var brake_routineMaxDurationReached;
var _key_resp_allKeys;
var brake_routineMaxDuration;
var brake_routineComponents;
function brake_routineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'brake_routine' ---
    t = 0;
    brake_routineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    brake_routineMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // Run 'Begin Routine' code from code_3
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((! _pj.in_es6(trials.thisTrialN, [Number.parseInt((trials.nTotal / 2))]))) {
        continueRoutine = false;
    }
    
    psychoJS.experiment.addData('brake_routine.started', globalClock.getTime());
    brake_routineMaxDuration = null
    // keep track of which components have finished
    brake_routineComponents = [];
    brake_routineComponents.push(text);
    brake_routineComponents.push(key_resp);
    
    brake_routineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function brake_routineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'brake_routine' ---
    // get current time
    t = brake_routineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    brake_routineComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function brake_routineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'brake_routine' ---
    brake_routineComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('brake_routine.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "brake_routine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
