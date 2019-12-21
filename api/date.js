export function getWeek(date) {
    var week;
    if(date) week = "星期日"
    if(date === 1) week = "星期一"
    if(date === 2) week = "星期二"
    if(date === 3) week = "星期三"
    if(date === 4) week = "星期四"
    if(date === 5) week = "星期五"
    if(date === 6) week = "星期六"
    return week;
}