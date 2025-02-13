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
    let footer2=document.querySelector('#footer2');
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