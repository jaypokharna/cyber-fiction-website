var mode = document.getElementById('modes');

mode.addEventListener('click',()=>{
    if (mode.innerHTML == "Dark Mode"){
        darkMode()
    }
    else(
        lightMode()
    )
});



function darkMode(){
    
        console.log(mode.innerHTML)
        mode.innerHTML = "Light Mode";
        document.getElementById('page').style.backgroundColor = "#343434";
        document.getElementById('page').style.color = "white";

        var spans = document.querySelectorAll('.line')

        spans.forEach(span => {
            span.style.webkitTextStrokeColor = 'white'
        } )

        var h1s = document.querySelectorAll('h1');

        h1s.forEach(h1 => {
            h1.style.color = 'white';
        })

        document.getElementById('page1').style.backgroundColor = "#343434";
        document.getElementById('page1').style.color = "white";
        document.getElementById('page2').style.backgroundColor = "#343434";
        document.getElementById('page2').style.color = "white";
        document.getElementById('page3').style.backgroundColor = "#343434";
        document.getElementById('page3').style.color = "white";
        document.getElementById('page4').style.backgroundColor = "#343434";
        document.getElementById('page4').style.color = "white";
        
        

}

function lightMode(){
    
        console.log(mode.innerHTML)
        mode.innerHTML = "Dark Mode";
        document.getElementById('page').style.backgroundColor = "#f1f1f1";
        document.getElementById('page1').style.backgroundColor = "#f1f1f1";
        document.getElementById('page2').style.backgroundColor = "#f1f1f1";
        document.getElementById('page3').style.backgroundColor = "#f1f1f1";
        document.getElementById('page4').style.backgroundColor = "#f1f1f1";

}


