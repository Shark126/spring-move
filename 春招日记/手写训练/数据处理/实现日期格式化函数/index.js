dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日

//其实就是根据api分别取到对应的年月日，然后再进行替换
function dateFormat(inputData,format){
    var day = inputData.getDate()
    var month = inputData.getMonth() + 1
    var year = inputData.getFullYear()
    format = format.replace('yyyy',year)
    format = format.replace('MM',month)
    format = format.replace('dd',day)
    console.log(format);
    return format
}