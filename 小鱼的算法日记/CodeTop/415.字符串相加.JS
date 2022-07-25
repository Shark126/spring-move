// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

var addStrings = function(num1, num2) {
    let p1 = num1.length - 1
	let p2 = num2.length - 1 
	let res = []
	let up = 0
	while (p1 >= 0 || p2 >= 0) {
		let cur1 = num1.charAt(p1) - '0'
		let cur2 = num2.charAt(p2) - '0'
		let temp = cur1 + cur2 + up
		if (temp >= 10) {
			up = 1
			temp -= 10
		} else {
			up = 0
		}
		p1--
		p2--
		res.unshift(temp + '')
	}
    if (up !== 0) {
		res.unshift('1')
	}
    return res.join('')
};
