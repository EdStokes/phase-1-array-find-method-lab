// code your solution here

function superbowlWin(array){
    let win = array.find(array => array.result === "W")
    if (win){
        return win.year;
    }else return win;
}