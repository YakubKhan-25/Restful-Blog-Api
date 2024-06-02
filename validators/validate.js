const { validationResult } = require('express-validator')
const validate = (req, res, next)=>{
    const errors = validationResult(req);
    const mappederrors = {}
    if(Object.keys(errors.errors).length === 0){
        next();
    }else{
        errors.errors.map((error)=>{
            mappederrors[error.path] = error.msg;
        })
    }
    res.status(400).json(mappederrors);
}

module.exports = { validate }