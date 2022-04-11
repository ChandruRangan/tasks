let s = a => {
    let n = a.length;
    let res = 1;
            for (i = 0; i <= n; i++){
                if (a[i] <= res){
                    res = res + a[i]
                }else{
                    break;
                } 
            }
            return res;
        }
                array = [13, 2, 5, 17];
                a = array.sort();
                console.log(s(a));