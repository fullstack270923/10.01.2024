function get_random(lower, upper) {
    // 1 - 3
    // 0 1 2
    // Math.random() * 3
    // 0 .. 2.99999 
    // parseInt => 0 1 2
    // 0 1 2 + lower ==> 1, 2, 3
    const window_range = upper - lower + 1
    const rand = parseInt(Math.random() * window_range) 
    const result = rand + lower
    return result
}