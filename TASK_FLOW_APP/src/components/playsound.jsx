
const sounds = {
  add:'/public/sounds/add.mp3',
  complete:'/public/sounds/complete.mp3',
  delete:'/public/sounds/delete.mp3',
  update:'/public/sounds/update.mp3'
}

export const playSound = (type) =>{
  const sound = sounds[type];
  if(!sound) return;
  
  const audio = new Audio(sound);
  audio.volume = 0.6
  audio.play().catch(()=>{});
}