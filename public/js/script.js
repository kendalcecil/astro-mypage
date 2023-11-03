const colorswitch = document.getElementById('colorSwitch')


function toggledarkmode(){
    document.body.classList.toggle("srsmode");
    document.body.classList.toggle("lightmode");
    document.getElementById("norman").classList.toggle("srsheader");
    document.getElementById("norman").classList.toggle("normieheader");

    const buttonClassList= document.getElementsByClassName("button");
    for (let counter= 0; counter < buttonClassList.length; counter++){
        buttonClassList[counter].classList.toggle("srsbutton");
        buttonClassList[counter].classList.toggle("funbutton");
    }
    const flexitemClassList= document.getElementsByClassName("flex-item");
    for (let counter1=0; counter1 < flexitemClassList.length; counter1++){
        flexitemClassList[counter1].classList.toggle("srscolors");
        flexitemClassList[counter1].classList.toggle("funcolors");
    }
}


colorswitch.addEventListener('click', () => {
toggledarkmode()
})