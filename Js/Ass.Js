$(document).ready(function() {
    $('#action').click(function() {

        var letterGrade = $('#letter-grade').val().toUpperCase();
        var myFavoriteThings = [];
            myFavoriteThings.push("TV Show");   
            myFavoriteThings.push("Soccer"); 
            myFavoriteThings.push("Party"); 
            myFavoriteThings.push("Travel"); 

        //Write your decision structure between this comment...
        if (letterGrade == "A"){
            console.log("inside if(A)")
            $('#decision-holder').append("Grade range for A: 90% to 100%");
        }

        else if(letterGrade == "B"){
            $('#letter-grade').append("Grade range for B: 80% to 90%");
        }

        else if (letterGrade == "C"){
            $('#letter-grade').append("Grade range for C: 70% to 80%");
        }
         else if(letterGrade == "D"){
            $('#letter-grade').append("Grade range for D: 70% to 60%");
         }
         else if (letterGrade == "F"){
            $('#letter-grade').append("Grade range for F: Less than 60%");
         }
         else{"Error! Invalid value entered"};

        //...and this comment

        //Now, write a for, while, OR do-while loop between this comment...
        for (var i=0; i< myFavoriteThings.length; i++){
            $('#loop-output').append(myFavoriteThings[i] + "<br>"); 
        }

        var counter = 0; 
        while(counter< myFavoriteThings.length){
            $('#each-output').append(myFavoriteThings[counter] + "<br>");
            counter++; 
        }

        do{
            $('#letter-grade').append(myFavoriteThings[counter] + "<br>");
            counter++; 
        } while (counter<myFavoriteThings);


        //...and this comment


        //Use the jQuery .each() method to loop through
        //the myFavoriteThings array between this comment...

        $.each(myFavoriteThings, function(index, number){
            $('#letter-grade').append(number + "<br>");

        });
           
        //...and this comment

    });
});
