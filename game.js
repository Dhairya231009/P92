layer_Q=localStorage.getItem("player_Q");
player_A=localStorage.getItem("player_A");
player_Q_score=0;
player_A_score=0;
document.getElementById("player_Q").innerHTML=player_Q+":";
document.getElementById("player_A").innerHTML=player_A+":";

document.getElementById("player_Q_score").innerHTML=player_Q_score;
document.getElementById("player_A_score").innerHTML=player_A_score;

document.getElementById("player_Q_score").innerHTML= "Question Turn-"+player_Q;
document.getElementById("player_A_score").innerHTML="Question Turn-"+player_A;

function send(){

    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lowercase ="+word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_word=Math.floor(word.length/2);
    charAt2=word.charAt(length_word);
    console.log(charAt2);

    length_minus=word.length-1;
    charAt3=word.charAt(length_minus);
    console.log(charAt3);

    remove_charat1=word.replace(charAt1,"_");
    remove_charat2=remove_charat1.replace(charAt2,"_");
    remove_charat3=remove_charat2.replace(charAt3,"_");
    console.log(remove_charat3);

    qword="<h4 id = 'word_display'> Q. "+remove_charat3+"</h4>";
   input_box="<br> answer:<input type='text' id='input_box_check'>";
   check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row=qword+input_box+check_button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("word").value=""; 
}
function check(){
    get_answer=document.getElementById("input_box_check").value;
    answer=get_answer.toLowerCase();
    console.log("lowercase"+answer);
    if(answer==word){
        if(answer_turn=="player_Q"){
            player_Q_score=player_Q_score+1;
            document.getElementById("player_Q_score").innerHTML=player_Q_score;

        }
        else{
            player_A_score=player_A_score+1;
            document.getElementById("player_A_score").innerHTML=player_A_score;
        }
    }
}