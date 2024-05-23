"use strict";

let container = document.getElementById("sub-container");
let winnerBanner = document.getElementById("popup");
let winnerText = document.querySelector("#winner");

let refreshBtn = document.getElementById("refresh");
let currentClick = "X";

let xArray = [];
let oArray = [];

let winnerFound = false;

container.addEventListener("click",(e)=>{

    // target Id is used to filter the box alone
    // 
    if(e.target.id != "sub-container" && !winnerFound)
    {
        let currentBox = document.getElementById(e.target.id);
        let boxList = document.querySelectorAll(".box");
        // console.log(currentBox.innerText == "");
        if(currentClick == "X" && currentBox.innerText == "")
        {
            currentBox.textContent = "X";
            currentClick = "O";
            xArray.push(Number(currentBox.getAttribute("data-value")));

            console.log("Xarray is : "+xArray);

            if(checkMatch(xArray))
            {
                console.log("X is winner")  
                winnerFound = true;
                winnerBanner.classList.remove("hide-winner");
                winnerBanner.classList.add("show-winner");

                winnerText.innerText = "X"
            }
        }
        else if(currentBox.innerText == ""){
            currentBox.textContent = "O";
            currentClick = "X";

            oArray.push(Number(currentBox.getAttribute("data-value")));

            console.log(`O array value is : ${oArray}`);

            if(checkMatch(oArray))
            {
                    console.log("O is winner");
                    winnerFound = true;
                    winnerBanner.classList.remove("hide-winner");
                    winnerBanner.classList.add("show-winner");

                    winnerText.innerText = "0"
            }

        }

        if(xArray.length == 5 && oArray.length == 4 && !winnerFound)
        {
                console.log("Match Draw")
        }
    }

    function checkMatch(resultArray)
    {
        return ((resultArray.includes(1) && ((resultArray.includes(2) && resultArray.includes(3)) || (resultArray.includes(5) && resultArray.includes(9)) || (resultArray.includes(4) && resultArray.includes(7)))) || 
        (resultArray.includes(2) && resultArray.includes(5) && resultArray.includes(8)) || 
        (resultArray.includes(3) && ((resultArray.includes(6) && resultArray.includes(9)) || (resultArray.includes(5) && resultArray.includes(7)))) ||
        (resultArray.includes(7) && resultArray.includes(8) && resultArray.includes(9))  ||
        (resultArray.includes(4) && resultArray.includes(5) && resultArray.includes(6))) ;
    }
   
});

refreshBtn.addEventListener("click",()=>{

    document.location.href = "index.html";
});

