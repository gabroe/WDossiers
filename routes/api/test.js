(function () {

    var express = require('express'),
        router = express.Router(),
        path = require('path');

    /* GET test page. */
    router.get('/', function (req, res) {

        res.redirect("./reference");

    });

    module.exports = router;

})();


