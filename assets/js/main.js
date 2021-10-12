const songs = [
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
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
    },
    {
        id: 3,
        title: "Sai Cách Yêu",
        artist: "Lê Bảo Bình",
        thumbnail: 'lebaobinh.jpg',
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
    },
    {
        id: 4,
        title: "Người Lạ Thoáng Qua",
        artist: "Đinh Tùng Huy, ACV",
        thumbnail: 'Dinhtunghuy.jpg',
        audio: 'CauHenCauThe-DinhDung-6994741.mp3'
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
        this.song = document.getElementById('song')
        this.ui = new UI();
        this.play(this.song);
        this.ui.renderPlayList(songs)
        
    }

    play(song) {
        window.onclick = function() {
            // console.log(song);
            song.play();

        }
    }


}

let app = new MusicPlayer();