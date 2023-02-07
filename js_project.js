
let submitbtn=document.getElementById("submit");
let ul=document.getElementById("ullist");
//let h1=document.getElementById("catagory");
let food=document.getElementById("food").value;
let electronics=document.getElementById("Electronics").value;
let skincare=document.getElementById("skincare").value;




submitbtn.addEventListener("click", StoreData);




function StoreData(e){
    e.preventDefault();
   
     let name=document.getElementById("name").value;
     let email=document.getElementById("email").value;
     let catagory1=document.getElementById("catagory").value;
     let bothVal=`${name} - ${email}`;
     let li=document.createElement("li");
     let text=document.createTextNode(bothVal);
   
     let myObj={
         name,
         email,
         catagory1
      }
     
        axios.post(`https://crudcrud.com/api/c5b203ded20144048da713e8ff8dcc9e/data`, myObj)
          .then((response)=>{
            //console.log(response.data.catagory1)
            display(response.data);
          }
          );
}




window.addEventListener("DOMContentLoaded",()=>{
      axios.get(`https://crudcrud.com/api/c5b203ded20144048da713e8ff8dcc9e/data`)
            .then((response)=>{
               for(let i=0;i<response.data.length;i++){
                  display(response.data[i]);
               }
            }); 

})





function display(respons){
 // console.log(respons.catagory1);
    let li =document.createElement("li");
    li.textContent = respons.name +" -" + respons.email+"-"+respons.catagory1;
   



    let deletebtn = document.createElement("input");
    deletebtn.type = "button";
    deletebtn.value = "Delete";
    li.appendChild(deletebtn);
    
    deletebtn.onclick =()=>{
      // if(confirm("are u sure")){
      //   deleteUser(`${respons._id}`);
      // }
      deleteUser(`${respons._id}`);
    } 
    
    function deleteUser(userId){
         axios.delete(`https://crudcrud.com/api/c5b203ded20144048da713e8ff8dcc9e/data/${userId}`)
              .then((res)=>{
                ul.removeChild(li);
              })
      }

     
      
    


    // function removeitam(userId){
    //        let ul=document.getElementById("ullist");
    //        let dlt=document.getElementById("userId")
    //        if(dlt){
    //         ul.removeChild(dlt);
    //        }
    // }



    let editbtn = document.createElement("input");
    editbtn.type = "button";
    editbtn.value = "Edit";
    li.appendChild(editbtn);

    let catagory2=respons.catagory1;
     //
    // add_in_H1(respons.catagory1)
    // disp(catagory2)
      
      
    //   function disp(itam){
    //      if(itam==food){
    //    // console.log(catagory2);
    //     let foood=document.getElementById("food1");
    //     foood.appendChild(li);
    //     }  
    //     else if(itam==electronics){
    //       let electronics=document.getElementById("electronics1");
    //       electronics.appendChild(li);
    //     }      
    //     else{
    //       let skincare=document.getElementById("skincare1");
    //       skincare.appendChild(li);
    //     }
    //   }
      
    ul.appendChild(li);

    editbtn.onclick =()=>{
        // localStorage.removeItem(respons.email);
        // ul.removeChild(li);
        // document.getElementById("name").value = respons.name;
        // document.getElementById("email").value = respons.email;
        editUser(`${respons._id}`);

    }

    function editUser(userid){
      axios.delete(`https://crudcrud.com/api/c5b203ded20144048da713e8ff8dcc9e/data/${userid}`)
           .then((res)=>{
             ul.removeChild(li);
            document.getElementById("name").value = respons.name;
            document.getElementById("email").value = respons.email;
           })
     
    }

  }
