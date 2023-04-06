function func1(){
    return new Promise(function(resolve,reject){
      setTimeout(()=>{
        const error=true;
        if(error!=true){
          console.log("Promise has been resolved");
          resolve("solving");
        }
        else{
          console.log("Your promise has not resolved")
          reject("sorry not fulfilled")
        }
      },2000)
    })
  }

  func1().then(function(solve){
    console.log("Thanks for resolving" + solve)
  }).catch(function(error){
    console.log("very bad " + error)
  })

  





















