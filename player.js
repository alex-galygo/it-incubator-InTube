// data

const playlist1 = {
    name: 'Education Videos',
    videos: [
        {
            file_url: 'video/back-end.mp4',
            video_logo: 'assets/images/java-script-2.png',
            title: 'JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator',
            author: 'It-Kamasutra',
            realised: '12 hours ago',
        },
        {
            file_url: 'video/back-end.mp4',
            video_logo: 'assets/images/java-script-3.png',
            title: 'JavaScript - The Way of the Samurai, installing VS code, code editor',
            author: 'It-Kamasutra',
            realised: '1 week ago',
        },
        {
            file_url: 'video/back-end.mp4',
            video_logo: 'assets/images/back-end.png',
            title: 'Reboot - express + typescript + nodemon / Back-end - The Samurai Way',
            author: 'It-Kamasutra',
            realised: '2 week ago',
        },
    ]
}

const playlist2 = {
    name: 'Online training sports',
    videos: [
        {
            file_url: 'video/back-end.mp4',
            video_logo: 'assets/images/full-bod.png',
            title: '20 MIN FULL BODY WORKOUT - Beginner Version // No Equipment I Pamela Reif',
            author: 'Pamela Reif',
            realised: '12 hours ago',
        },
        {
            file_url: 'video/back-end.mp4',
            video_logo: 'assets/images/yoga.png',
            title: 'Sports training online — filming and editing - Stretching Yoga',
            author: 'Seva Prihodko',
            realised: '1 week ago',
        },
        {
            file_url: 'video/back-end.mp4',
            video_logo: 'assets/images/full-body.png',
            title: 'PERFECT 20 MIN FULL BODY WORKOUT FOR BEGINNERS (No Equipment)',
            author: 'BullyJuice',
            realised: '2 week ago',
        },
    ]
}




// Render playlist

function renderPlaylist(playlist) {
    let playlistTitleElement = document.createElement('h2');
    playlistTitleElement.innerText = playlist.name;
    document.body.append(playlistTitleElement);

    renderVideos(playlist.videos)


}

// Render videos

function renderVideos(videos) {
    let videosElement = document.createElement('ul');
    document.body.append(videosElement);

    for (let i = 0; i < videos.length; i++) {
        let videoContainer = document.createElement('div');
        videosElement.append(videoContainer);

        let videosFileUrlElement = document.createElement('video');
        videosFileUrlElement.src = videos[i].file_url;
        videosFileUrlElement.poster = videos[i].video_logo; // установка логотипа в качестве превью
        videosFileUrlElement.controls = true;
        videoContainer.append(videosFileUrlElement);

        let videosTitleElement = document.createElement('h3');
        videosTitleElement.innerText = videos[i].title;
        videoContainer.append(videosTitleElement);

        let videosAuthorElement = document.createElement('h4');
        videosAuthorElement.innerText = videos[i].author;
        videoContainer.append(videosAuthorElement);

        let videosRealisedElement = document.createElement('h4');
        videosRealisedElement.innerText = videos[i].realised;
        videoContainer.append(videosRealisedElement);

        let videosDurationElement = document.createElement('h4');
        videoContainer.append(videosDurationElement);


    }
}

renderPlaylist(playlist1);
renderPlaylist(playlist2);


