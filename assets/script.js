function verphocvc() {
    if (window.innerWidth < 1170) {
    let frentphoto = document.getElementById('frentphoto')
    let versphoto = document.getElementById('versphoto')
    frentphoto.style.position = 'unset'
    versphoto.style.position = 'absolute'
    frentphoto.style.marginTop = '90px'
    }
}


document.addEventListener("keyup", function() {
    let inputname = document.getElementById('itextname').value;
    let nameinput = document.getElementById('itextname')
    let nametext = document.getElementById('textofrontname')

    localStorage.setItem('inputname', inputname);
    localStorage.setItem('nametext', nametext);

    let nameblank = document.querySelector('p#nameblank')
    

    if (inputname == '') {
        nametext.innerHTML = "Jane Appleseed"
        nameblank.style.display = 'block'
        nameinput.style.border = '1px solid red'

    } else {
    nametext.innerHTML = inputname
    }

    let inputcardnumber = document.getElementById('incard').value
    let numbercardtext = document.getElementById('textofrontnumber')

    localStorage.setItem('inputcardnumber', inputcardnumber)

    if (inputcardnumber == ''){
        numbercardtext.innerHTML = '0000 0000 0000 0000'
    } else{
    numbercardtext.innerHTML = inputcardnumber
    }

    let inputexpdatemm = document.getElementById('expdatemm').value
    let inputexpdateyy = document.getElementById('expdateyy').value
    let textexpdate = document.getElementById('textofrontdate')

    localStorage.setItem('inputexpdatemm', inputexpdatemm)
    localStorage.setItem('inputexpdateyy', inputexpdateyy)


    if (inputexpdatemm == '' & inputexpdateyy == '') {
        textexpdate = "00/00"
    } else{
    textexpdate.innerHTML = `${inputexpdatemm} / ${inputexpdateyy}`
    }

    let cvctext = document.getElementById('textovers')
    let cvcinput = document.getElementById('inputcvc').value

    localStorage.setItem('cvcinput', cvcinput)

    if (cvcinput == '') {
        cvctext.innerHTML = '000'
    } else {
        cvctext.innerHTML = cvcinput
    }

})

function sucess() {
    let inputname = localStorage.getItem('inputname')
    let nametext = document.getElementById('textofrontname')
    nametext.innerHTML = inputname

    let inputcardnumber = localStorage.getItem('inputcardnumber')
    let numbercardtext = document.getElementById('textofrontnumber')
    numbercardtext.innerHTML = inputcardnumber

    let inputexpdatemm = localStorage.getItem('inputexpdatemm')
    let inputexpdateyy = localStorage.getItem('inputexpdateyy')
    let textexpdate = document.getElementById('textofrontdate')
    textexpdate.innerHTML = `${inputexpdatemm} / ${inputexpdateyy}`

    let cvcinput = localStorage.getItem('cvcinput')
    let cvctext = document.getElementById('textovers')
    cvctext.innerHTML = cvcinput
}