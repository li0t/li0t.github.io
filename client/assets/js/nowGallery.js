'use strict';

/**
 * Global vars ... global is bad isn't it?
 */
var _var;
var kindOfaClockOptions =  
{
      id: 'kindOfaClockCanvas', 
      append:true, 
      returnContext:'2d' 
}

function createCanvas(options) {
  var canvas = document.createElement('canvas');
  canvas.id     = options.id || "myCanvas";
  canvas.width  = options.width || 1224;
  canvas.height = options.height || 768;
  canvas.style.zIndex   =( canvas.style && canvas.style.zIndex) || 8;
  canvas.style.position = ( canvas.style && canvas.style.position) ||  "absolute";
  canvas.style.border   = ( canvas.style && canvas.style.border) ||  "1px solid";

  if (options.append && options.parent) {
      parent.appendChild(canvas);
  } 

  if(options.returnContext) {
    return clockCanvas.getContext(options.returnContext);
  } else {
   return canvas;
  }
}

/**
 * KindofaClock
 */
function kindOfaClock() {
  var thisParent = $('#kindOfaClock');

  kindOfaClockOptions.height = thisParent.heigh
  kindOfaClockOptions.width = thisParent.width
  kindOfaClockOptions.parent = thisParent

  var  ctx = createCanvas(kindOfaClockOptions)

  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 100);
} 
   
/**
 * Main function.
 */
function thingsHappeningNow() {
 
}
      
// Register event handler
$(thingsHappeningNow);        