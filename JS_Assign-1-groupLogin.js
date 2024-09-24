
var teamnum = 4; // Team number as a numeric
// List of valid team members
var ni = "Nilavan";
var sa = "Sarath";
var ma = "Mathew";
var lu = "Luke";
var grp;

// Ask the user for their group number
var grp = prompt("Which group do you belong to?");

    // Check if the user belongs to group 4

if(+grp === teamnum){
    var fname = prompt("Enter First Name");
     // Check if the entered name is a valid team member
    switch(fname.toLowerCase()){
        case "nilavan":
            alert("You are welcome to the group 4 Mr.Seranilavan");
            break;
            case "sarath":
            alert("You are welcome to the group 4 Mr.Sarath Saji");
            break;
            case "mathew":
            alert("You are welcome to the group 4 MrMathew Potts");
            break;
            case "luke":
            alert("You are welcome to the group 4 Luke Wright");
            break;
            default:
            alert("Access Denied!");

            

    }
    }
     
    else {  alert("Access Denied!");
      }
    
