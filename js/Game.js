mijnMa.Game = {};

mijnMa.Game.active = true;

mijnMa.nieuwUur = function(){
  requestAnimationFrame(mijnMa.nieuwUur);
  if(mijnMa.Game.active){
    mijnMa.student.uur++;
    mijnMa.Game.vak = rooster[mijnMa.student.uur%rooster.length];
    console.log(mijnMa.Game.vak,mijnMa.student)
    mijnMa.student.dag = Math.floor(mijnMa.student.uur/5.25);
    mijnMa.student.punten += 1/28;
  }
  if(Math.random()<0.01){
    mijnMa.Game.active = false;
  }
}

mijnMa.nieuwUur();
