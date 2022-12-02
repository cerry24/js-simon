const button = document.getElementById('btn');
let counter = 0;
let clicked = false;

button.addEventListener('click', function(){
    if ( !clicked ) {
        if ( counter < 10 ){
            counter++;
            button.innerHTML = `play ${counter}`;
        } else {
            clicked = true;

            setTimeout( () => {
                clicked = false;
                counter = 0;
                button.innerHTML = `play ${counter}`;;
            }, 10000);
        }
    }

})
