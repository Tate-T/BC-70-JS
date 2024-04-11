const backdropElement = document.querySelector('.backdrop')
const modalElement = document.querySelector('.modal')
const closeModal = document.querySelector('.close-modal')

backdropElement.addEventListener('click', (e) => {
    console.log(`Це елемент на якому відбувся клік`,e.target)
    console.log(`Це елемент на якому висить слухач `,e.currentTarget)
})