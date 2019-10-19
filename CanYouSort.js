function canYouSort(arr){

    let map = {};

    for (let i=0; i<arr.length; i++){
        let num = arr[i];
        map[num] ? map[num] += 1 : map[num] = 1;
    }

    let freq = {}
    for (let elem in map){
        freq[map[elem]] ? freq[map[elem]]+= " "+elem : freq[map[elem]]= ""+elem;
    }
    //console.log(map);
    //console.log(freq)

    let res = [];
     
    for(let p in freq){
        
        let temp = freq[p].split(" ");
        
        for (let i=-0; i< temp.length; i++){
            res.push([parseInt(p), parseInt(temp[i])]);
        }   
     }
     //console.log(res[0]);
       

       for (let i=0; i<res.length; i++){
           for(let j=1; j<= res[i][0]; j++) {
               console.log(res[i][1])
           }
       }

}
     
     
        





canYouSort([1,1,1,2,3,4,4,8,2,3]);