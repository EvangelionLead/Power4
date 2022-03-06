const { buildMatchMemberExpression } = require("@babel/types");

$(".e-list").slideUp(function() {
    $(".e-button").removeClass("open");
  });
  
  $(".e-button").on("click", function() {
    if ($(this).hasClass("open")) {
      $(".e-list").slideUp(function() {
        $(".e-button").removeClass("open");
      });
    } else {
      $(this).addClass("open");
      setTimeout(function() {
        $(".e-list").stop().slideDown();
      }, 200);
    }
    $("#fileupload").change(function(event) {
        var x = URL.createObjectURL(event.target.files[0]);
        $("#fileupload").attr("src",x);
        window.onload = function() {
          var canvas = document.getElementById("myCanvas");
          var ctx = canvas.getContext("2d");
          var img = document.getElementById("fileupload");
          ctx.drawImage(img, 10, 10);
        }; 
        console.log(event);
    });




    function filePreview(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            var reader2 = new createObjectURL();
            var reader3 = new ImageBitmapRenderingContext();
            var reader3 = $('<img src="' + src + '"/>');
            reader3.click(function(){
              ImageBitmapRenderingContext.onchange = evt => {
                const [file] = imgInp.files
                if (file) {
                  blah.src = URL.createObjectURL(file)
                }
              }
            });
            reader.onload = function (e) {
                $('#fileupload + img').remove();
                $('#fileupload').after('<img src="'+e.target.result+'" width="450" height="300"/>');
                $("#fileupload").change(function () {
                    filePreview(this);
                });
               
            };
            reader.readAsDataURL(input.files[0]);
            reader2.createObjectURL(input.files[0]);
            reader3.ImageBitmapRenderingContext(input.files[0]);
        }
    }
      
  });
