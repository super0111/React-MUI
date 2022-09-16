/*
 * Credit Card validation
 *
 * Results:
 *  false = invalid card
 *  1 = american express
 *  2 = visa
 *  3 = mastercard
 *  4 = discover
 *  5 = dinerss club or carte blanche
 *  6 = enRoute
 *  7 = JCB
 */

'use strict';

// Object.defineProperty(exports, '__esModule', {
//     value: true
// });

function checkPosition(character, position) {
    return this.indexOf(character) === position;
}

// American Express
function checkIfAmericanExpress(number) {
    var first = checkPosition.call(number, '3', 0);
    var second = checkPosition.call(number, '4', 1) || checkPosition.call(number, '7', 1);

    if (first && second) {
        return true;
    }

    return false;
}

// Visa
function checkIfVisa(number) {
    if (checkPosition.call(number, '4', 0)) {
        return true;
    }

    return false;
}

// Master Card
function checkIfMasterCard(number) {
    var first = checkPosition.call(number, '5', 0);

    var second = number[1] >= 1 && number[1] <= 5;

    if (first && second) {
        return true;
    }

    return false;
}

// Discover
function checkIfDiscover(number) {
    var firstEight = number.substring(0, 8);

    if (firstEight >= 60110000 && firstEight <= 60119999) {
        return true;
    }

    if (firstEight >= 65000000 && firstEight <= 65999999) {
        return true;
    }

    if (firstEight >= 62212600 && firstEight <= 62292599) {
        return true;
    }

    return false;
}

// Diners Club
function checkIfDinersClub(number) {
    var first = checkPosition.call(number, '3', 0);
    var second = checkPosition.call(number, '0', 1) || checkPosition.call(number, '6', 1) || checkPosition.call(number, '8', 1);

    if (first && second) {
        return true;
    }

    return false;
}

// JCB
function checkIfJcb(number) {
    var firstFour = checkPosition.call(number, '3088', 0) || checkPosition.call(number, '3096', 0) || checkPosition.call(number, '3112', 0) || checkPosition.call(number, '3158', 0) || checkPosition.call(number, '3337', 0);

    if (firstFour) {
        return true;
    }

    var firstEight = number.substring(0, 8);

    if (firstEight >= 35280000 && firstEight <= 35899999) {
        return true;
    }

    return false;
}

function validate(creditCardNumber) {
    var number = creditCardNumber.toString();

    // American Express
    var isAmericanExpress = checkIfAmericanExpress(number);
    if (isAmericanExpress) return true;
    // VISA
    var isVisa = checkIfVisa(number);
    if (isVisa) return true;
    // MasterCard
    var isMasterCard = checkIfMasterCard(number);
    if (isMasterCard) return true;
    //  Discover
    var isDiscover = checkIfDiscover(number);
    if (isDiscover) return true;
    // JCB
    var isJcb = checkIfJcb(number);
    if (isJcb) return true;
    // Diners Club or Carte Blanche
    var isDinersClub = checkIfDinersClub(number);
    if (isDinersClub) return true;

    return false;
}

validate.isAmericanExpress = function (creditCardNumber) {
    return checkIfAmericanExpress(creditCardNumber);
};

validate.isVisa = function (creditCardNumber) {
    return checkIfVisa(creditCardNumber);
};

validate.isMasterCard = function (creditCardNumber) {
    return checkIfMasterCard(creditCardNumber);
};

validate.isDiscover = function (creditCardNumber) {
    return checkIfDiscover(creditCardNumber);
};

validate.isDinersClub = function (creditCardNumber) {
    return checkIfDinersClub(creditCardNumber);
};

validate.isJCB = function (creditCardNumber) {
    return checkIfJcb(creditCardNumber);
};

module.exports = validate;