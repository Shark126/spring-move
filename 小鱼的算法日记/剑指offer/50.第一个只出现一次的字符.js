var firstUniqChar = function (s) {
    if (s.length === 0) return " ";
    for (let i = 0; i < s.length; i++) {
      if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
        return s[i];
      }
    }
    return " ";
  };
  // 人生苦短 不妨一试