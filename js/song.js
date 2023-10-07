// Initialize an array to store song data
const songs = [
    {
        title: 'GODS League of Legends',
        videoURL: 'https://youtu.be/C3GouGa0noM',
        imageURL: 'assets/gods.jpg'
    },
    {
        title: 'ASAP',
        videoURL: 'https://youtu.be/dJdqn5v4Dkw',
        imageURL: 'assets/asap.jpg'
    },
    {
        title: 'Cool With You',
        videoURL: 'https://youtu.be/zsYSSVoQnP4',
        imageURL: 'assets/coolwithyou.jpg'
    },
    {
        title: 'ETA',
        videoURL: 'https://youtu.be/jOTfBlKSQYY',
        imageURL: 'assets/eta.jpg'
    },
    {
        title: 'Super Shy',
        videoURL: 'https://youtu.be/ArmDp-zijuc',
        imageURL: 'assets/supershy.jpg'
    },
    {
        title: 'NewJeans',
        videoURL: 'https://youtu.be/kcelgrGY1h8',
        imageURL: 'assets/newjeans.jpg'
    },
    {
        title: 'Zero',
        videoURL: 'https://youtu.be/XIOoqJyx8E4',
        imageURL: 'assets/zero.jpg'
    },
    {
        title: 'OMG',
        videoURL: 'https://youtu.be/sVTy_wmn5SU',
        imageURL: 'assets/OMG.jpg'
    },
    {
        title: 'Ditto',
        videoURL: 'https://youtu.be/Km71Rr9K-Bw',
        imageURL: 'assets/ditto.jpg'
    },
    {
        title: 'Hypeboy',
        videoURL: 'https://youtu.be/11cta61wi0g',
        imageURL: 'assets/hypeboy.jpg'
    },
    {
        title: 'Attention',
        videoURL: 'https://youtu.be/x8RIixqumUc',
        imageURL: 'assets/attention.jpg'
    },
    {
        title: 'Cookie',
        videoURL: 'https://youtu.be/VOmIplFAGeg',
        imageURL: 'assets/cookie.jpg'
    },
    {
        title: 'Hurt',
        videoURL: 'https://youtu.be/tVIXY14aJms',
        imageURL: 'assets/hurt.jpg'
    },
];


// Initial population of the song list
const songList = document.getElementById('songList');
songs.forEach((song) => {
    const listItem = document.createElement('li');
    listItem.className = 'flex flex-col items-center w-[300px] transition-all duration-300 hover:scale-110 hover:text-white';
    listItem.innerHTML = `
        <a href="${song.videoURL}" target="_blank"><img src="https://storage.googleapis.com/nj-img/${song.imageURL}" class="border-2 border-transparent rounded-[20px] transition-color duration-300 hover:border-white" alt=""></a>
        <h3 class="text-[20px]">${song.title}</h3>
    `;
    songList.appendChild(listItem);
});