const readline = require("readline");
const chalk = require("chalk");
const user = require("./user");
const profile = require("./profile");
const login = require("./Login");
const connections = require("./connections"); 

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function showMenu (){
    console.log(chalk.blue("\nWelcome To LinkedIn Clone Menu Page"));
    console.log("1. Create profile");
    console.log("2. View my profile");
    console.log("3. Edit profile");
    console.log("4. View Other Profiles");
    console.log("5. Send Connection Request");
    console.log("6. View Requests");
    console.log("7. Accept / Reject Requests");
    console.log("8. View Connections");
    console.log("9. Create Post");
    console.log("10. View Feed");
    console.log("11. Like / Comment");
    console.log("12. Exit");
    console.log("13. Login profile");

    rl.question("\nEnter your choice : ",(choice)=>{
        handleChoice(choice);
    });
}

function handleChoice(choice){
    switch(choice){

        case "1":
            user.createProfile(rl, showMenu);
            return;

        case "2":
            user.viewMyProfile(showMenu);
            return;

        case "3":
            profile.editProfile(rl, showMenu);
            return;

        case "4":
            user.viewOtherFile(showMenu);
            return;
    
        case "5":
            connections.sendConnectionRequest(rl, showMenu);
            return;

        case "6":
            connections.viewRequests(showMenu);
            return;

        case "7":
            connections.handleRequests(rl, showMenu);
            return;

        case "8":
            connections.viewConnections(showMenu);
            return; 

        case "9":
            console.log(chalk.green("Create post"));
            break;

        case "10":
            console.log(chalk.green("View feed"));
            break;

        case "11":
            console.log(chalk.green("Like/Comment"));
            break;

        case "12":
            console.log(chalk.red("Exit"));
            rl.close();
            return;

        case "13":
            login.loginProfile(rl,showMenu);
            return;

        default:
            console.log(chalk.yellow("Invalid choice"));
    }
    showMenu();
}
showMenu();