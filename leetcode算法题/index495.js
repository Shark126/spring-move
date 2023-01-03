/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length == 0 || duration == 0 ) return 0;
    let count = 0
    for(let i = 0 ; i < timeSeries.length - 1 ; i ++){
        if(timeSeries[i+1] - timeSeries[i] <= duration){
            count = count + duration - timeSeries[i+1] + timeSeries[i]
        }
    }
     return timeSeries.length*duration-count;
    
  };
  //贪心思想