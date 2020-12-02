export const toTimeString = seconds => {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;

  if (sec < 10) sec = `0${sec}`; // Pad zeroes

  return `${min}:${sec}`;
};
