console.log ("hello")

    $(document).ready(function() {
    		console.log("doc ready")
            // $("#quest-one-one").click(function(){
            //    $("aside").hide( "slide", { direction: "down"  }, 2000 );
            // });

    		$(".column a").hover(
    			function(){
    				console.log("hover");
    				console.log($(this).html());
    				$("aside").addClass("slide");
    			}, 
    			function(){
    				$("aside").removeClass("slide");
    			})

         });

