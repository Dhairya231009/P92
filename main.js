function adduser(){
    player_Q=document.getElementById("player1_textinput").value;
    player_A=document.getElementById("playe2_textinput").value;
    localStorage.getItem("player_Q",player_Q);
    localStorage.getItem("player_A",player_A);
    window.location="game_page.html";
}