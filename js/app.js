      
        $(".toggleForms").click(function() {
            
          $("#signUpForm").toggle();
          $("#logInForm").toggle();
          
          
      });
        
        $('#diary').bind('input propertychange', function() {

              $.ajax({
                method: "POST",
                url: "updatedatabase.php",
                data: { content: $("#diary").val() }
              });

      });
    
    