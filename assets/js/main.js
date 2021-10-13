const playListData = [
    {
        id: 1,
        title: "Người Lạ Thoáng Qua",
        artist: "Đinh Tùng Huy, ACV",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
    },
    {
        id: 2,
        title: "Em Là Con Thuyền Cô Đơn",
        artist: "Thái Học",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'EmLaConThuyenCoDonACVRemix-ThaiHoc-7098730.mp3'
    },
    {
        id: 3,
        title: "Sai Cách Yêu",
        artist: "Lê Bảo Bình",
        thumbnail: 'lebaobinh.jpg',
        audio: 'SaiCachYeuRemixVersion2-LeBaoBinh-7064489.mp3'
    },
    {
        id: 4,
        title: "Cô Đơn Dành Cho Ai",
        artist: "Lee Ken, Nal",
        thumbnail: 'codondanhchoai.jpg',
        audio: 'CoDonDanhChoAi-LeeKenNal-7068986.mp3'
    },
    {
        id: 5,
        title: "Người Lạ Thoáng Qua",
        artist: "Đinh Tùng Huy, ACV",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
    },
    {
        id: 6,
        title: "Người Lạ Thoáng Qua",
        artist: "Đinh Tùng Huy, ACV",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
    },
    {
        id: 7,
        title: "Người Lạ Thoáng Qua",
        artist: "Đinh Tùng Huy, ACV",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
    },
    {
        id: 8,
        title: "Người Lạ Thoáng Qua",
        artist: "Đinh Tùng Huy, ACV",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
    },
    {
        id: 9,
        title: "Người Lạ Thoáng Qua",
        artist: "Đinh Tùng Huy, ACV",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
    },
    {
        id: 10,
        title: "Người Lạ Thoáng Qua",
        artist: "Đinh Tùng Huy, ACV",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
    },
]

class MusicPlayer {
    constructor() {
        this.playListData = playListData;
        this.isPlaying = false
        this.currentSong = {
            audio: null,
            index: null
        };
        this.duration = 0;

        this.ui = new UI();
        this.ui.renderPlayList(this.playListData)
        this.start();
    }

    start() {

        let self = this;
        let playList = Array.from(document.getElementsByClassName('song'));
        playList.forEach((song, index) => {
            song.addEventListener('click', function () {
                self.loadCurrentSong(index);
            })
        });

        this.ui.playBtn.onclick = function () {
            self.isPlaying ? self.pause() : self.play();
        }

        this.ui.forwardBtn.onclick = function () {
            self.next(1)
        }

        this.ui.backwardBtn.onclick = function () {
            self.next(-1)
        }

        this.ui.randomBtn.onclick = function () {
            self.random();
        }





    }

    play() {
        if (this.currentSong.audio) {
            this.isPlaying = true;
            this.currentSong.audio.play();
            this.ui.playBtn.innerHTML = '<i class="far fa-pause-circle"></i>'
            this.ui.thumbnail.style.animationPlayState = 'running';

        }

    }

    pause() {
        if (this.currentSong.audio) {
            this.isPlaying = false;
            this.currentSong.audio.pause();
            this.ui.playBtn.innerHTML = '<i class="far fa-play-circle"></i>'
            this.ui.thumbnail.style.animationPlayState = 'paused';
        }
    }

    next(n) {
        this.currentSong.index += n
        let lastIndexAudio = this.playListData.length - 1
        if (this.currentSong.index < 0) {
            this.currentSong.index = 0
        }

        if (this.currentSong.index > lastIndexAudio) {
            this.currentSong.index = lastIndexAudio
        }

        this.loadCurrentSong(this.currentSong.index)

    }

    random() {
        this.currentSong.index = Math.floor(Math.random() * this.playListData.length)
        this.loadCurrentSong(this.currentSong.index)
    }


    loadCurrentSong(currentSongIndex) {
        this.ui.thumbnail.src = 'assets/img/' + playListData[currentSongIndex].thumbnail;
        this.pause();
        this.currentSong.audio = new Audio('assets/music/' + playListData[currentSongIndex]['audio']);
        this.currentSong.index = currentSongIndex;
        this.play();
        this.ui.activeCurrentSong(this.ui.playList[currentSongIndex]);

        this.currentSong.audio.ontimeupdate = () => {
            this.duration = this.currentSong.audio.duration
            this.ui.durationControl.max = this.duration
            this.ui.durationControl.value = this.currentSong.audio.currentTime;
            
        }

        this.ui.durationControl.oninput = (e) => {
            this.currentSong.audio.currentTime = e.target.value
        }

        this.currentSong.audio.onended = () => {
            this.loadCurrentSong(this.currentSong.index)
        }

    }

    editTime() {

    }





}

let app = new MusicPlayer();