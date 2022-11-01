function sendMail() {
    var link = "mailto:patilravi400@gmail.com"
    + "?cc=myCCaddress@example.com"
    + "&subject=" + escape("This is my subject")
    + "&body=" + escape(document.getElementById('message').value)
;

window.location.href = link;
}


const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle'){
        toggle.classList.remove('active');
    sidebar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}