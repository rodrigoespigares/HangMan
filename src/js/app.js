window.onload = () => {
    lives();
    category();
    click();
    word();
    let footer = document.querySelector("footer");
    year = new Date()
    footer.innerHTML=`© ${year.getFullYear()}~${year.getFullYear()+1} Rodrigo Espigares Fernandez`
}