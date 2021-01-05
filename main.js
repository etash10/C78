var images = ["pic1.jpg","pic2.jpg", "pic3.jpg" , "pic4.jpg", "pic1.jpg", "pic3.jpg"];
var names = ["Fmaily Book","Grandpa LS", "Anurag", "Arth", "Saanvi", "Aunt Silkee"];
var i = 0;
function update()
{
    
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
}
