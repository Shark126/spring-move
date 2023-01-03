let obj1 =  {
    id:1,
    text: '111',
    children:[
       {
        id:2,
        text: '222',
        children:[
        ]
       }
    ]
}
let obj2 = {
    id:1,
    text: '111',
    children:[
        {
            id:2,
            text: '222',
            children:[
            ]
           }
    ]
}
// function db(obj1,obj2){
//     for(let item in obj1){
//         if(obj1[item] !== obj2[item]){
//             return false
//         }else if(obj1[item] === obj2[item] && obj1[item].length >= 1){
            
//         }
//     }
// }

function compare(obj1, obj2) {
    if(typeof obj1 !== 'object' && typeof obj2 !== 'object') {
        return obj1 === obj2
    }
    if(typeof obj1 === 'object' && typeof obj2 === 'object') {
        for(let key in obj1) {
            if(typeof obj1[key] === 'object' || typeof obj2[key] === 'object') {
                if(!compare(obj1[key], obj2[key])) return false
            }else if(obj1[key] !== obj2[key]) return false
        }
    }else {
        return false
    }
    return true
}

compare(obj1,obj2)