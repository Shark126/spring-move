var uniqueMorseRepresentations = function(words) {
    let passMessage
    let allPassWord = []
    let str = ''
    const passWord = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    words.forEach((item) =>{
        for(let i = 0 ; i < item.length ; i++){
            passMessage = passWord[item.charCodeAt(i) - 'a'.charCodeAt()]
            str = str + passMessage
        }
        allPassWord.push(str)
        str = ''
    })
    
    let newArr = allPassWord.filter((item, index)=> {
        return allPassWord.indexOf(item) === index
    })
    return newArr.length
};

const x = ["gin", "zen", "gig", "msg"]
uniqueMorseRepresentations(x)