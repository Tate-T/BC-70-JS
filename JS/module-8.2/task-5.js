// Провести глибоку деструктуризацію об’єкту

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

// Розбили по артистах

const {
  count,
  artists: [artist1, artist2],
} = musicLibrary;

const { artist1Name, albums: firstArtistAlbums } = artist1;
const { artist2Name, albums: secondArtistAlbums } = artist2;

// Розбили артистів по альбомах

const [artist1Album1, artist1Album2] = firstArtistAlbums;
const [artist2Album1, artist2Album2] = secondArtistAlbums;

// console.log(artist1Album1, artist1Album2);

// Розбили альбоми по властивостях

const {
  title: artist1Album1Title,
  year: artist1Album1year,
  tracks: artist1Album1Tracks,
} = artist1Album1;
const {
  title: artist1Album2Title,
  year: artist1Album2year,
  tracks: artist1Album2Tracks,
} = artist1Album2;
const {
  title: artist2Album1Title,
  year: artist2Album1year,
  tracks: artist2Album1Tracks,
} = artist2Album1;
const {
  title: artist2Album2Title,
  year: artist2Album2year,
  tracks: artist2Album2Tracks,
} = artist2Album2;

// console.log(artist1Album1Title, artist1Album1year, artist1Album1Tracks);

// Розбили треки по одному

const [artist1Album1Track1, artist1Album1Track2, artist1Album1Track3] =
  artist1Album1Tracks;
const [artist1Album2Track1, artist1Album2Track2, artist1Album2Track3] =
  artist1Album2Tracks;
const [artist2Album1Track1, artist2Album1Track2, artist2Album1Track3] =
  artist2Album1Tracks;
const [artist2Album2Track1, artist2Album2Track2, artist2Album2Track3] =
  artist2Album2Tracks;

// console.log(artist1Album1Track1, artist1Album1Track2, artist1Album1Track3);

// Розбили треки по властивостям

const {
  title: artist1Album1Track1Title,
  duration: artist1Album1Track1Duration,
} = artist1Album1Track1;
const {
  title: artist1Album1Track2Title,
  duration: artist1Album1Track2Duration,
} = artist1Album1Track2;
const {
  title: artist1Album1Track3Title,
  duration: artist1Album1Track3Duration,
} = artist1Album1Track3;
const {
  title: artist1Album2Track1Title,
  duration: artist1Album2Track1Duration,
} = artist1Album2Track1;
const {
  title: artist1Album2Track2Title,
  duration: artist1Album2Track2Duration,
} = artist1Album2Track2;
const {
  title: artist1Album2Track3Title,
  duration: artist1Album2Track3Duration,
} = artist1Album2Track3;
const {
  title: artist2Album1Track1Title,
  duration: artist2Album1Track1Duration,
} = artist2Album1Track1;
const {
  title: artist2Album1Track2Title,
  duration: artist2Album1Track2Duration,
} = artist2Album1Track2;
const {
  title: artist2Album1Track3Title,
  duration: artist2Album1Track3Duration,
} = artist2Album1Track3;
const {
  title: artist2Album2Track1Title,
  duration: artist2Album2Track1Duration,
} = artist2Album2Track1;
const {
  title: artist2Album2Track2Title,
  duration: artist2Album2Track2Duration,
} = artist2Album2Track2;
const {
  title: artist2Album2Track3Title,
  duration: artist2Album2Track3Duration,
} = artist2Album2Track3;

console.log(artist1Album1Track1Title, artist1Album1Track1Duration);
