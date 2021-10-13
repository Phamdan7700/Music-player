

class UI {
    constructor() {
        this.playBtn = document.getElementById('btn-play');
        this.repeatBtn = document.getElementById('btn-repeat');
        this.backwardBtn = document.getElementById('btn-backward');
        this.forwardBtn = document.getElementById('btn-forward');
        this.randomBtn = document.getElementById('btn-random');
        this.playList = document.getElementsByClassName('song');
        this.thumbnail = document.querySelector('#thumbnail img')
        this.durationControl = document.getElementById('duration')


    }


    renderPlayList(playListData) {
        let listDataArr = playListData.map((song) => {
            return `
            <li class="song" data-sound="${song.audio}">
                <img src="./assets/img/${song.thumbnail}" alt="">
                <div class="song-info">
                    <h3>${song.title}</h3>
                    <span>${song.artist}</span>
                </div>
                <span><i class="fas fa-ellipsis-h"></i></span>
            </li>
            `;
        });
        let playListWraper = document.getElementById('playlist-wrapper');
        playListWraper.innerHTML = listDataArr.join('');
    }



    activeCurrentSong(currentSong) {
        let activeSong = document.querySelector('.song.active')
        activeSong?.classList.remove('active');
        currentSong.classList.add('active')
        this.thumbnail.classList.add('rotate');
    }



}