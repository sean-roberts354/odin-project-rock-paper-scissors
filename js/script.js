function getRandomNumberInRange(rangeStart, rangeEnd) {
      let randomNum = Math.floor((Math.random() * rangeEnd) + rangeStart)
      
      if (rangeStart <= randomNum <= rangeEnd) {
            return randomNum;
      } else {
            return "ERROR: Number out of specified range"
      }
}



















document.querySelector(".function-test").addEventListener('click', () => {
      console.log(getRandomNumberInRange(1, 10));
});