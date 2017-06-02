'use strict';

/**
 * Global love counters
 * 
 * global is bad isn't it?
 */
var youDontLoveMe = 0;
var youDoLoveMe = 0;

/**
 * The kind of loves
 */
var loves = ["No", "Yes"];

/**
 * True / False random generator. 
 */
function yesOrNo() {
  return Number(Math.random() >= 0.5);
}

/**
 * Button event handler.
 */
function checkLoveBtnClick() {
  var loveMeter = $('#loveMeter');
  var theAnswerIs = yesOrNo();
  var theLoveIs = loves[parseInt(theAnswerIs)];

  var loveCount = theAnswerIs ? ++youDoLoveMe : ++youDontLoveMe;

  var descriptionOfLove = theLoveIs + ' ' + loveCount + ' times.'

  loveMeter.text(descriptionOfLove);

}

/**
 * Main function.
 */
function recursiveLove() {
  var checkLoveBtn = $('#checkLoveBtn');

  checkLoveBtn.click(checkLoveBtnClick);
}
// Register event handler
$(recursiveLove);