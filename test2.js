let input=[60, 40, 55, 75, 64]
function alternatingSums(a) {
    let arr1=[]
    let arr2=[]
    let s1=0
    let s2=0
    let output=[]
    a.forEach((element,index) => {
         if(index%2==0) arr1.push(element)
         else arr2.push(element)
     });
    
    for(let i=0;i<arr1.length;i++){
        s1+=arr1[i]
    }
    for(let i=0;i<arr2.length;i++){
        s2+=arr2[i]
    }
    output.push(s1,s2)
    return output
}
console.log(alternatingSums(input))
