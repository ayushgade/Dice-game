var n1 = Math.floor(1 + Math.random() * 6);
    document.querySelector(".img1").setAttribute("src", 'images/dice'+n1+'.png');

    var n2 = Math.floor(1 + Math.random() * 6);
    document.querySelector(".img2").setAttribute("src", 'images/dice'+n2+'.png');

    if(n1 > n2){
      document.querySelector("h1").innerHTML = "Player1 Won this round"
    }
    else if(n1 < n2){
      document.querySelector("h1").innerHTML = "Player2 Won this round"
    }
    else{
      document.querySelector("h1").innerHTML = "It's a Draw"
    }