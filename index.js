$(document).ready(() => {
    const menuBtn = $('.fa-bars')

    menuBtn.click(() => {
        menuBtn.toggleClass('open')
        // console.log(menuBtn.html())
    })
})