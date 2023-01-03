// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let i = m-1,j = n-1,k = m+n-1
while(i>=0 && j>=0){
    if(nums1[i]>=nums2[j]){
        nums1[k] = nums1[i]
        k--
        i--
    }else{
        nums1[k] = nums2[j]
        j--
        k--
    }
}
    
//如果nums1的指针先到底怎么办？
    if(i<0){
        let arr = nums2.splice(0,j+1)
        nums1 = [...arr,...nums1]
    }

    // while(j>=0){
    //     nums1[k] = nums2[j]
    //     j--
    //     k--
    // }
};