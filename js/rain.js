var rainDayC = document.getElementById("rainDay");
var ctxWidth, ctxHeight;
var ctxR = rainDayC.getContext('2d');

rainDayC.gravity = rainDayC.GRAVITY_NON_LINEAR;

rainDayC.trail = rainDayC.TRAIL_DROPS;