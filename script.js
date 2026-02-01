  function showPopup() {
    // Delay popup until bounce finishes (400ms)
    setTimeout(() => {
      document.getElementById('popup').style.display = 'flex';
    }, 400);
  }

  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  function animateButton(btn) {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 400); // matches the bounce animation duration
  }