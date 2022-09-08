$(
    function(){
        var errname= false;
        var errsurname=false;
        var erremail=false;
        var errphno=false;
        var errpass=false;
        var errconfpass=false;
        var gen=false;
    function check_fname()
    {
        var pattern = /^[a-zA-Z]*$/;
        var fname= $("#name").val();
        if(fname=='')
        {
            $("#nameerr").html("Fillout this field");
            $("#name").addClass("inval").removeClass('val');
            errname=false;
        }

        else if(pattern.test(fname)==false)
        {
            $("#name").html("only alphabelts allowed");
            $("#name").addClass("inval").removeClass('val');
            errname=false;
        }
        else
        {
            $("#name").addClass("val");
            $("#nameerr").hide();
            errname=true;
        }
    }
    function check_sname()
    {
        var pattern = /^[a-zA-Z]*$/;
        var sname= $("#surname").val();
        if(sname=='')
        {
            $("#surnameerr").html("Fillout lastname field");
            $("#surname").removeClass('val').addClass("inval");
            errsurname=false;
        }

        else if(pattern.test(sname)==false)
        {  
            $("#surnameerr").html("only alphabelts allowed in lastname");
            $("#surname").removeClass('val').addClass("inval");
            errsurname=false;
        }
        else
        {
            $("#surname").addClass("val").removeClass("inval");
            $("#surnameerr").hide();
            errsurname=true;

        }
    }
    function check_email()
    {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email= $("#email").val();
        if(email=='')
        {
            $("#emailerr").html("Fillout this field");
            $("#email").removeClass('val').addClass("inval");
            erremail=false;
        }

        else if(pattern.test(email)==false)
        {  
            $("#emailerr").html("invalid email");
            $("#email").removeClass('val').addClass("inval");
            erremail=false;
        }
        else
        {
            $("#email").addClass("val").removeClass("inval");
            $("#emailerr").hide();
            erremail=true;
        }
    }
    function check_pass()
    {
        var pass= $("#pass").val();
        if(pass=='')
        {
            $("#passerr").html("Fillout this field");
            $("#pass").removeClass('val').addClass("inval");
            errpass=false;
        }

        else if(pass.length<8)
        {  
            $("#passerr").html("password must be greater then 8 characters");
            $("#pass").removeClass('val').addClass("inval");
            errpass=false;
        }
        else
        {
            $("#pass").addClass("val").removeClass("inval");
            $("#passerr").hide();
            errpass=true;
        }
    }
    function check_confirm()
    {
        var pass= $("#pass").val();
        var conf=$("#confirm").val();
        if(conf=='')
        {
            $("#confpasserr").html("Fillout confirmpassword field");
            $("#confirm").removeClass('val').addClass("inval");
            errconfpass=false;
        }
        else if(pass!=conf)
        {  
            $("#confpasserr").html("password and confirm password are not same");
            $("#confirm").removeClass('val').addClass("inval");
            $("#pass").removeClass('val').addClass("inval");
            errconfpass=false;

        }
        else
        {
            $("#confirm").addClass("val").removeClass("inval");
            $("#pass").removeClass('inval').addClass("val");
            $("#confpasserr").hide();
            errconfpass=true;
        }
    }
    function check_phno()
    {
        var pattern = /^[a-zA-Z]*$/;
        var phno= $("#phno").val();
        if(phno=='')
        {
            $("#phnoerr").html("Fillout this field");
            $("#phno").removeClass('val').addClass("inval");
            errphno=false;
        }

        else if(pattern.test(phno)==true)
        {  
            $("#phnoerr").html("only numeric values allowed");
            $("#phno").removeClass('val').addClass("inval");
            errphno=false;

        }
        else if(phno.length!=10)
        {
            $("#phnoerr").html("invalid number");
            $("#phno").removeClass('val').addClass("inval");
            errphno=false;
        }
        else
        {
            $("#phno").addClass("val").removeClass("inval");
            $("#phnoerr").hide();
            errphno=true;
        }
    }

    $("#name").focusout(
        function()
        {
           check_fname();
        }
    );
    $("#surname").focusout(
        function()
        {
           check_sname();
        }
    );
    $("#email").focusout(
        function()
        {
           check_email();
        }
    );
    $("#phno").focusout(
        function()
        {
           check_phno();
        }
    );
    $("#pass").focusout(
        function()
        {
           check_pass();
        }
    );
    $("#confirm").focusout(
        function()
        {
           check_confirm();
        }
    );
    $('#showpass').change(function() {
        if($('#showpass').prop('checked'))
        {
            $('#pass').attr('type','text')
            $('#confirm').attr('type','text')
        }
        else{
            $('#pass').attr('type','password')
            $('#confirm').attr('type','password')
        }
    });
    $("#sub").click(
        function()
        {
            errname= false;
            errsurname=false;
            erremail=false;
            errphno=false;
            errpass=false;
            errconfpass=false;
            check_fname();
            check_sname();
            check_email();
            check_phno();
            check_pass();
            check_confirm();
            if( errname===true && errsurname===true && erremail===true && errphno===true && errpass===true && errconfpass===true)
            {
                alert("registration success");
                return true;
            }
            else
            {
                alert("try again");
                return false;
            }
        }
    )
    })