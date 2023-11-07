// code your solution here
// const records = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
// ]

function superbowlWin(record) {
 const found =   record.find((element)=>{
        return element.result === "W"
    })

    return found && found.year
}

