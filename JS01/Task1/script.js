document.documentElement.addEventListener('click',(event)=>
    {
        let target = event.target;
        if(target.tagName === 'TD')
        {
           target.classList.toggle('active');
        }
    }
);