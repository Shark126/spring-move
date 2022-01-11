var nextGreaterElement = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    const res = new Array(m).fill(0);
    for (let i = 0; i < m; ++i) {
        let j = 0;
        while (j < n && nums2[j] !== nums1[i]) {
            ++j;
        }
        let k = j + 1;
        while (k < n && nums2[k] < nums2[j]) {
            ++k;
        }
        res[i] = k < n ? nums2[k] : -1;
    }
    return res;
};


//求下一个更大数
// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。

// 请你找出 nums1 中每个元素在 nums2 中的下一个比其大的值。

// nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。




// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
//  var nextGreaterElement = function(nums1, nums2) {
//     let newArr = []
//     let m = nums2.length - 1
//     for( let i = 0 ; i < nums1.length  ; i++){
//         let a = nums2.findIndex( item => {
//            return item === nums1[i]
//         })
//         for(let j = a ; j < nums2.length ; j++){
//             if(nums2[j] > nums1[i] && j > nums2.length){
//                 newArr.push(nums2[j])
//                 return
//             }else if(nums2[m] <nums1[i]){
//                 newArr.push(-1)
//                 return
//             }
//         }
//     }
//     return newArr
// };