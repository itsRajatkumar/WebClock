setInterval(() => {
  date = new Date();
  htime = date.getHours();
  mtime = date.getMinutes();
  stime = date.getSeconds();
  
  
  hr = 30 * htime + mtime / 2;
  mr = 6 * mtime + stime / 10;
  sr = 6 * stime;

  hour.style.transform = `rotate(${hr}deg)`
  minute.style.transform = `rotate(${mr}deg)`
  second.style.transform = `rotate(${sr}deg)`
  
  hstime = htime;
  mstime=mtime;
  sstime=stime;
  txt = 'AM';
  if (htime > 12) {
    hstime = htime - 12;
    txt = 'PM'
  }
  
  if (hstime < 10){
    hstime='0'+hstime;
  }
  if (mstime < 10){
    mstime='0'+mstime;
  }
  if (sstime < 10){
    sstime='0'+sstime;
  }
  document.getElementById('hr').innerText = hstime;
  document.getElementById('mn').innerText = mstime;
  document.getElementById('sc').innerText = sstime;
  document.getElementById('ampm').innerText = txt;


}, 1000);