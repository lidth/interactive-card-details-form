function verphocvc() {
    let frentphoto = document.getElementById('frentphoto')
    let versphoto = document.getElementById('versphoto')
    frentphoto.style.position = 'unset'
    versphoto.style.position = 'absolute'
    frentphoto.style.marginTop = '90px'
}


document.addEventListener("keyup", function() {
    let inputname = document.getElementById('itextname').value;
    let nametext = document.getElementById('textofrontname')
    if (inputname == '') {
        nametext.innerHTML = "Jane Appleseed"
    } else {
    nametext.innerHTML = inputname
    }

    let inputcardnumber = document.getElementById('incard').value
    let numbercardtext = document.getElementById('textofrontnumber')
    if (inputcardnumber == ''){
        numbercardtext.innerHTML = '0000 0000 0000 0000'
    } else{
    numbercardtext.innerHTML = inputcardnumber
    }

    let inputexpdatemm = document.getElementById('expdatemm').value
    let inputexpdateyy = document.getElementById('expdateyy').value
    let textexpdate = document.getElementById('textofrontdate')
    if (inputexpdatemm == '' & inputexpdateyy == '') {
        textexpdate = "00/00"
    } else{
    textexpdate.innerHTML = `${inputexpdatemm} / ${inputexpdateyy}`
    }

    let cvctext = document.getElementById('textovers')
    let cvcinput = document.getElementById('inputcvc').value
    if (cvcinput == '') {
        cvctext.innerHTML = '000'
    } else {
        cvctext.innerHTML = cvcinput
    }

})

