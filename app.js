function data() {
 return new Promise((resolve, reject)=>{
  setTimeout(()  =>{
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res=>{
    if (res.ok) {
                    
    resolve(res.json());
                    
     }
     
     else{
      reject (new Error ("syntax error"));
     }
      })
      .catch((err)=>{
       reject(new Error ("syntax error",err))
 
      });
        },2000);
  });

}
   
 data()  
  const myfun = async()=>{
    try {
      let val = await data()
      console.log(val);
    } catch (error) {
      console.log(error);
    }
  }