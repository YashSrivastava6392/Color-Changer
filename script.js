const button = document.querySelectorAll('.box')
const body = document.querySelector('body')

button.forEach(function(box){
    box.addEventListener('click', function(color){
      if(color.target.id === 'box1'){
        body.style.backgroundColor= "#493628"
      }
      if(color.target.id === 'box2'){
        body.style.backgroundColor= "#AB886D"
      }
      if(color.target.id === 'box3'){
        body.style.backgroundColor= "#6A1E55"
      }
      if(color.target.id === 'box4'){
        body.style.backgroundColor= "#A64D79"
      }
      if(color.target.id === 'box5'){
        body.style.backgroundColor= "#F2BED1"
      }
    })
})