var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg", "https://image.shutterstock.com/image-vector/cheerful-toddler-sitting-collects-pyramid-260nw-422493724.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg"];
var names = ["Fmaily Book","Aryan", "Aarav", "Sindhu", "Prince", "Sulahadavi"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
  
    var updatedImage = images[i] ;
  
    var updatedName = names [i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
