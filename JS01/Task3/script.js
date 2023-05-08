document.addEventListener('mousedown', (event) =>
    {
        target = event.target;
        if(target.tagName === 'TD')
        {
            switch (event.button)
            {
                case 0:
                    target.classList.toggle('yellow');
                    break;
                case 2:
                    target.classList.toggle('blue');
                    break;
            }
            if(target.classList.contains('yellow') && target.classList.contains('blue'))
            {
                target.classList.toggle('orange');
                target.classList.remove('blue');
                target.classList.remove('yellow');
            }
       }
    }
);
document.addEventListener('contextmenu',event =>
    {
             event.preventDefault();
    }
);