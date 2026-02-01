<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Happy Birthday!</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ffd1dc, #ffe3e3);
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
    }

    .container {
      max-width: 500px;
      width: 100%;
    }

    .card {
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      padding: 30px 20px;
      text-align: center;
      animation: fadeIn 2s ease;
    }

    h1 {
      color: #ff4d6d;
      margin-bottom: 20px;
    }

    .photo {
      width: 80%;
      max-height: 280px;
      object-fit: cover;
      border-radius: 15px;
      margin-bottom: 20px;
      transition: transform 0.3s ease;
    }

    .photo:hover {
      transform: scale(1.05);
    }

    .message {
      font-size: 1.1rem;
      color: #444;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .from {
      font-size: 1rem;
      color: #888;
    }

    .surprise-btn {
      margin-top: 15px;
      padding: 12px 20px;
      background-color: #ff4d6d;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .surprise-btn:hover {
      background-color: #ff1e50;
    }

    /* 🔥 Button Click Animation */
    @keyframes clickBounce {
      0% { transform: scale(1); }
      30% { transform: scale(0.9); }
      50% { transform: scale(1.05); }
      70% { transform: scale(0.97); }
      100% { transform: scale(1); }
    }

    .surprise-btn.clicked {
      animation: clickBounce 0.4s ease;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .popup {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      justify-content: center;
      align-items: center;
      z-index: 100;
    }

    .popup-content {
      background: white;
      padding: 30px;
      border-radius: 15px;
      text-align: center;
      max-width: 90%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      animation: popupFadeIn 0.5s ease;
      position: relative;
    }

    .popup-content h2 {
      color: #ff4d6d;
      margin-bottom: 15px;
    }

    .popup-content p {
      color: #444;
      font-size: 1rem;
      line-height: 1.5;
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 2rem;
      color: #ff4d6d;
      cursor: pointer;
    }

    @keyframes popupFadeIn {
      from {
        transform: scale(0.9);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .card {
        padding: 20px 15px;
      }

      .message {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h1>🎉 Happy Birthday, Kavana Akka! 🎂</h1>
      <img src="friend.jpg" alt="Birthday Girl" class="photo" />

      <p class="message">
        Wishing you a day filled with love, laughter, cake, and everything you deserve!  
        May this year bring you happiness and dreams coming true. 💖✨  
        <br><br>
        You’re the ultimate teammate — even when you steal my loot and blame me all the time.  
        It's just fun to play with you! 🎮❤️
      </p>

      <p class="from">“The teammate you didn’t ask for, but got matched with anyway. Your certified reviver”

 <br><strong>Nihar</strong></p>

      <button class="surprise-btn" onclick="animateButton(this); showPopup()">🎁 Click me for a surprise!</button>
    </div>
  </div>

  <!-- Surprise Popup -->
  <div class="popup" id="popup">
    <div class="popup-content">
      <span class="close-btn" onclick="hidePopup()">×</span>
      <h2>🎁 Surprise!</h2>
      <p>You're not just leveling up in age...<br>
      You're leveling up in awesomeness too! 💥<br><br>
      "You steal my kills,crash my buggy,and still somehow survive- iconic"</p>
    </div>
  </div>

  <script>
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
</script>

</body>
</html>
