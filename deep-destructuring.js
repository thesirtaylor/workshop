// While working on COVID-19 RISE project, I had to write 10 seperate pages containing 
//the same organization and almost the same data, so instead of writing a page for each manunally
//I thought I could write just one big data collection and destructure into the pages dynamically or 
//automagicaaly

//here i was able to destructure the large data set I created from the given data

//the data
//----10 pages (represented as objects), -each with a header(represented as object property),
// a title (also an object property) and a list (represented as an array).----

let xobjects  = {
    //page 1
    1:{
        header: "1 of 10",
        title: "Are you experiencing any of the following?",
        body: [
            "- Cough",
            "(Coughing a lot for more than an hour or more in the last 24 hours. If you usually have a cough. It may be worse than usual)",
            "- Shortness of breath",
            "- Difficulty in breathing"
            ]
    },
    2:{
         header: "2 of 10",
        title: "Are you experiencing any of the following?",
        body: [
            "- Fever (Body temperature 38ºC or higher/ back or chest is hot to touch)",
            "- Chills",
            "- Repeated shaking and chills"
            ]
    }, 
    3:{
        header: "3 of 10",
        title: "Are you experiencing any of the following?",
        body: [
            "- Fever (Body temperature 38ºC or higher/ back or chest is hot to touch)",
            "- Chills",
            "- Repeated shaking with chills"
            ]
    },
    4:{
        header: "4 of 10",
        title: "Are you experiencing any of the following?",
        body: [
            "- Persistent pain or pressure in the chest",
            "- Muscle pain",
            "- Continous sweating"
            ]
    },
    5:{
        header: "5 of 10",
        title: "Are you experiencing any of the following?",
        body: [
            "- Losing consciousness",
            "- Drowsiness",
            "- Unusually cold",
            "- Paleness of skin"
            ]
    }, 
    6:{
        header: "6 of 10",
        title: "Are you experiencing any of the following?",
        body: [
            "- Trouble when waking up",
            "- Getting really confused",
            "- Bluish lips or face"
            ]
    },
    7:{
        header: "7 of 10",
        title: "Have you travelled to any country outside Nigeria within the last 14 days?",
    },
    8:{
        header: "8 of 10",
        title: "Have you been in close contact (within 2 metres) with anyone who has been outside the country within the last 14 days?"
    },
    9:{ header: "9 of 10",
        title: "Have you travelled to any state apart from your state of residence?"
      },
    10:{
        header: "10 of 10",
        title: "Have you been in close contact or provided care for anyone suspected or confirmed to have COVID-19?"
    }
};


for (const property in xobjects){
  const x = xobjects[property].body
  function spread(x){
    Object.values(x).forEach((ex) =>{
      console.log(ex);
    });
  }        
	console.log(xobjects[property].header);
    console.log(xobjects[property].title);
    spread({...x})
};