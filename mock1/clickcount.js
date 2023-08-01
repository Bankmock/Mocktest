
    function incrementCount() {
      var countElement = document.getElementById("count");
      var currentCount = parseInt(countElement.innerText);

      if (currentCount < 35) {
        currentCount++;
        countElement.innerText = currentCount;
      }
    }
