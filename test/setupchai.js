"use strict";

let chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

let chaiAsPromised = require("chai-as-promised");
const { assert } = require("console");
chai.use(chaiAsPromised);

module.exports = chai;
