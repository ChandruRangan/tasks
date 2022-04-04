function titlecase(txt){
    txt = txt.toLowerCase().split(' ');
    for (var i = 0;i < txt.length; i++) {
        txt[i] = txt[i].charAt(0).toUpperCase()+ txt[i].slice(1);
    }
    return txt.join(' ');
}
console.log(titlecase("THIS IS THE TITLE"));