/**
 * return the union of two sets
 */
function union(s1, s2) {
    const combine = [...s1, ...s2];
    return new Set(combine);
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
    const inter = new Set();
    
    s1.forEach((item) => {
      if (s2.has(item)) inter.add(item);
    });
    return inter;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {}

module.exports = { union, intersect, difference };
