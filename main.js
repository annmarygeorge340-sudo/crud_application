let users =[]

if (sessionStorage.getItem("users")) {
    users=JSON.parse(sessionStorage.getItem("users"))
    displayuserlist()
    
}
//1
userform.addEventListener('submit',(event)=>{
    event.preventDefault()
    //add userss to the user array
    const usernameinput=username.value
    const useremailinput=email.value
    console.log(usernameinput,useremailinput);
   //2 
    //add users to array
    if (usernameinput&&useremailinput) {
        const edituserdetail= editstatus.value
    
    if(edituserdetail==""){
        users.push({username:usernameinput, email:useremailinput})
        console.log(users);
        
        }else{
            users[edituserdetail]={username:usernameinput, email:useremailinput}
        }}
        else{
            alert("please fill the form completely")
        }
        userform.reset()
        sessionStorage.setItem("users",JSON.stringify(users))
        displayuserlist()
})

//3

//display uswr detials in table
function displayuserlist(){
    usertable.innerHTML=""  
    users.forEach((item,index)=>{
    usertable.innerHTML += `
    <tr>
                    <td>${index+1}</td>
                    <td>${item.username}</td>
                    <td>${item.email}</td>

                    <td>
                        <button onclick="edituser(${index})"  class="btn btn-warning">Edit</button>

                        <button onclick="deleteuser(${index})" class="btn btn-danger"> Delete </button>
                    </td>
                </tr>
        `})

}



//edit user

function edituser(userindex){
    const userdetails=users[userindex]
    console.log(userdetails);//console eduth nokiya kanan attum
    
    username.value=userdetails.username
    email.value=userdetails.email
    editstatus.value=userindex


}

//delete user

function deleteuser(userindex){
    if (confirm("are you sure you want to delete the data")) {
        users.splice(userindex,1)
         sessionStorage.setItem("users",JSON.stringify(users))
        displayuserlist()
        
    }
}

