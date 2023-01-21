$(document).ready(() => {
    const menuBtn = $('i.fa-solid')

    menuBtn.click(() => {
        menuBtn.toggleClass('rotate-half')

        setTimeout(() => {
            menuBtn.toggleClass('fa-bars') // removes the bar-icon
            menuBtn.toggleClass('rotate-full fa-arrow-right-long') // rotates 
        }, 100)
    })
})