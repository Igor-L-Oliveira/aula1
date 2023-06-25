//function toggleMode() {
//const html = document.documentElement
//
//if(html.classlist.contains('light')){
  //html.classList.remove('light')
//} //else{
   // html.classlist.add(light)
//}
//html.classList.toogle('light')
//}
function toggleMode() {
    const html = document.documentElement;

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light');
    // } else {
    //     html.classList.add('light');
    // }

    html.classList.toggle('light');
}
