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
                    console.log(this.id);
                    // debugger
                    if (this.id == 'quest-one-one') {
                        $("aside").html(textData[0]);
                    } else if (this.id == 'quest-one-two') {
                        $("aside").html(textData[1]);
                    } else if (this.id == 'quest-one-three') {
                        $("aside").html(textData[2]);
                    } else if (this.id == 'quest-one-four') {
                        $("aside").html(textData[3]);
                    } else if (this.id == 'quest-one-five') {
                        $("aside").html(textData[4]);
                    } else if (this.id == 'quest-one-six') {
                        $("aside").html(textData[5]);
                    } else if (this.id == 'quest-one-seven') {
                        $("aside").html(textData[6]);
                    } else if (this.id == 'quest-one-eight') {
                        $("aside").html(textData[7]);
                    } else if (this.id == 'quest-one-nine') {
                        $("aside").html(textData[8]);
                    } else if (this.id == 'quest-one-ten') {
                        $("aside").html(textData[9]);
                    } else if (this.id == 'quest-one-eleven') {
                        $("aside").html(textData[10]);
                    } else if (this.id == 'quest-one-twelve') {
                        $("aside").html(textData[11]);
                    } else if (this.id == 'quest-one-thirteen') {
                        $("aside").html(textData[12]);
                    } else if (this.id == 'quest-one-fourteen') {
                        $("aside").html(textData[13]);
                    } else if (this.id == 'quest-one-fifteen') {
                        $("aside").html(textData[14]);
                    } else if (this.id == 'quest-one-sixteen') {
                        $("aside").html(textData[15]);
                    } else if (this.id == 'quest-one-seventeen') {
                        $("aside").html(textData[16]);
                    } else if (this.id == 'quest-one-eighteen') {
                        $("aside").html(textData[17]);
                    } else if (this.id == 'quest-one-nineteen') {
                        $("aside").html(textData[18]);
                    } else if (this.id == 'quest-one-twenty') {
                        $("aside").html(textData[19]);
                    } else if (this.id == 'quest-one-twenty-one') {
                        $("aside").html(textData[20]);
                    } 
                    // if first box is clicked (reference by id)
                    // jquery html of textData[0] to aside
    			}, 
    			function(){
    				$("aside").removeClass("slide");
    			})


        var textData = ['AT A GLANCE<br> Medical<br> Ancillary Benefts<br> Special Risk<br> Travel<br> Pet Accident and Sickness', 'AT A GLANCE<br>Workers Compensation<br> Commercial Automobile<br>General Liability', 'text three', 'text four', 'text five', 'text six', 'text seven', 'text eight', 'text nine', 'text ten', 'text eleven', 'text twelve', 'text thirteen', 'text fourteen', 'text fifteen', 'text sixteen', 'text seventeen', 'text eighteen', 'text nineteen', 'text twenty', 'text twentyone']

            $(".column a").click(
                function(){
                    $(".one").css("background-color", "#efefef");
                    $(".two").css("background-color", "red");
                    $(".column a").addClass("button-condensed");
                    $(".quest-one-title").css("color", "#efefef");
                    $(".quest-two-title").css("color", "black");
                    $(".number-one").css("color", "#efefef");
                    $(".number-two").css("color", "red");
                    $('.column a').click(function(){
                        $('.column a').removeClass('button-clicked');
                        $(this).addClass('button-clicked');
                    });

                    if (this.id == 'quest-one-one') {
                        $('#quest-one-one').addClass('button-clicked');

                        $('#quest-two-one').css('visibility','visible');


                    } else if (this.id == 'quest-one-two') {
                        $('#quest-one-two').addClass('button-clicked');
                        $('#quest-two-two').css('visibility','visible');


                    };

                    })

             $("#quest-two-container").click(
                function(){
                    $(".one").css("background-color", "#efefef");
                    $(".two").css("background-color", "#efefef");
                    $(".three").css("background-color", "red");
                    $(".quest-one-title").css("color", "#efefef");
                    $(".quest-two-title").css("color", "#efefef");
                    $(".quest-three-title").css("color", "black");
                    $(".number-one").css("color", "#efefef");
                    $(".number-two").css("color", "#efefef");
                    $(".number-three").css("color", "red");
                    $('#quest-three-container').css('visibility','visible');
                    });
                
                $('input[name=opt]').click(function () {

                    if (this.id == "info1") {
                        $("#info1").show('slow');
                    } else {
                        $("#info1").hide('slow');
                    } 
                });




});
