function timeToWalk(steps, footprint, speed) {
   let distanceMeters = steps * footprint;
   let speedSeconds = speed / 3.6;
   let time = distanceMeters / speedSeconds;
   let rest = Math.floor(distanceMeters / 500);

   let hours = Math.floor(time / 3600);
   let minutes = Math.floor(time / 60);
   let seconds = Math.round(time - (minutes * 60));

   return `${String(hours).padStart(2, '0')}:${String(minutes + rest).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

console.log(
   timeToWalk(4000, 0.60, 5)
);

console.log(
   timeToWalk(2564, 0.70, 5.5)
);