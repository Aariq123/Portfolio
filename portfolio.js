const write = document.querySelector('.write');


let message = ' designer';
let letter = message.split('');
let index = 0;

const time = setInterval(()=>{
    write.textContent += letter[index];
    

    if(index > letter.length-1){

     
            write.textContent = '';

        index=0;

    }
    else{
        index++
    }


}, 600)





const theme = document.querySelectorAll('.theme div');
const themeStyle = document.querySelector('#theme-style');

let themeColor = localStorage.getItem('theme');

  

if(theme == null){
    themeStyle.href = 'white.css';
}else{
    themeStyle.href = `${localStorage.getItem('theme')}.css`;
}




theme.forEach(div =>{
    div.addEventListener('click', (e)=>{
        if(e.target.classList == 'purple'){
            themeStyle.href = 'purple.css';
            localStorage.setItem('theme','purple' )
        }

        if(e.target.classList == 'white'){
            themeStyle.href = 'white.css';
            localStorage.setItem('theme', 'white')
        }
        if(e.target.classList == 'green'){
            themeStyle.href = 'green.css';
            localStorage.setItem('theme','green')
        }
        
      
    })
})




