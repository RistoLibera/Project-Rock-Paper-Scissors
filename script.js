    function runComputerPlay(){
        let randNum=Math.random();
        if (randNum>=0&&randNum<(1/3)){
            return "rock";
        }else if(randNum>=(1/3)&&randNum<(2/3)){
            return "paper";
        }else{
            return "scissors";
        }
    }
    
    let playerScore = 0;
    let computerScore =0;


    function playSingleRound(playerSel,computerSel){  
    computerSel=computerSel.toLowerCase();
    playerSel=playerSel.toLowerCase();
    
    
        if (computerSel==playerSel){
            return "Draw";
        }else if(computerSel=="rock"&&playerSel=="scissors"||computerSel=="scissors"&&playerSel=="paper"||computerSel=="paper"&&playerSel=="rock"){
            computerScore= computerScore+1;
            return `You ${playerScore} Computer ${computerScore}`;
        }else{
            playerScore= playerScore+1;
            return `You ${playerScore} Computer ${computerScore}`;
        }

        
    }

    

    function resultCheck(){
        const resultDiv =document.querySelector(".result"); 

        if(computerScore==5&&playerScore ==5){
            resultDiv.textContent="Result: This is a draw!";
        }else if(computerScore== 5 &&computerScore>playerScore) {
            resultDiv.textContent="Result: Computer get the first five points!";
        }else if (playerScore== 5 &&playerScore>computerScore){
            resultDiv.textContent="Result: You get the first five points!";
        }else {
            return;
        }
    }

    window.addEventListener("click",function(e){
        const button=document.querySelector(`#${e.target.id}`);
        let playerSel=button.textContent;
        let oneRound = playSingleRound(playerSel,runComputerPlay());
        const newProcessDiv = document.createElement("div");
        newProcessDiv.classList.add("process");
        newProcessDiv.textContent = oneRound;
        const processDiv = document.querySelector(".process");
        processDiv.appendChild(newProcessDiv);

        resultCheck()


    })




       
        
    

