// document.querySelector('.Left-Section-TopStories').addEventListener('mouseenter', function(){
//     console.log("Mouse entered into the Top Stories section in which the first news is of the PIG face Donalt Trump who is a real bastered");
// })


// document.querySelector('.Left-Section-TopStories').addEventListener('mouseleave', function(){
//     console.log("Mouse is leaved from the Basterd Donalt J. Trump News");
// })


document.querySelector('.Left-Section-TopStories').addEventListener('mouseenter', function(){
    document.querySelector('.Left-Section-TopStories').style.background = 'pink';
})

document.querySelector('.Left-Section-TopStories').addEventListener('mouseleave', function(){
    document.querySelector('.Left-Section-TopStories').style.background = 'yellow';
})