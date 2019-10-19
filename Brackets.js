function matchBrackets(s) {
    let arr = [];
    let map = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }


    for(let i=0; i<s.length; i++){

        if(s[i] === '{' || s[i]=== '[' || s[i] === '(') {
            arr.push(s[i]);
        }
        
        else {
            let last = arr.pop();
            
            if(s[i] !== map[last]) {
                return "NO";
                }
            
        }

    }

    if(arr.length!==0) {
        return "NO";
    }
    return "YES";

}


function inputs(arr) {
    let res = [];
    for (let i=0;  i<arr.length; i++){
      
      res.push(matchBrackets(arr[i]));  
    }
    return res;
    console.log(res);
}

inputs(["(){}", "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]", "({(()))}}"]);
inputs(["(((((", "[][][][]((({)})))"]);





