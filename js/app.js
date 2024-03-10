let modeToggle = document.getElementById('modeToggle');
let body = document.body;

function changeTheme(){
    if(body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode');
        modeToggle.innerHTML = '<i class="bi bi-toggle-off"></i>';
    }
    else{
        body.classList.add('dark-mode');
        modeToggle.innerHTML = '<i class="bi bi-toggle-on"></i>';
    }
}

modeToggle.addEventListener('click', changeTheme);

