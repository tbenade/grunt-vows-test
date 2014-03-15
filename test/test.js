"use strict";

var VOWS = require("vows"),
    ASSERT = require("assert");

exports.suit = VOWS.describe("dummy test suit")
    .addBatch({
        "passing test": {
            topic: function () {
                return true;
            },

            "is passing": function (topic) {
                ASSERT.isTrue(topic);
            }
        }
    });