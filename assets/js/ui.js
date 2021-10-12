

class UI {
    constructor(songs) {
        this.playBtn      = document.getElementById('btn-play');
        this.repeatBtn    = document.getElementById('btn-repeat');
        this.backwardBtn  = document.getElementById('btn-backward');
        this.forwardBtn   = document.getElementById('btn-forward');
        this.randomBtn    = document.getElementById('btn-random');
        this.playList    = document.getElementById('play-list');

        this.songs = songs;
        this.isPlaying = false

    }


    renderPlayList(listData) {
        let listDataArr = listData.map((song => {
            return `
            <li class="song">
                <img src="./assets/img/${song.thumbnail}" alt="">
                <div class="song-info">
                    <h3>${song.title}</h3>
                    <span>${song.artist}</span>
                </div>
                <span><i class="fas fa-ellipsis-h"></i></span>
            </li>
            `;
        }));

        this.playList.innerHTML = listDataArr.join('');

        let songs = this.playList.querySelectorAll('.song');
        songs.forEach(song => {
            song.addEventListener('click', function() {
                document.querySelector('.song.active')?.classList.remove('active')
                this.classList.add('active')
            })
        })
    }

    handlePlay(currentSong) {

        this.playBtn.onclick = function(){
            if (this.isPlaying) {
                this.innerHTML  = '<i class="far fa-play-circle"></i>';
            }else {
                this.innerHTML = '<i class="far fa-pause-circle"></i>'
            }

            this.isPlaying = !this.isPlaying;
            
        }
    }
}