function sort(text){
    text=text.split('');
    for(i=0;i<text.length;i++){
        for(j=0;j<text.length;j++){
            if(text[j]>=text[i]){
                temp=text[i];
                text[i]=text[j];
                text[j]=temp;
            }
        }
    }
    return text.join('');
}console.log(sort('kaviya'));