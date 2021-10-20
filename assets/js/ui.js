

class UI {
    constructor() {
        this.title = document.getElementById('title')
        this.playBtn = document.getElementById('btn-play');
        this.repeatBtn = document.getElementById('btn-repeat');
        this.backwardBtn = document.getElementById('btn-backward');
        this.forwardBtn = document.getElementById('btn-forward');
        this.randomBtn = document.getElementById('btn-random');
        this.playList = document.getElementsByClassName('song');
        this.thumbnail = document.querySelector('#thumbnail img')
        this.durationControl = document.getElementById('duration')
        this.bg = document.querySelector('.bg')


    }


    renderPlayList(playListData) {
        let listDataArr = playListData.map((song) => {
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
        });
        let playListWraper = document.getElementById('playlist-wrapper');
        playListWraper.innerHTML = listDataArr.join('');
    }



    activeCurrentSong(index) {
        let activedSong = document.querySelector('.song.active')
        activedSong?.classList.remove('active');
        this.playList[index].classList.add('active')
        activedSong = document.querySelector('.song.active')
        let headerWidth = document.getElementById('header').offsetHeight;
        let offsetTop = activedSong.getBoundingClientRect();
        let scrollHeigh = activedSong.offsetTop;

        if (offsetTop.bottom > document.documentElement.clientHeight || offsetTop.top < headerWidth) {
            window.scrollTo(0, scrollHeigh - headerWidth - 10)
        }

        document.querySelector('.song.active').scrollTo()
        this.thumbnail.classList.add('rotate');
        this.title.innerText = playListData[index].title
    }



}