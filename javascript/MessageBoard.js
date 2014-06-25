var MessageBoard = {

    messages: [],

    init: function (e) {

        var triggerLink = document.getElementById("button"); //Knappen ifrån html filen
        triggerLink.onclick = MessageBoard.createMessage; //När man klickar på kanppen "Skicka" anropar man createMessage function


        enter = document.getElementById("textform");
	    enter.onkeypress = function(e){
            
		  if (e.keyCode === 13 && e.shiftKey === false){
		    MessageBoard.createMessage();
            return false;
		    }
            return true;
            
          
         }
        //enter = document.getElementById("textform");
	    //enter.onkeypress = function(e){
            //console.log("enter is pushed") ;
		  //e = e || event;
          //if (e.keyCode === 13) {
            //MessageBoard.createMessage()
            
          //}
          //return true;
         //}
	
	
        

    },

    createMessage: function () {
        var textform = document.getElementById("textform").value; //Value hämtar det som skrivs ifrån textrutan
        var mess = new Message(textform, new Date()); //Det som har skrivits lägs in i arrayen
        MessageBoard.messages.push(mess);    //push lägger in det i slutet av arrayen

        MessageBoard.renderMessages();

    },
    //funktion för att ta bort en specifikt meddelande
    removeMessage: function () {
        
        if(confirm("Är du säker på att du vill ta bort detta meddelande"))
        {
             MessageBoard.messages.splice(messages, 1);//Tar bort meddelande 
             MessageBoard.renderMessages();
        }
    },

    renderMessages: function () {

        document.getElementById("messages").innerHTML = ""; //Tar bort meddelanden som har skrivits
        document.getElementById("count").innerHTML = ""; //Rensar counten, för att den inte skall upprepas utan öka samma nummer med 1 antalet meddelanden man skriver och skickar!

        for (var i = 0; i < MessageBoard.messages.length; ++i) {
            MessageBoard.renderMessage(i); //Denna gör så att meddelandena försvinner ifrån texrutan när dom skickas och läggs i arrayen
        }


        var div = document.getElementById("count"); //Hämtar count ifrån index-filen så att antalet meddelanden som har skrivits visas på sidan
        var text = document.createElement("p"); //Denna gör sedan så att det syns på sidan
        text.innerHTML = "Antal meddelanden: " + MessageBoard.messages.length; //Meddelandets längd såklart.. HUR MÅNGA ELEMENT DET ÄR I ARRAYEN.
        div.appendChild(text);



    },


    


    renderMessage: function (messageID) {
        document.getElementById("textform").value = ""; //Rensar textfältet efter att man har skickat meddelandet
        var div = document.getElementById("messages");
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text); //appentchild skriver in all text i DOMen och omformulerar till HTML

        // Ta-bort Knapp
        var div = document.getElementById("messages");
        var imgClose = document.createElement("p");       
	    imgClose.innerHTML = "<img class='icon' src='icontabort.jpg' width='18px' height='18px'/>";
        imgClose.onclick = function() {
            MessageBoard.removeMessage(messageID);
        
        }
        div.appendChild(imgClose);
        
        //Klockan
        var div = document.getElementById("messages");
        var imgClock = document.createElement("p");        
        imgClock.innerHTML = "<img class='icon' src='clock.png' width='18px' height='18px'/>";
        imgClock.onclick = function () {
            alert("Detta meddelande skapades " + MessageBoard.messages[messageID].getDateText());
        
        }
        div.appendChild(imgClock);


        //Skriver ut tiden när meddelandena skrev brevid meddelandet
        var d = MessageBoard.messages[messageID].getDate();
        var tid = document.createElement("tid");        
        tid.innerHTML = d.toLocaleTimeString();
        
        div.appendChild(tid);


    },
   
}


window.onload = MessageBoard.init;//Gör så att programmet körs