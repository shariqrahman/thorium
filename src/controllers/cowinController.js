const axios = require('axios')

// 1.
let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// 2.
let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// 3.
let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// 4.
let getOtp = async function(req, res){
    try {
        let mobileNumber = req.body
        if(mobileNumber) {
            let options = {
                method : "post",
                url : "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
                data : mobileNumber
            }
        let result = await axios(options)
        res.status(200).send({status: true, msg: result.data})
        }
        else {
            res.status(400).send({status: false, msg:"please provide mobile number"})
        }
    }
    catch (err) {
        res.status(500).send({error: err.message})
    }
}


// 5.
let getByDistrict = async function (req, res){
    try{
        let districts = req.query.district_id
        let date = req.query.date
        if(districts && date) {
            let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districts}&date=${date}`
            }
            let result = await axios(options)
            res.status(200).send({status: true, msg: result.data})
        } 
        else {
          res.status(400).send({status: false, msg: "please provide the input"})
       }  
    } 
    catch (err) {
        res.status(500).send({error: err.message})
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrict = getByDistrict




















