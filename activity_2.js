let theme;
function dark()
{
    console.log("dark mode activated");
    theme='dark';
    let body=document.querySelector('body');
    console.log(body);
    body.style.backgroundColor='rgb(37, 37, 37)';

    let darkBtn=document.querySelector('#dark');
    console.log(darkBtn);
    darkBtn.style.display='none';
    let lightBtn=document.querySelector('#light');
    lightBtn.style.display='inline';
    let footer=document.querySelector('footer');
    footer.style.backgroundColor='rgb(104, 119, 132)';

    let a=document.querySelectorAll('footer a');
    for(aa of a)
    {
        aa.style.color='rgb(156, 211, 100)';
    }

    let header=document.querySelector('header');
    header.style.backgroundColor='rgb(50, 62, 37)';

    localStorage.setItem('theme',theme);
    
}
function light()
{
    console.log("light mode activated");
    theme='light';
    let body=document.querySelector('body');
    console.log(body);
    body.style.backgroundColor='rgb(219, 221, 224)';

    let darkBtn=document.querySelector('#dark');
    console.log(darkBtn);
    darkBtn.style.display='inline';
    let lightBtn=document.querySelector('#light');
    lightBtn.style.display='none';

    let footer=document.querySelector('footer');
    footer.style.backgroundColor='rgb(48, 55, 61)';

    let a=document.querySelectorAll('footer a');
    for(aa of a)
    {
        aa.style.color='rgb(116, 152, 80)';
    }

    let header=document.querySelector('header');
    header.style.backgroundColor='rgb(116, 152, 80)';

    localStorage.setItem('theme',theme);

}

//checking the current theme 
window.addEventListener('DOMContentLoaded', () => {
    let chk = localStorage.getItem('theme');
    if (chk === 'dark') 
    {
        dark();
    } 
    else 
    {
        light();
    }
});

function check()
{
    let footer1=document.querySelector('#footer');
    let contact=document.querySelector('#contact');
    let cc1 = window.getComputedStyle(footer1).getPropertyValue('display');
    if(cc1==='none')
    {
        contact.setAttribute('href','#footer2');
    }
    else
    {
        contact.setAttribute('href','#footer');
    }
}
function about()
{
    let footer1=document.querySelector('#footer');
    let about=document.querySelector("#nav_about");
    let cc1 = window.getComputedStyle(footer1).getPropertyValue('display');
    if(cc1==='none')
    {
        about.setAttribute('href','#about2');
        let sp=document.querySelector("#about2 span");
        sp.style.backgroundColor='rgb(116, 152, 80)';
        sp.style.padding='0.3rem';
        sp.style.borderRadius='0.5rem';
        setTimeout(()=>{
            sp.style.backgroundColor='';
        },2000);
    }
    else
    {
        about.setAttribute('href','#about1');
        let sp=document.querySelector("#about1 span");
        sp.style.backgroundColor='rgb(116, 152, 80)';
        sp.style.padding='0.3rem';
        sp.style.borderRadius='0.5rem';
        setTimeout(()=>{
            sp.style.backgroundColor='';
        },2000);
    }
}

function revealOnScroll() 
{
    let boxes = document.querySelectorAll('.box');
    let triggerHeight = window.innerHeight * 0.8; 

    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top;
        let boxBottom = box.getBoundingClientRect().bottom;

        if (boxTop < triggerHeight && boxBottom > 50) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    }); 
}

window.addEventListener('scroll', revealOnScroll);