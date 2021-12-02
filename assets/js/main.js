const playListData = [
    {
        id: 1,
        title: "Ái Nộ - VinnieDePooh TikTok Remix",
        artist: "Masew x Khoi Vu",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'Ái Nộ - VinnieDePooh TikTok Remix - Bản Gốc - Masew x Khoi Vu.mp3'
    },
    {
        id: 2,
        title: "Câu Hứa Chưa Vẹn Tròn Remix",
        artist: "Phát Huy T4 x Dj Đại Mèo",
        thumbnail: '1617029681297_500.jpg',
        audio: 'Câu Hứa Chưa Vẹn Tròn Remix - ( Phát Huy T4 x Dj Đại Mèo ) Mình Đã Hứa Yêu Thật Lâu Remix Tik Tok.mp3'
    },
    {
        id: 3,
        title: "Đâu Còn Đây (Orinn Remix)",
        artist: "Nal x Lee Ken",
        thumbnail: '1633164445997_640.jpg',
        audio: 'Đâu Còn Đây (Orinn Remix) - Nal x Lee Ken - Nhạc Trẻ Edm Hot Tik Tok Gây Nghiện Hay Nhất 2021.mp3'
    },
    {
        id: 4,
        title: "Nói Với Em Một Lời Trước Khi Xa Rời",
        artist: "Không Bằng (RIN Music Remix)",
        thumbnail: 'lebaobinh.jpg',
        audio: 'Nói Với Em Một Lời Trước Khi Xa Rời - Không Bằng (RIN Music Remix) - Na.mp3'
    },
    {
        id: 5,
        title: "Cô Đơn Dành Cho Ai",
        artist: "Lee Ken, Nal",
        thumbnail: 'codondanhchoai.jpg',
        audio: 'CoDonDanhChoAi-LeeKenNal-7068986.mp3'
    },
    {
        id: 6,
        title: "Yêu Đừng Sợ Đau",
        artist: "Ngô Lan Hương",
        thumbnail: '1634284020524_500.jpg',
        audio: 'Yêu Đừng Sợ Đau - Ngô Lan Hương「Cukak Remix」- Audio Lyrics Video.mp3'
    },
    {
        id: 7,
        title: "Cưới Thôi",
        artist: "Masew, Masiu",
        thumbnail: '1631181753902_500.jpg',
        audio: 'CuoiThoi-MasewMasiuBRayTAPVietNam-7085648.mp3'
    },
    {
        id: 8,
        title: "Buồn Làm Chi Em Ơi",
        artist: "Hoài Lâm",
        thumbnail: '1591950830200_500.jpg',
        audio: 'BuonLamChiEmOi1-HoaiLam-6297318.mp3'
    },
    {
        id: 9,
        title: "Anh Không Tha Thứ",
        artist: "Đình Dũng, ACV",
        thumbnail: '1601278894694_500.jpg',
        audio: 'AnhKhongThaThu-DinhDung-6684271.mp3'
    },
    {
        id: 10,
        title: "Gặp Gỡ, Yêu Đương Và Được Bên Em",
        artist: "Phan Mạnh Quỳnh",
        thumbnail: '1628404241673_500.jpg',
        audio: 'GapGoYeuDuongVaDuocBenEm-PhanManhQuynh-7061898.mp3'
    },
    {
        id: 11,
        title: "Thay Lòng REMIX",
        artist: "Nal x TVK ( Đại Mèo Remix )",
        thumbnail: '1628404241673_500.jpg',
        audio: 'Thay Lòng REMIX - Nal x TVK ( Đại Mèo Remix ) - TẠM BIỆT NHÉ NGƯỜI ANH YÊU ANH CHÚC EM VUI BÊN NGƯỜI.mp3'
    },
]

class MusicPlayer {
    constructor() {
        this.playListData = playListData;
        this.isPlaying = false;
        this.isRandom = false;
        this.isRepeat = false;
        this.currentSong = {
            audio: null,
            index: null
        };
        this.duration = 0;

        this.ui = new UI();
        this.start();
    }

    start() {
        let self = this;
        this.ui.renderPlayList(this.playListData)
        let playList = Array.from(document.getElementsByClassName('song'));
        playList.forEach((song, index) => {
            song.addEventListener('click', function () {
                self.loadCurrentSong(index);
            })
        });

        this.ui.playBtn.onclick = () => {
            this.isPlaying ? this.pause() : this.play();
        }

        this.ui.forwardBtn.onclick = () => {
            this.next(1)
        }

        this.ui.backwardBtn.onclick = () => {
            this.next(-1)
        }

        this.ui.randomBtn.onclick = () => {
            this.isRandom = !this.isRandom;
            let color = '#fff';
            if (this.isRandom) {
                color = '#333';
            }
            this.ui.randomBtn.style.color = color;
        }

        this.ui.repeatBtn.onclick = () => {
            this.isRepeat = !this.isRepeat;
            let color = '#fff';
            if (this.isRepeat) {
                color = '#333';
            }
            this.ui.repeatBtn.style.color = color;
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
        if (this.isRandom) {
            this.random();
            return;
        }

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
        this.ui.bg.style.background = `radial-gradient(var(--colorStart), var(--colorStop) ), url(assets/img/${playListData[currentSongIndex].thumbnail}) no-repeat center / cover`;
        this.ui.bg.classList.add('fadeIn')
        this.ui.bg.onanimationend = () => {
            this.ui.bg.classList.remove('fadeIn')

        }
        this.pause();
        this.currentSong.audio = new Audio('assets/music/' + playListData[currentSongIndex]['audio']);
        this.currentSong.index = currentSongIndex;
        this.play();
        this.ui.activeCurrentSong(currentSongIndex);

        this.currentSong.audio.ontimeupdate = () => {
            this.duration = this.currentSong.audio.duration
            this.ui.durationControl.max = this.duration
            this.ui.durationControl.value = this.currentSong.audio.currentTime;

        }

        this.ui.durationControl.oninput = (e) => {
            this.currentSong.audio.currentTime = e.target.value

        }

        this.currentSong.audio.onended = () => {
            if (this.isRepeat) {
                this.loadCurrentSong(this.currentSong.index);
                return;

            }

            if (this.isRandom) {
                this.random();
                return;
            }

            this.loadCurrentSong(this.currentSong.index + 1)
        }

    }

}

let app = new MusicPlayer();
