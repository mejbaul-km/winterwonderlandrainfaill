window.addEventListener("load", () => {
    // (PART A) GET BGM
    const bgm = document.getElementById("bgm");
   
    // (PART B) AUTOPLAY NOT ALLOWED - SHOW "PLAY BUTTON"
    if (bgm.paused) {
      // (B1) GET "PLAY BUTTON"
      let play = document.getElementById("play");
   
      // (B2) CLICK TO PLAY
      play.onclick = () => {
        bgm.play();
        play.classList.remove("show");
      };
   
      // (B3) SHOW "PLAY BUTTON"
      play.classList.add("show");
    }
  });
  
  function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleUrl, '_blank');
    } else {
        alert('Please enter a search term!');
    }
}