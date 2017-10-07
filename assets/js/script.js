$(document).ready(function(){
    $.get("https://api.github.com/orgs/open-code-community/repos", function(data, status) {
        var x = 0;
        var string = "";
        var description = "";
        $.each(data, function(idx, obj) {
            
    
            if (x === 0) {
                string += '<div class="row">';
                console.log("open");
            }
            x++;
            if (obj.description === null) {
                description = "No description";
            } else {
                description = obj.description;
            }
    
            string += '<div class="project"><h3><a target="_blank" href="' + obj.html_url + '">' + obj.name + '</a></h3><br><p>' + description + '</p></div>';
            console.log(obj.name);
            console.log(obj.description);
            if (x === 3)  {
                string += '</div>';
                console.log("close");
                x = 0;
            }
    
            console.log(x);
        });
        $(".projects-inner").append(string);
    
    });
});

