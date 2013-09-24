$(document).ready(function () {

    /*-------------Change the background of Header Links to black-------------*/

    $("menu a").mousedown(function () {
        $(this).css("background-color", "black");
    });

    $("menu a").mouseleave(function () {
        $("menu a").css("background-color", "");
    });

    $("menu a").mouseup(function () {
        $("menu a").css("background-color", "");
    });

    /*------------------------------------------------------------------*/

    /*--------------Function for email validation---------------------*/
    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test($email)) {
            return false;
        } else {
            return true;
        }
    }
    

    /*------------------------------------------------------------------*/
    
    /*---------Sign in form validations------------------*/

    $("#submit-Signin").click(function () {
        var match = true;
        if ($("#e-field").val() == "") {
            $("#email_err").html("Please enter a value.");
            $("#e-box").removeClass("hidden");
            $(".error-message-box p").html("There were one or more errors in your submission. Please correct the marked fields below.");
            match = false;
        }
        else {
            var use = $("#e-field").val();
            if (use.length < 3) {
                $("#email_err").html("The text you provided is too short (the minimum length is 3 characters, your text contains 2 characters).");
                $("#e-box").removeClass("hidden");
                $(".error-message-box p").html("<b>There were one or more errors in your submission. Please correct the marked fields below.</b>");
                match = false;
            }
            else if (!validateEmail(use)) {
                $("#email_err").html("Please enter a valid email address.");
                $("#e-box").removeClass("hidden");
                $(".error-message-box p").html("<b>There were one or more errors in your submission. Please correct the marked fields below.</b>");
                match = false;
            }
            else $("#email-err ").html(" ");
        }

        if ($("#p-field").val() == "") {
            $("#pass_err").html("Please enter a Password.");
            $("#e-box").removeClass("hidden");
            $(".error-message-box p").html("<b>There were one or more errors in your submission. Please correct the marked fields below.</b>");
            match = false;


        }
        else {
            var p = $("#p-field").val();

            if (p.length < 6) {
                $("#pass_err").html("The password you provided must have at least 6 characters.");
                $("#e-box").removeClass("hidden");
                $(".error-message-box p").html("<b>Please correct the marked field(s) below.</b>");

                match = false;
            }
            else $("#pass_err").html(" ");

        }

        if (match == true)
            return true;
        return false;
    });

    /*------------------------------------------------------------------*/

    /*----------------Sign up form validations------------------------*/


    $("#submit-join-form-main-page").click(function () {

        var match = true;
        if ($("#firstName").val() == "") {

            $("#f_name-error ").html("Please enter a first name.");
            $("#error-global").removeClass("hidden");
            $("#error-global div p").html("<b>Please correct the marked field(s) below.</b>");
            match = false;
        }
        else $("#f_name-error ").html(" ");

        if ($("#lastName").val() == "") {
            $("#l_name-error").html("Please enter a last name.");
            $("#error-global").removeClass("hidden");
            $("#error-global div p").html("<b>Please correct the marked field(s) below.</b>");
            match = false;
        }
        else $("#l_name-error ").html(" ");

        if ($("#Email").val() == "") {
            $("#e-error ").html("Please enter a valid email address");
            $("#error-global").removeClass("hidden");
            $("#error-global div p").html("<b>Please correct the marked field(s) below.</b>");
            match = false;

        }
        else {
            var use = $("#Email").val();


            if (use.length < 3) {
                $("#e-error ").html("The text you provided is too short (the minimum length is 3 characters, your text contains 2 characters).");
                $("#error-global").removeClass("hidden");
                $("#error-global div p").html("<b>Please correct the marked field(s) below.</b>");
                match = false;

            }
            else if (!validateEmail(use)) {
                $("#e-error ").html("Please enter a valid email address.");
                $("#error-global").removeClass("hidden");
                $("#error-global div p").html("<b>Please correct the marked field(s) below.</b>");

                match = false;
            }
            else $("#e-error ").html(" ");

        }




        if ($("#Pass").val() == "") {
            $("#p-error ").html("Please enter a password.");
            $("#error-global").removeClass("hidden");
            $("#error-global div p").html("<b>Please correct the marked field(s) below.</b>");

            match = false;
        }
        else {
            var p = $("#Pass").val();

            if (p.length < 6) {
                $("#p-error ").html("The password you provided must have at least 6 characters.");
                $("#error-global").removeClass("hidden");
                $("#error-global div p").html("<b>Please correct the marked field(s) below.</b>");

                match = false;
            }
            else $("#p-error ").html(" ");
        }




        if (match == true)
            return true;
        else return false;

    });

    /*------------------------------------------------------------------*/

    /*-----------------Forgot password validations-------------------*/

    $("#submit-reset-request").click(function () {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if ($("#emailtoget").val() == "" || !emailReg.test($("#emailtoget").val())) {
            $("#error-box").removeClass("hidden");
            $("#error-box div p").html("<b>Please correct the marked field(s) below.</b>");
            if ($("#emailtoget").val() == "")
                $("#emailErrors").html("Please enter a value.");
            else $("#emailErrors").html("Please enter a valid email address.");
            return false;
        }
        else return true;
    });

    /*------------------------------------------------------------------*/

});



