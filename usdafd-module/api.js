
// verify phone function needs to be fixed just used as a sample
const superagent = require('superagent');

// base url to use for request
const base = 'https://api.nal.usda.gov/fdc/v1';

// insert your api key for veriphone here
const apiKey = ""; // api key here

// search api function to search by phone number and/or country_code id
const searchID = async (food_id) => {
    try {
        const idURL = `${base}/food/${food_id}?api_key=${apiKey}`;
        
        const res = await superagent.get(verifyURL);
        console.log(res.body);
    } catch (error) {
        console.log(error);
    }
};

const search = async (query) => {
    try {
       const queryURL = `${base}/foods/search?api_key=${apiKey}&query=${query}` 

       const res = await superagent.get(queryURL);
       console.log(res.body);
    } catch (error) {
        console.log(error);
    }
};
// test
//searchID(1104067);
//search('Cheddar cheese');

module.exports = {
    searchID,
    search
};