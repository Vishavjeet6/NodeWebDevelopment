
function rms(){
    if(document.getElementById("vals").value.trim() == ""){
        alert("please enter numbers")
        return
    }
    const arr = document.getElementById("vals").value.split(',').map(x=>+x)
    let pRMS = document.getElementById("pRMS")
    let nRMS = document.getElementById("nRMS")
    let tRMS = document.getElementById("tRMS")
    nRMS.textContent = negative(arr)
    pRMS.textContent = positive(arr)
    tRMS.textContent = calculateRMS(arr)
}


let calculateRMS = (a) => Math.sqrt(
    a
        .map(x => (x*x))
        .reduce((x,y) => (x+y))
        /a.length
)

function positive(arr){
    let parr = arr.filter(x => x > 0)
    if(parr.length == 0){
        parr = [0]
    }
    let ans = calculateRMS(parr)
    console.log(ans)
    return ans
}


function negative(arr){
    let narr = arr.filter(x => x < 0)
    if(narr.length == 0){
        narr = [0]
    }
    let ans = calculateRMS(narr)
    return ans
}


