const mongoose = require("mongoose")

const isValid = function (value) {
    if (typeof (value) == "undefined" || typeof (value) == null) {
        console.log("1")
        return false
    }

    if (typeof (value) == "string" && (value).trim().length == 0) {
        console.log("2")
        return false
    }

    return true
}

const isValidObjectId = function (value) {
    return mongoose.Types.ObjectId.isValid(value)

}

const nameValidationRegex = function (value) {
    return /^[a-zA-Z -._\s]*$/.test(value)
}

const emailValidationRegex = function (value) {
    return /^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(value)
}

const phoneValidationRegex = function (value) {
    return /^[6789]\w{9}$/.test(value)
}

// const regCurrencyId = function (value){
//     return /^[I]{1}[N]{1}[R]{1}$/.text(value)
// }

const passwordValidationRegex = function (value) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(value)
}

// -----------------product regex
const titleValidationRegex = function (value){
    return /^[A-Za-z0-9_*-]/.test(value)
}

const priceValidationRegex = function (value){
    return /^\d{0,8}[.]?\d{1,4}$/.test(value)
}

const regPincode = function (value){
    return /^\d+(\.\d{2})?$/.test(value)
}
const regCurrency = function(value){
    return /^[₹]{1}$/.test(value)
}

const isValidSize = (value) => {
    let correctSize = ["S", "XS", "M", "X", "L", "XXL", "XL"]
    return (correctSize.includes(value))
}


module.exports = { isValid, nameValidationRegex, isValidObjectId, emailValidationRegex,
     phoneValidationRegex, passwordValidationRegex,
     regPincode,regCurrency,titleValidationRegex,priceValidationRegex, isValidSize}

// ^₹ (([0-9]+\,[0-9]+)|([0-9]+[.]?[0-9]*(?:L|Cr)?))$

// /^\d*\.?\d*$/                              

// /\d+\.?\d*/

//       /^\d*\.?\d*$/

// /\d+\.?\d*/

// /^[+-]?((\d+(\.\d*)?)|(\.\d+))$/ ========

// ^\d+(\.\d+)?$\  =======

// \d+\.?\d*

// ^\d*\.?\d+$

// ^\d+(\.\d)?\d*$   =============

// ^0$|^[1-9]\d*$|^\.\d+$|^0\.\d* =======

// ^[+-]?(([1-9][0-9]*)?[0-9]

// '^[+-]?(([1-9][0-9]*)?[0-9]

// ^\d+(\.\d*)?$

// ^\d+(\.\d{2})?$

// (?<![^d])\d+(?:\.\d+)?(?![^d])  ==========================

// ^\d+(()|(\.\d+)?)$      =========================

// ^[0-9]\d{0,9}(\.\d{1,3})?%?$    ==================


