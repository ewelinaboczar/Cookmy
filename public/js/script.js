var time = 7;
let i=0;

function changeView() {
    if (i===4){
        i=0;
    }
    const activeSheet = document.querySelector(".sheet.active")
    const nextSheet = document.querySelector("#sheet_"+i)
    const activeDot= document.querySelector(".dot.active")
    const nextDot = document.querySelector("#dot_"+i)

    activeSheet.setAttribute("class","sheet")
    activeDot.setAttribute("class","dot")
    nextSheet.setAttribute("class","sheet active")
    nextDot.setAttribute("class","dot active")
    i++;
}

setInterval(changeView,time * 1000);

