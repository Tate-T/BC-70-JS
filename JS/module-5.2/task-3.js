const playList = {
  playlistName: "Favorite",
  author: {
    authorName: "Liubov",
    country: "Ukraine",
  },
  songs: [
    {
      title: "Hello",
      duration: 10,
      isFavorite: true,
      top: true,
    },
    {
      title: "Fruit",
      duration: 5,
      isFavorite: false,
      top: true,
    },
    {
      title: "Love",
      duration: 3,
      isFavorite: true,
      top: false,
    },
    {
      title: "Friends",
      duration: 8,
      isFavorite: false,
      top: false,
    },
  ],
  isOnline: false,
};
console.log(playList.playlistName);
console.log(playList.author.authorName);
const a = playList.author.authorName;
// деструктуризуємо ключі
const {
  playlistName,
  author: { authorName: testAuthor, country },
  songs: mySomgs,
  isOnline,
} = playList;
console.log(testAuthor, "testAuthor");
console.log(playlistName);
console.log(country);
console.log(mySomgs);
// якщо плейліст грає онлайн - показати повідомленням назви улюблених пісень, а якщо ні - список top пісень

// const listSongs = (playList) => {
//    return playList.isOnline
//      ? playList.songs
//          .filter((song) => song.isFavorite)
//          .reduce((msg, el) => {
//            return msg + `${el.title}, `;
//          }, "Ваші улюблені пісні: ")
//          .slice(0, -2)
//      : playList.songs
//          .filter((song) => song.top)
//          .reduce((msg, el) => {
//            return msg + `${el.title}, `;
//          }, "Top пісні: ")
//          .slice(0, -2);
// }

// const listSongs = (playList) => {

//     return playList.isOnline
//       ? "Ваші улюблені пісні: " + playList.songs
//           .filter((song) => song.isFavorite)
//           .map((song) => song.title)
//           .join(", ")
//       : `Top-пісні плейлисту ${playList.playlistName} (автор ${playList.author.authorName}) : ` + playList.songs
//           .filter((song) => song.top)
//           .map((song) => song.title)
//           .join(", ");
// };
// console.log(listSongs(playList));

// деструктуризація
// const listSongs = (playList) => {
//   const { isOnline, playlistName, author, songs } = playList;
// або
const listSongs = ({ isOnline, playlistName, author, songs }) => {
  return isOnline
    ? "Ваші улюблені пісні: " +
        songs
          .filter((song) => song.isFavorite)
          .map((song) => song.title)
          .join(", ")
    : `Top-пісні плейлисту ${playlistName} (автор ${author.authorName}) : ` +
        songs
          .filter((song) => song.top)
          .map((song) => song.title)
          .join(", ");
};
console.log(listSongs(playList));

const sortSongs = (songs) => {
  return songs.toSorted((a, b) => {
    return b.title.localeCompare(a.title);
  });
};
console.log(sortSongs(playList.songs));
