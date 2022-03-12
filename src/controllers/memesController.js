const axios = require("axios");

// 1.
let getMemes = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes",
        };
        let result = await axios(options);
        res.status(200).send({ status: true, msg: result.data });
    } 
    catch (error) {
        res.status(500).send({ error: error.message });
    }
};


// 2.
let createMemes = async function (req, res) {
    try {
        let meme_id = req.query.template_id;
        let firstText = req.query.text1;
        let secondText = req.query.text2;
        let userName = req.query.username;
        let password = req.query.password;

        if (meme_id && firstText && secondText && userName && password) {
            let options = {
                method: "post",
                url: `https://api.imgflip.com/caption_image?template_id=${meme_id}&text0=${firstText}&text1=${secondText}&username=${userName}&password=${password}`,
            };
            let result = await axios(options);
            res.status(200).send({ status: true, msg: result.data });
        }
        else {
            res.status(400).send({ status: false, msg: "Please provide valid input data" });
        }
    } 
    catch (err) {
        res.status(500).send({ error: err.message });
    }
};

module.exports.getMemes = getMemes;
module.exports.createMemes = createMemes;
