const diller = {
  "Bulgarian": { en: "Bulgarian", bayrak: "🇧🇬", baslik: "Камък Ножица Хартия!", tur1: "👤 {isim}, избери!", tur2: "👤 {isim}, избери!", tas: "Камък", kagit: "Хартия", makas: "Ножица", kazan1: "🎉 {isim} спечели!", bera: "🤝 Равенство!", isimBaslik: "Въведете имената си", isim1Yer: "Играч 1", isim2Yer: "Играч 2", basla: "Старт 🎮", dilDegistirYazi: "🌐 Смени езика", aiIsim: "🤖 ИИ", insanYer: "Играч", macKazandi: "СПЕЧЕЛИ МАЧ! 🎉", yenidenOyna: "Играй отново 🔄", skor: "Резултат", modAI: "🤖 Срещу ИИ (VS AI)", mod2P: "👥 2 Играча" },
  "Czech": { en: "Czech", bayrak: "🇨🇿", baslik: "Kámen Nůžky Papír!", tur1: "👤 {isim}, vyber!", tur2: "👤 {isim}, vyber!", tas: "Kámen", kagit: "Papír", makas: "Nůžky", kazan1: "🎉 {isim} vyhrál!", bera: "🤝 Remíza!", isimBaslik: "Zadejte svá jména", isim1Yer: "Hráč 1", isim2Yer: "Hráč 2", basla: "Start 🎮", dilDegistirYazi: "🌐 Změnit jazyk", aiIsim: "🤖 AI", insanYer: "Hráč", macKazandi: "VYHRÁL ZÁPAS! 🎉", yenidenOyna: "Hrát znovu 🔄", skor: "Skóre", modAI: "🤖 Proti AI (VS AI)", mod2P: "👥 2 Hráči" },
  "Chinese": { en: "Chinese", bayrak: "🇨🇳", baslik: "石头剪刀布！", tur1: "👤 {isim}，选择！", tur2: "👤 {isim}，选择！", tas: "石头", kagit: "布", makas: "剪刀", kazan1: "🎉 {isim} 赢了！", bera: "🤝 平局！", isimBaslik: "请输入你们的名字", isim1Yer: "玩家1", isim2Yer: "玩家2", basla: "开始 🎮", dilDegistirYazi: "🌐 更改语言", aiIsim: "🤖 AI", insanYer: "玩家", macKazandi: "赢得比赛！🎉", yenidenOyna: "再玩一次 🔄", skor: "比分", modAI: "🤖 对战AI (VS AI)", mod2P: "👥 双人对战" },
  "Dutch": { en: "Dutch", bayrak: "🇳🇱", baslik: "Steen Schaar Papier!", tur1: "👤 {isim}, kies!", tur2: "👤 {isim}, kies!", tas: "Steen", kagit: "Papier", makas: "Schaar", kazan1: "🎉 {isim} wint!", bera: "🤝 Gelijkspel!", isimBaslik: "Voer jullie namen in", isim1Yer: "Speler 1", isim2Yer: "Speler 2", basla: "Start 🎮", dilDegistirYazi: "🌐 Taal wijzigen", aiIsim: "🤖 AI", insanYer: "Speler", macKazandi: "WINT HET SPEL! 🎉", yenidenOyna: "Opnieuw spelen 🔄", skor: "Score", modAI: "🤖 Tegen AI (VS AI)", mod2P: "👥 2 Spelers" },
  "English": { en: "English", bayrak: "🇬🇧", baslik: "Rock Paper Scissors!", tur1: "👤 {isim}, choose!", tur2: "👤 {isim}, choose!", tas: "Rock", kagit: "Paper", makas: "Scissors", kazan1: "🎉 {isim} wins!", bera: "🤝 Draw!", isimBaslik: "Enter your names", isim1Yer: "Player 1", isim2Yer: "Player 2", basla: "Start 🎮", dilDegistirYazi: "🌐 Change Language", aiIsim: "🤖 AI", insanYer: "Player", macKazandi: "WINS THE MATCH! 🎉", yenidenOyna: "Play Again 🔄", skor: "Score", modAI: "🤖 VS AI", mod2P: "👥 2 Players" },
  "French": { en: "French", bayrak: "🇫🇷", baslik: "Pierre Feuille Ciseaux!", tur1: "👤 {isim}, choisis!", tur2: "👤 {isim}, choisis!", tas: "Pierre", kagit: "Feuille", makas: "Ciseaux", kazan1: "🎉 {isim} gagne!", bera: "🤝 Égalité!", isimBaslik: "Entrez vos noms", isim1Yer: "Joueur 1", isim2Yer: "Joueur 2", basla: "Démarrer 🎮", dilDegistirYazi: "🌐 Changer de langue", aiIsim: "🤖 IA", insanYer: "Joueur", macKazandi: "GAGNE LE MATCH ! 🎉", yenidenOyna: "Rejouer 🔄", skor: "Score" },
  "German": { en: "German", bayrak: "🇩🇪", baslik: "Stein Schere Papier!", tur1: "👤 {isim}, wähle!", tur2: "👤 {isim}, wähle!", tas: "Stein", kagit: "Papier", makas: "Schere", kazan1: "🎉 {isim} gewinnt!", bera: "🤝 Unentschieden!", isimBaslik: "Gebt eure Namen ein", isim1Yer: "Spieler 1", isim2Yer: "Spieler 2", basla: "Start 🎮", dilDegistirYazi: "🌐 Sprache ändern", aiIsim: "🤖 KI", insanYer: "Spieler", macKazandi: "GEWINNT DAS SPIEL! 🎉", yenidenOyna: "Nochmal spielen 🔄", skor: "Punkte", modAI: "🤖 Gegen KI (VS AI)", mod2P: "👥 2 Spieler" },
  "Greek": { en: "Greek", bayrak: "🇬🇷", baslik: "Πέτρα Ψαλίδι Χαρτί!", tur1: "👤 {isim}, διάλεξε!", tur2: "👤 {isim}, διάλεξε!", tas: "Πέτρα", kagit: "Χαρτί", makas: "Ψαλίδι", kazan1: "🎉 {isim} κέρδισε!", bera: "🤝 Ισοπαλία!", isimBaslik: "Εισάγετε τα ονόματά σας", isim1Yer: "Παίκτης 1", isim2Yer: "Παίκτης 2", basla: "Έναρξη 🎮", dilDegistirYazi: "🌐 Αλλαγή γλώσσας", aiIsim: "🤖 ΤΝ", insanYer: "Παίκτης", macKazandi: "ΚΕΡΔΙΣΕ ΤΟ ΜΑΤΣ! 🎉", yenidenOyna: "Παίξε ξανά 🔄", skor: "Σκορ", modAI: "🤖 Εναντίον ΤΝ (VS AI)", mod2P: "👥 2 Παίκτες" },
  "Hindi": { en: "Hindi", bayrak: "🇮🇳", baslik: "पत्थर कैची कागज़!", tur1: "👤 {isim}, चुनो!", tur2: "👤 {isim}, चुनो!", tas: "पत्थर", kagit: "कागज़", makas: "कैंची", kazan1: "🎉 {isim} जीता!", bera: "🤝 बराबरी!", isimBaslik: "अपने नाम लिखें", isim1Yer: "खिलाड़ी 1", isim2Yer: "खिलाड़ी 2", basla: "शुरू करें 🎮", dilDegistirYazi: "🌐 भाषा बदलें", aiIsim: "🤖 AI", insanYer: "खिलाड़ी", macKazandi: "मैच जीता! 🎉", yenidenOyna: "फिर खेलें 🔄", skor: "स्कोर", modAI: "🤖 AI के विरुद्ध (VS AI)", mod2P: "👥 2 खिलाड़ी" },
  "Hungarian": { en: "Hungarian", bayrak: "🇭🇺", baslik: "Kő Papír Olló!", tur1: "👤 {isim}, válassz!", tur2: "👤 {isim}, válassz!", tas: "Kő", kagit: "Papír", makas: "Olló", kazan1: "🎉 {isim} nyert!", bera: "🤝 Döntetlen!", isimBaslik: "Írjátok be a neveteket", isim1Yer: "1. Játékos", isim2Yer: "2. Játékos", basla: "Start 🎮", dilDegistirYazi: "🌐 Nyelv váltása", aiIsim: "🤖 MI", insanYer: "Játékos", macKazandi: "NYERTE A MECCSET! 🎉", yenidenOyna: "Újra játszik 🔄", skor: "Pontszám", modAI: "🤖 MI Ellen (VS AI)", mod2P: "👥 2 Játékos" },
  "Italian": { en: "Italian", bayrak: "🇮🇹", baslik: "Sasso Carta Forbici!", tur1: "👤 {isim}, scegli!", tur2: "👤 {isim}, scegli!", tas: "Sasso", kagit: "Carta", makas: "Forbici", kazan1: "🎉 {isim} vince!", bera: "🤝 Pareggio!", isimBaslik: "Inserite i vostri nomi", isim1Yer: "Giocatore 1", isim2Yer: "Giocatore 2", basla: "Inizia 🎮", dilDegistirYazi: "🌐 Cambia lingua", aiIsim: "🤖 IA", insanYer: "Giocatore", macKazandi: "VINCE LA PARTITA! 🎉", yenidenOyna: "Gioca ancora 🔄", skor: "Punteggio", modAI: "🤖 Contro IA (VS AI)", mod2P: "👥 2 Giocatori" },
  "Japanese": { en: "Japanese", bayrak: "🇯🇵", baslik: "じゃんけんぽん！", tur1: "👤 {isim}、選んで！", tur2: "👤 {isim}、選んで！", tas: "グー", kagit: "パー", makas: "チョキ", kazan1: "🎉 {isim} の勝ち！", bera: "🤝 あいこ！", isimBaslik: "名前を入力してください", isim1Yer: "プレイヤー1", isim2Yer: "プレイヤー2", basla: "スタート 🎮", dilDegistirYazi: "🌐 言語を変更", aiIsim: "🤖 AI", insanYer: "プレイヤー", macKazandi: "試合に勝った！🎉", yenidenOyna: "もう一度 🔄", skor: "スコア", modAI: "🤖 AIと対戦 (VS AI)", mod2P: "👥 2人プレイ" },
  "Korean": { en: "Korean", bayrak: "🇰🇷", baslik: "가위바위보!", tur1: "👤 {isim}, 선택!", tur2: "👤 {isim}, 선택!", tas: "바위", kagit: "보", makas: "가위", kazan1: "🎉 {isim} 승리!", bera: "🤝 비겼다!", isimBaslik: "이름을 입력하세요", isim1Yer: "플레이어 1", isim2Yer: "플레이어 2", basla: "시작 🎮", dilDegistirYazi: "🌐 언어 변경", aiIsim: "🤖 AI", insanYer: "플레이어", macKazandi: "경기 승리! 🎉", yenidenOyna: "다시 하기 🔄", skor: "점수", modAI: "🤖 AI 대전 (VS AI)", mod2P: "👥 2인 플레이" },
  "Polish": { en: "Polish", bayrak: "🇵🇱", baslik: "Kamień Papier Nożyce!", tur1: "👤 {isim}, wybierz!", tur2: "👤 {isim}, wybierz!", tas: "Kamień", kagit: "Papier", makas: "Nożyce", kazan1: "🎉 {isim} wygrywa!", bera: "🤝 Remis!", isimBaslik: "Wpiszcie swoje imiona", isim1Yer: "Gracz 1", isim2Yer: "Gracz 2", basla: "Start 🎮", dilDegistirYazi: "🌐 Zmień język", aiIsim: "🤖 AI", insanYer: "Gracz", macKazandi: "WYGRAŁ MECZ! 🎉", yenidenOyna: "Zagraj ponownie 🔄", skor: "Wynik", modAI: "🤖 Przeciwko AI (VS AI)", mod2P: "👥 2 Graczy" },
  "Portuguese": { en: "Portuguese", bayrak: "🇵🇹", baslik: "Pedra Papel Tesoura!", tur1: "👤 {isim}, escolha!", tur2: "👤 {isim}, escolha!", tas: "Pedra", kagit: "Papel", makas: "Tesoura", kazan1: "🎉 {isim} venceu!", bera: "🤝 Empate!", isimBaslik: "Digite os seus nomes", isim1Yer: "Jogador 1", isim2Yer: "Jogador 2", basla: "Começar 🎮", dilDegistirYazi: "🌐 Mudar idioma", aiIsim: "🤖 IA", insanYer: "Jogador", macKazandi: "VENCEU O JOGO! 🎉", yenidenOyna: "Jogar novamente 🔄", skor: "Placar", modAI: "🤖 Contra IA (VS AI)", mod2P: "👥 2 Jogadores" },
  "Romanian": { en: "Romanian", bayrak: "🇷🇴", baslik: "Piatră Hârtie Foarfece!", tur1: "👤 {isim}, alege!", tur2: "👤 {isim}, alege!", tas: "Piatră", kagit: "Hârtie", makas: "Foarfece", kazan1: "🎉 {isim} câștigă!", bera: "🤝 Egal!", isimBaslik: "Introduceți numele voastre", isim1Yer: "Jucător 1", isim2Yer: "Jucător 2", basla: "Start 🎮", dilDegistirYazi: "🌐 Schimbă limba", aiIsim: "🤖 AI", insanYer: "Jucător", macKazandi: "A CÂȘTIGAT MECIUL! 🎉", yenidenOyna: "Joacă din nou 🔄", skor: "Scor", modAI: "🤖 Contra AI (VS AI)", mod2P: "👥 2 Jucători" },
  "Russian": { en: "Russian", bayrak: "🇷🇺", baslik: "Камень Ножницы Бумага!", tur1: "👤 {isim}, выбери!", tur2: "👤 {isim}, выбери!", tas: "Камень", kagit: "Бумага", makas: "Ножницы", kazan1: "🎉 {isim} победил!", bera: "🤝 Ничья!", isimBaslik: "Введите ваши имена", isim1Yer: "Игрок 1", isim2Yer: "Игрок 2", basla: "Старт 🎮", dilDegistirYazi: "🌐 Сменить язык", aiIsim: "🤖 ИИ", insanYer: "Игрок", macKazandi: "ВЫИГРАЛ МАТ! 🎉", yenidenOyna: "Играть снова 🔄", skor: "Счёт", modAI: "🤖 Против ИИ (VS AI)", mod2P: "👥 2 Игрока" },
  "Spanish": { en: "Spanish", bayrak: "🇪🇸", baslik: "Piedra Papel Tijera!", tur1: "👤 {isim}, elige!", tur2: "👤 {isim}, elige!", tas: "Piedra", kagit: "Papel", makas: "Tijera", kazan1: "🎉 ¡{isim} gana!", bera: "🤝 ¡Empate!", isimBaslik: "Ingresen sus nombres", isim1Yer: "Jugador 1", isim2Yer: "Jugador 2", basla: "Empezar 🎮", dilDegistirYazi: "🌐 Cambiar idioma", aiIsim: "🤖 IA", insanYer: "Jugador", macKazandi: "¡GANÓ EL PARTIDO! 🎉", yenidenOyna: "Jugar de nuevo 🔄", skor: "Puntos", modAI: "🤖 Contra IA (VS AI)", mod2P: "👥 2 Jugadores" },
  "Swedish": { en: "Swedish", bayrak: "🇸🇪", baslik: "Sten Sax Påсе!", tur1: "👤 {isim}, välj!", tur2: "👤 {isim}, välj!", tas: "Sten", kagit: "Påse", makas: "Sax", kazan1: "🎉 {isim} vinner!", bera: "🤝 Oavgjort!", isimBaslik: "Ange era namn", isim1Yer: "Spelare 1", isim2Yer: "Spelare 2", basla: "Starta 🎮", dilDegistirYazi: "🌐 Byt språk", aiIsim: "🤖 AI", insanYer: "Spelare", macKazandi: "VANN MATCHEN! 🎉", yenidenOyna: "Spela igen 🔄", skor: "Poäng", modAI: "🤖 Mot AI (VS AI)", mod2P: "👥 2 Spelare" },
  "Turkish": { en: "Turkish", bayrak: "🇹🇷", baslik: "Taş Kağıt Makas!", tur1: "👤 {isim}, seçimini yap!", tur2: "👤 {isim}, seçimini yap!", tas: "Taş", kagit: "Kağıt", makas: "Makas", kazan1: "🎉 {isim} Kazandı!", bera: "🤝 Berabere!", isimBaslik: "İsimlerinizi girin", isim1Yer: "1. Oyuncu", isim2Yer: "2. Oyuncu", basla: "Başla 🎮", dilDegistirYazi: "🌐 Dili Değiştir", aiIsim: "🤖 Yapay Zeka", insanYer: "İnsan", macKazandi: "MAÇI KAZANDI! 🎉", yenidenOyna: "Yeniden Oyna 🔄", skor: "Skor", modAI: "🤖 Yapay Zekaya Karşı (VS AI)", mod2P: "👥 2 Oyuncu" },
  "Ukrainian": { en: "Ukrainian", bayrak: "🇺🇦", baslik: "Камінь Ножиці Папір!", tur1: "👤 {isim}, вибери!", tur2: "👤 {isim}, вибери!", tas: "Камінь", kagit: "Папір", makas: "Ножиці", kazan1: "🎉 {isim} переміг!", bera: "🤝 Нічия!", isimBaslik: "Введіть ваші імена", isim1Yer: "Гравець 1", isim2Yer: "Гравець 2", basla: "Старт 🎮", dilDegistirYazi: "🌐 Змінити мову", aiIsim: "🤖 ШІ", insanYer: "Гравець", macKazandi: "ВИГРАВ МАТ! 🎉", yenidenOyna: "Грати знову 🔄", skor: "Рахунок", modAI: "🤖 Проти ШІ (VS AI)", mod2P: "👥 2 Гравці" }
};

let secilenDil = null;
let oyunModu = null; // 'ai' veya '2p'
let oyuncu1 = null;
let oyuncu2 = null;
let tur = 1;
let sayac = null;
let kalan = 8;
let skor1 = 0;
let skor2 = 0;
let oyuncu1Isim = "Oyuncu 1";
let oyuncu2Isim = "Oyuncu 2";
let macBitti = false;

const dilListe = document.getElementById("dil-liste");
Object.keys(diller).forEach(dil => {
  const btn = document.createElement("button");
  btn.className = "dil-btn";
  btn.innerHTML = `<span class="bayrak">${diller[dil].bayrak}</span> ${diller[dil].en}`;
  btn.onclick = () => dilSec(dil);
  dilListe.appendChild(btn);
});

function dilSec(dil) {
  secilenDil = diller[dil];
  document.getElementById("dil-secim").style.display = "none";
  document.getElementById("mod-secim").style.display = "flex";
  const modBtns = document.querySelectorAll("#mod-liste button");
  if (modBtns[0]) modBtns[0].textContent = secilenDil.modAI;
  if (modBtns[1]) modBtns[1].textContent = secilenDil.mod2P;
}

function modSec(mod) {
  oyunModu = mod;
  document.getElementById("mod-secim").style.display = "none";
  document.getElementById("isim-secim").style.display = "flex";
  
  document.getElementById("isim-baslik").textContent = secilenDil.isimBaslik;
  document.getElementById("btn-isim-onayla").textContent = secilenDil.basla;

  const i1 = document.getElementById("isim1");
  const i2 = document.getElementById("isim2");

  if (oyunModu === "ai") {
    i1.value = secilenDil.aiIsim;
    i1.disabled = true;
    i2.value = "";
    i2.placeholder = secilenDil.insanYer;
  } else {
    i1.value = "";
    i1.disabled = false;
    i1.placeholder = secilenDil.isim1Yer;
    i2.value = "";
    i2.placeholder = secilenDil.isim2Yer;
  }
}

function isimleriOnayla() {
  const i1 = document.getElementById("isim1").value.trim();
  const i2 = document.getElementById("isim2").value.trim();
  
  if (oyunModu === "ai") {
    oyuncu1Isim = secilenDil.aiIsim;
    oyuncu2Isim = i2 || secilenDil.insanYer;
  } else {
    oyuncu1Isim = i1 || secilenDil.isim1Yer;
    oyuncu2Isim = i2 || secilenDil.isim2Yer;
  }

  skor1 = 0;
  skor2 = 0;
  macBitti = false;
  document.getElementById("skor1").textContent = skor1;
  document.getElementById("skor2").textContent = skor2;

  document.getElementById("isim-secim").style.display = "none";
  document.getElementById("baslik").textContent = secilenDil.baslik;
  document.getElementById("btn-tas").textContent = secilenDil.tas;
  document.getElementById("btn-kagit").textContent = secilenDil.kagit;
  document.getElementById("btn-makas").textContent = secilenDil.makas;
  document.getElementById("btn-dil-degistir").textContent = secilenDil.dilDegistirYazi;

  turBaslat();
}

function turBaslat() {
  if (macBitti) return;

  clearInterval(sayac);
  document.getElementById("sonuc").innerHTML = "";
  document.getElementById("konfeti-katman").innerHTML = "";
  document.getElementById("oyun").style.display = "block";

  if (oyunModu === "ai") {
    // Yapay Zeka her zaman ilk gizli seçimini yapar
    const secenekler = ["tas", "kagit", "makas"];
    oyuncu1 = secenekler[Math.floor(Math.random() * secenekler.length)];
    
    // Sıra insana geçer (Oyuncu 2)
    tur = 2;
    document.getElementById("tur").textContent = secilenDil.tur2.replace("{isim}", oyuncu2Isim);
    sure();
  } else {
    oyuncu1 = null;
    oyuncu2 = null;
    tur = 1;
    document.getElementById("tur").textContent = secilenDil.tur1.replace("{isim}", oyuncu1Isim);
    sure();
  }
}

function dilDegistir() {
  clearInterval(sayac);
  document.getElementById("oyun").style.display = "none";
  document.getElementById("isim-secim").style.display = "none";
  document.getElementById("mod-secim").style.display = "none";
  document.getElementById("dil-secim").style.display = "flex";
  document.getElementById("sonuc").textContent = "";
}

function sure() {
  kalan = 8;
  document.getElementById("sure-yazi").textContent = kalan;
  document.getElementById("sure-bar").style.width = "100%";

  sayac = setInterval(() => {
    kalan--;
    document.getElementById("sure-yazi").textContent = kalan;
    document.getElementById("sure-bar").style.width = (kalan * 12.5) + "%";

    // Son 3 saniyede bip bip ses efekti
    if (kalan > 0 && kalan <= 3) sesTik();

    if (kalan <= 0) {
      clearInterval(sayac);
      // Süre bitince otomatik rastgele seçim yap
      const secenekler = ["tas", "kagit", "makas"];
      const rastgele = secenekler[Math.floor(Math.random() * secenekler.length)];
      sec(rastgele);
    }
  }, 1000);
}

function sec(secim) {
  clearInterval(sayac);
  sesSecim();

  if (oyunModu === "ai") {
    oyuncu2 = secim;
    sonucGoster();
  } else {
    if (tur === 1) {
      oyuncu1 = secim;
      tur = 2;
      document.getElementById("tur").textContent = secilenDil.tur2.replace("{isim}", oyuncu2Isim);
      sure();
    } else {
      oyuncu2 = secim;
      sonucGoster();
    }
  }
}

function sonucGoster() {
  let sonuc = "";
  let raundKazanan = 0; // 0: Berabere, 1: Oyuncu 1, 2: Oyuncu 2

  const simgeler = { tas: "🪨", kagit: "📄", makas: "✂️" };
  const hamleDetay = `<br><small>(${oyuncu1Isim}: ${simgeler[oyuncu1]} vs ${oyuncu2Isim}: ${simgeler[oyuncu2]})</small>`;

  if (oyuncu1 === oyuncu2) {
    sonuc = secilenDil.bera + hamleDetay;
    sesBerabere();
  } else if (
    (oyuncu1 === "tas" && oyuncu2 === "makas") ||
    (oyuncu1 === "kagit" && oyuncu2 === "tas") ||
    (oyuncu1 === "makas" && oyuncu2 === "kagit")
  ) {
    sonuc = secilenDil.kazan1.replace("{isim}", oyuncu1Isim) + hamleDetay;
    skor1++;
    document.getElementById("skor1").textContent = skor1;
    sesKazandi();
    raundKazanan = 1;
  } else {
    sonuc = secilenDil.kazan1.replace("{isim}", oyuncu2Isim) + hamleDetay;
    skor2++;
    document.getElementById("skor2").textContent = skor2;
    sesKazandi();
    raundKazanan = 2;
  }

  document.getElementById("oyun").style.display = "none";
  document.getElementById("sonuc").innerHTML = sonuc;

  if (raundKazanan > 0) {
    konfetiPatlat(35);
  }

  // İlk kim 5 puana ulaşırsa maçı bitir
  if (skor1 === 5 || skor2 === 5) {
    macBitti = true;
    const nihaiKazanan = skor1 === 5 ? oyuncu1Isim : oyuncu2Isim;
    
    setTimeout(() => {
      document.getElementById("sonuc").innerHTML = `
        <div style="margin-top:20px;">
          <h1 style="font-size:3.5rem; animation: pulse 1s infinite alternate;">🏆 ${nihaiKazanan} 🏆</h1>
          <h2 style="color:#ffed00; text-shadow: 0 0 10px rgba(0,0,0,0.5);">${secilenDil.macKazandi}</h2>
          <p style="font-size:1.8rem;">${secilenDil.skor}: ${skor1} - ${skor2}</p>
          <button onclick="isimleriOnayla()" style="
            background: linear-gradient(180deg, #26c89a, #007d5d);
            color: white; border: none; padding: 15px 35px;
            font-size: 1.5rem; border-radius: 15px; cursor: pointer; margin-top: 25px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          ">${secilenDil.yenidenOyna}</button>
        </div>
      `;
      sesFanfar();
      konfetiPatlat(90); // Büyük maç için yoğun aşağıdan yukarı konfeti
    }, 2000);
    return;
  }

  setTimeout(turBaslat, 3000);
}

// ---------------- SES EFEKTLERİ (WEB AUDIO API) ----------------
let audioCtx = null;
function sesAl() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function tonCal(freq, sure, tip, ses) {
  try {
    const ctx = sesAl();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = tip;
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(ses, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + sure);
    osc.start();
    osc.stop(ctx.currentTime + sure);
  } catch(e) { console.log(e); }
}

function sesSecim() { tonCal(420, 0.08, "sine", 0.15); }
function sesTik() { tonCal(880, 0.06, "square", 0.12); } // Crisp high beep
function sesBerabere() { tonCal(320, 0.4, "sawtooth", 0.18); }
function sesKazandi() {
  const notalar = [523, 659, 784, 1046];
  notalar.forEach((freq, i) => {
    setTimeout(() => tonCal(freq, 0.3, "triangle", 0.22), i * 120);
  });
}

// SUCCESS FANFARE TRUMPETS EFFECT
function sesFanfar() {
  try {
    const ctx = sesAl();
    const simdi = ctx.currentTime;
    // Triumphant fanfare arpeggio using rich sawtooth notes
    const ezgi = [
      { f: 392.00, d: 0.0, s: 0.15 }, // G4
      { f: 392.00, d: 0.18, s: 0.15 }, // G4
      { f: 392.00, d: 0.36, s: 0.15 }, // G4
      { f: 523.25, d: 0.54, s: 0.3 },  // C5
      { f: 659.25, d: 0.84, s: 0.3 },  // E5
      { f: 783.99, d: 1.14, s: 0.5 },  // G5
      { f: 1046.50, d: 1.64, s: 0.8 }  // C6 (High finish)
    ];

    ezgi.forEach(nota => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const biquad = ctx.createBiquadFilter();
      
      osc.type = "sawtooth"; 
      osc.frequency.value = nota.f;
      
      biquad.type = "lowpass";
      biquad.frequency.value = 1600; // Gives it a warmer, trumpet-like brass brass texture
      
      osc.connect(biquad);
      biquad.connect(gain);
      gain.connect(ctx.destination);
      
      gain.gain.setValueAtTime(0, simdi + nota.d);
      gain.gain.linearRampToValueAtTime(0.25, simdi + nota.d + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, simdi + nota.d + nota.s);
      
      osc.start(simdi + nota.d);
      osc.stop(simdi + nota.d + nota.s);
    });
  } catch(e) { console.log(e); }
}

// ---------------- KONFETİ (AŞAĞIDAN YUKARIYA FLOATING) ----------------
function konfetiPatlat(toplam) {
  const katman = document.getElementById("konfeti-katman");
  const emojiler = ["🎉", "🎊", "🎈", "✨", "👑", "⭐", "🏆"];

  for (let i = 0; i < toplam; i++) {
    const parca = document.createElement("span");
    parca.className = "parca";
    parca.textContent = emojiler[Math.floor(Math.random() * emojiler.length)];

    const sol = Math.random() * 100;
    const sure = 1.5 + Math.random() * 2.5;
    const gecikme = Math.random() * 0.5;
    const boyut = 2.5 + Math.random() * 2.5; // Significantly larger emojis as requested (2.5rem - 5rem)

    parca.style.left = sol + "vw";
    parca.style.fontSize = boyut + "rem";
    parca.style.animationDuration = sure + "s";
    parca.style.animationDelay = gecikme + "s";

    katman.appendChild(parca);

    setTimeout(() => parca.remove(), (sure + gecikme) * 1000 + 200);
  }
}
