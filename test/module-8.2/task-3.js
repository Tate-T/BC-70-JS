// Деструктуризація масивів

let friends = ['John', 'Tori', 'Jason', 'Roma'];

// const firstFriend = friends[0];

// let [firstFriend, , thirdFriend, fourthFriend = 'no friend'] = friends;
// firstFriend = 'Anton';

// console.log(firstFriend, thirdFriend, fourthFriend)

// const [firstFriend, ...otherFriends] = friends;

// console.log(firstFriend, otherFriends);

let firstFriend;
let secondFriend;

[firstFriend, secondFriend] = friends;

console.log(firstFriend, secondFriend);