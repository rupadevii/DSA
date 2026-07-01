/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let side1 = Math.abs(ay2-ay1)
    let side2 = Math.abs(ax1-ax2)

    let area1 = side1*side2

    let side3 = Math.abs(bx2-bx1)
    let side4 = Math.abs(by1-by2)

    let area2 = side3*side4

    // let area = 0
    // if((by1>ay2 && bx1>ax2) || (bx1<ax1 && by1>ay1) || (bx2<ax1 && by2<ay1) ||(ay1<by1 && bx1>ax2)){
    //     area = 0
    // }
    // else{
    //     let side5 = Math.abs(by2-ay1)
    //     let side6 = Math.abs(ax2-bx1)
    //     area = side5*side6
    // }
    let area = 0

    let side5 = Math.min(ax2, bx2)-Math.max(ax1, bx1)
    let side6 = Math.min(ay2, by2)-Math.max(ay1, by1)

    if(side5>0 && side6>0){
        area = side5 * side6
    }

    return area1+area2-area
};
