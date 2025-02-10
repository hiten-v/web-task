function dark()
{
    console.log("dark mode activated");
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
    
}
function light()
{
    console.log("light mode activated");
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

}