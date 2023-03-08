 
const js = (name) => {
    if (name === "Nill") {
        return function (topic) {
            console.log(` Hi ${name}. What is Course? ${topic}`)
        }
    }
  

    if (name === "Raj") {
        return function (topic) {
            console.log(` Hi ${name}. What is Course? ${topic}`)
        }
    }


    if (name === "Jhon") {
        return function (topic, syllbus) {
            console.log(` Hi ${name}. What is Course? ${topic} ${syllbus}`)
        }
    }
}
js("Jhon")("Angular", "full")
js("Nill")("React")
js("Raj")("Node")



///////////////////////////////////////////////////////////////////



let data = [
    {
      firstname: "Sagnik",
      lastname: "Datta",
      contact: "8689990019",
    },
    {
      firstname: "Nill",
      lastname: "Datta",
      contact: "9832045658",
    },
    {
      firstname: "Rohan",
      lastname: "Datta",
      contact: "9832045623",
    }
  ]
  
   data?.map((item) => {
    return(
      console.log(item?.name)
     
    )
   
  });



  ///////////////////////////////////////////////////////////////////



  let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
let bigCities = [];
for (let i = 0; i <= cities.length; i++) {
   
    if (cities[i]?.population > 3000000) {
        //  console.log(cities[i].population)
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);



////////////////////////////////////////////////////////////////////////



const bioData={
    Name:"Nll",
    Roll:23,
    Address:"Kolkata",
    hobby:{
        first:"traveling",
        second:"slepping"
    }
}
let{Name,Address,hobby}=bioData
console.log(hobby)



