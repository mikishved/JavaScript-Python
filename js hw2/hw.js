var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
    Poland: -7
    }
    var a=0,b=0,c=0
    function sred(){
        for(key in term){
            a+=term[key]
            b++
            c=a/b
        }
        alert('sred tmp:'+c)
    }
    sred()
    function max(){
        var max=-999
    for(key in term){
        if(max<term[key]){
            max=term[key]
            }
        }
        alert(max)
    }
    max()