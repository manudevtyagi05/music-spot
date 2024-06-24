const music = new Audio("audio/1.mp3");
// music.play();

let songs = [
  {  
    id: "1",
    songName: `Agar Tum Saath Ho(From "Tamasha")<br />
    <div class="subtitle">A.R.Rahman,Alka Yagnik,Arijit Singh</div>`,
    poster: "img/1.jpeg",
  },
  {
    id: "2",
    songName: `Mann <br /> 
    <div class="subtitle">The Yellow Diary</div>`,
    poster: "img/2.jpeg",
  },
  {
    id: "3",
    songName: `Chor <br />
    <div class="subtitle">Justh</div>`,
    poster: "img/3.jpeg",
  },
  {
    id: "4",
    songName: `Rama Rama Ratate Ratate <br />
    <div class="subtitle">Shubham</div>`,
    poster: "img/4.jpeg",
  },
  {
    id: "5",
    songName: `Paisaa <br />
    <div class="subtitle">Kushal Grumpy</div>`,
    poster: "img/5.jpeg",
  },
  {
    id: "6",
    songName: `Kudrat <br />
    <div class="subtitle">NAALAYAK</div>`,
    poster: "img/6.jpeg",
  },
  {
    id: "7",
    songName: `Up To U <br />
    <div class="subtitle">Dhanda Nyoliwala</div>`,
    poster: "img/7.jpeg",
  },
  {
    id: "8",
    songName: `Baap Se <br />
    <div class="subtitle">Fotty Seven</div>`,
    poster: "img/8.jpeg",
  },
  {
    id: "9",
    songName: `Angaaron(From"Pushpa2The Rule) <br />
    <div class="subtitle">Shreya Ghoshal,Devi Sir Prasad,Raqueeb Alam </div>`,
    poster: "img/9.jpeg",
  },
  {
    id: "10",
    songName: `MVP <br />
    <div class="subtitle">Shubh</div>`,
    poster: "img/10.jpeg",
  },
  {
    id: "11",
    songName: `Cheques <br />
    <div class="subtitle">Shubh</div>`,
    poster: "img/11.jpeg",
  },
  {
    id: "12",
    songName: `One Love <br />
    <div class="subtitle">Shubh</div>`,
    poster: "img/12.jpeg",
  },
  {
    id: "13",
    songName: `Hass Hass <br />
    <div class="subtitle">Dilijit Dosanjh, Sia,Greg Kurstin</div>`,
    poster: "img/13.jpeg",
  },
  {
    id: "14",
    songName: `Softly <br />
    <div class="subtitle">Karan Aujla, lkky</div>`,
    poster: "img/14.jpeg",
  },
  {
    id: "15",
    songName: `Check It Out <br />
    <div class="subtitle">Parmish Verma,Paradox</div>`,
    poster: "img/15.jpeg",
  },
  {
    id: "16",
    songName: `With You <br />
    <div class="subtitle">AP Dhillon</div>`,
    poster: "img/16.jpeg",
  },
  {
    id: "17",
    songName: `Lemonade <br />
    <div class="subtitle">Diljit Dosanjh</div>`,
    poster: "img/17.jpeg",
  },
  {
    id: "18",
    songName: `Chora Baba Ka <br />
    <div class="subtitle">Raftaar,Dhanda Nyoliwala</div>`,
    poster: "img/18.jpeg",
  },
  {
    id: "19",
    songName: `Kajra Mohabbat Wala<br />
    <div class="subtitle">Rahul Jain</div>`,
    poster: "img/19.jpeg",
  },
  {
    id: "20",
    songName: `Laado <br />
    <div class="subtitle">MC SQUARE,Hiten</div>`,
    poster: "img/20.jpeg",
  },
];

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft += -330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 330;
});

pop_art_left.addEventListener("click", () => {
  item.scrollLeft += -330;
});


Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

// search data start 
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
  const {id, songName, poster} = element;
  let card = document.createElement('a');
  card.classList.add('card');
  card.href = "#" + id;
  card.innerHTML = `
  <img src="${poster}" alt="">
              <div class="content">
                ${songName}
               </div>
  `;
  search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
  let input_value = input.value.toUpperCase();
  let items = search_results.getElementsByTagName('a');

  for (let index = 0; index < items.length; index++) {
    let as =items[index].getElementsByClassName('content')[0];
    let text_value = as.textContent || as.innerHTML;
    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }
    
    if (input.value == 0) {
      search_results.style.display = "none";
    } else {
      search_results.style.display = "";
    }
  }
})
 
// search data end


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
  if(music.paused || music.currentTime <=0 ) {
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove("ri-play-fill");
    masterPlay.classList.add("ri-pause-fill");
  } else {
    music.pause();
    wave.classList.remove('active1');
    masterPlay.classList.add("ri-play-fill");
    masterPlay.classList.remove("ri-pause-fill");
  }
});

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
    el.style.background = 'rgb(105, 105, 105, .0)';
  })
}

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
    el.classList.add("ri-play-circle-fill");
    el.classList.remove("ri-pause-circle-fill");
  })
}



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
  e.addEventListener('click', (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove("ri-play-fill");
    masterPlay.classList.add("ri-pause-fill");
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach(elss => {
      let {songName} = elss;
      title.innerHTML = songName;
      download_music.setAttribute('download', songName  )
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"; 
    makeAllPlays();
    wave.classList.add('active1');
    el.target.classList.add('ri-pause-circle-fill');
    el.target.classList.remove('ri-play-circle-fill');
  });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration; 
  
  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  if(sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  
  currentEnd.innerText = `${min1}:${sec1}`;
  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  
    if(sec2 < 10) {
      sec2 = `0${sec2}`;
    }

  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', () => {
  music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
  if(vol.value == 0) {
    vol_icon.classList.remove('ri-volume-up-fill');
    vol_icon.classList.remove('ri-volume-down-fill');
    vol_icon.classList.add('ri-volume-mute-fill');
  } 
  if (vol.value > 0) {
    vol_icon.classList.remove('ri-volume-up-fill');
    vol_icon.classList.remove('ri-volume-mute-fill');
    vol_icon.classList.add('ri-volume-down-fill');
  }
  if (vol.value >50) {
    vol_icon.classList.add('ri-volume-up-fill');
    vol_icon.classList.remove('ri-volume-mute-fill');
    vol_icon.classList.remove('ri-volume-down-fill');
  }
  let vol_a = vol.value;
  vol_dot.style.left = `${vol_a}%`;
  vol_bar.style.width = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
  index -= 1;
  if(index < 1) {
    index = Array.from(document.getElementsByClassName('songItem')).length;
    
  }
  music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove("ri-play-fill");
    masterPlay.classList.add("ri-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach(elss => {
      let {songName} = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"; 
    makeAllPlays();
    wave.classList.add('active1');
    el.target.classList.add('ri-pause-circle-fill');
    el.target.classList.remove('ri-play-circle-fill');
})


next.addEventListener('click', () => {
  index ++;
  if(index > Array.from(document.getElementsByClassName('songItem')).length) {
    index = 1;
    
  }
  music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove("ri-play-fill");
    masterPlay.classList.add("ri-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach(elss => {
      let {songName} = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"; 
    makeAllPlays();
    wave.classList.add('active1');
    el.target.classList.add('ri-pause-circle-fill');
    el.target.classList.remove('ri-play-circle-fill');
})






let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
  let a = shuffle.innerHTML;
  
  switch (a) {
    case "next":
      shuffle.classList.add('ri-repeat-one-line');
      shuffle.classList.remove('ri-shuffle-fill');
      shuffle.classList.remove('ri-music-2-fill');
      shuffle.innerHTML = 'repeat';
      break;
      case "repeat":
        shuffle.classList.remove('ri-repeat-one-line');
        shuffle.classList.add('ri-shuffle-fill');
        shuffle.classList.remove('ri-music-2-fill');
        shuffle.innerHTML = 'random';
        break;
        case "random":
          shuffle.classList.remove('ri-repeat-one-line');
          shuffle.classList.remove('ri-shuffle-fill');
          shuffle.classList.add('ri-music-2-fill');
          shuffle.innerHTML = 'next';
          break;
          
        }
      })
      
      const next_music = () => {
        if (index == songs.length) {
          index = 1
        } else {
          index ++;
        }
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove("ri-play-fill");
        masterPlay.classList.add("ri-pause-fill");
        download_music.href = `audio/${index}.mp3`;
        
        let songTitles = songs.filter((els) => {
          return els.id == index;
        });
        
        songTitles.forEach(elss => {
          let {songName} = elss;
          title.innerHTML = songName;
          download_music.setAttribute('download', songName  )
        });
        
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"; 
        makeAllPlays();
        wave.classList.add('active1');
        el.target.classList.add('ri-pause-circle-fill');
        el.target.classList.remove('ri-play-circle-fill');
      }
      
      const repeat_music = () => {
        index;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove("ri-play-fill");
        masterPlay.classList.add("ri-pause-fill");
        repeat.classList.remove("ri-repeat-2-line");
        repeat.innerHTML = '<i class="ri-repeat-one-line"></i>';
        download_music.href = `audio/${index}.mp3`;
      
        let songTitles = songs.filter((els) => {
          return els.id == index;
        });
      
        songTitles.forEach(elss => {
          let {songName} = elss;
          title.innerHTML = songName;
          download_music.setAttribute('download', songName  )
        });
        
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"; 
        makeAllPlays();
        wave.classList.add('active1');
        el.target.classList.add('ri-pause-circle-fill');
        el.target.classList.remove('ri-play-circle-fill');
      }

const random_music = () => {
  if (index == songs.length) {
    index = 1
  } else {
    index = Math.floor((Math.random() * songs.length) + 1);
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpeg`;
  music.play();
  masterPlay.classList.remove("ri-play-fill");
  masterPlay.classList.add("ri-pause-fill");
  download_music.href = `audio/${index}.mp3`;

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach(elss => {
    let {songName} = elss;
    title.innerHTML = songName;
    download_music.setAttribute('download', songName  )
  });
  
  makeAllBackground();
  Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)"; 
  makeAllPlays();
  wave.classList.add('active1');
  el.target.classList.add('ri-pause-circle-fill');
  el.target.classList.remove('ri-play-circle-fill');
}

music.addEventListener('ended', () => {
  let b = shuffle.innerHTML;

  switch (b) {
    case 'next':
      next_music();
      break;
    case 'repeat':
      repeat_music();
      break;
    case 'random':
      random_music();
      break;
  }
  
})
