let turn = "X";
let gameover = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2,-11,5,0],
    [3, 4, 5,-11,15,0],
    [6, 7, 8,-11,25,0],
    [0, 3, 6,-21,15,90],
    [1, 4, 7,-11,15,90],
    [2, 5, 8,0,15,90],
    [0, 4, 8,-11,15,45],
    [2, 4, 6,-11,15,135],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.getElementsByClassName("info")[0].innerText =
        boxtext[e[0]].innerText + "-" + "won";
        gameover = true;
          document.getElementsByTagName("img")[0].style.width = "156px"
          document.querySelector(".line").style.width= "28vw"
          document.querySelector(".line").style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
          document.querySelector(".line").style. backgroundColor="red"
          document.querySelector(".line").style. border="red"
    }
  });
};

reset.addEventListener("click",()=>{
    let boxtext = document.getElementsByClassName("boxText");
    Array.from(boxtext).forEach(e=>{
         e.innerText=""
         document.getElementsByTagName("img")[0].style.width = "0px"
         turn="X"
         gameover=false
         document.getElementsByClassName("info")[0].innerText = turn + "'s Turn";
         document.querySelector(".line").style.width= "0vw"
         
    })
})

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");

  element.addEventListener("click", () => {
    if (boxtext.innerHTML === "") {
      boxtext.innerHTML = turn;
      turn = changeTurn();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText = turn + "'s Turn";
      }
    }
  });
});
