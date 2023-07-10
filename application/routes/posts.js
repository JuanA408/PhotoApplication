var express = require('express'); // need for creating the router
var router = express.Router();
var db = require("../config/database");
const {successPrint, errorPrint} = require("../helpers/debug/debugprinters");
var sharp = require('sharp');
var multer = require('multer');
var crypto = require('crypto');
var PostError = require('../helpers/error/PostError');
const { route } = require('.');

// takes in an object
var storage = multer.diskStorage({  
    destination: function(req, file, cb){
        cb(null, "public/images/uploads")
    },
    filename: function(req, file, cb){
        let fileExt = file.mimetype.split('/')[1];
        let randomName = crypto.randomBytes(22).toString("hex");
        cb(null, `${randomName}.${fileExt}`);
    }
});

// handling uploads
var uploader = multer({storage: storage});

router.post('/createPost', uploader.single("uploadImage"), (req, res, next) => { // check name
   let fileUploaded = req.file.path;
   let fileAsThumbnail = `thumbnail-${req.file.filename}`;
   let destinationOfThumbnail = req.file.destination + '/' + fileAsThumbnail;
    let title = req.body.postTitle;
    let description = req.body.postDescription;
    let fk_userId = req.session.userId;

    // server-side validation, else BIND error because user entered bad values...they are not set values
    sharp(fileUploaded)
    .resize(200)
    .toFile(destinationOfThumbnail)
    .then(() => {
        let baseSQL = 'INSERT INTO posts (title, dsecription, photopath, thumbnail, created, fk_userid) VALUE(?, ?, ?, ?, now(), ?);';
        return db.execute(baseSQL,[title, description, fileUploaded, destinationOfThumbnail, fk_userId]);
    })
    .then(([results, fields]) => {
        if(results && results.affectedRows) {
            req.flash('success', "Your post was created successfully!");
            res.redirect('/');
        } else {
            throw new PostError('POST could not be created!', 'postimage', 200);
        }
    })
    .catch((err) => {
        if(err instanceof PostError) {
            errorPrint(err.getMessage());
            req.flash('error', err.getMessage());
            res.status(err.getStatus());
            res.redirect(err.getRedirectURL());
        } else {
            next(err);
        }
    })

});

router.get('/search', (req, res, next) => {
    let searchTerm = req.query.search;
    if(!searchTerm) {
        res.send({
            resultsStatus: "info",
            message: "No search term given",
            results: []
        });
    } else {
        let baseSQL = "select id, title, dsecription, thumbnail, concat_ws(' ', title, dsecription) as haystack from posts having haystack like ?;"
        let sqlReadySearchTerm = "%" + searchTerm + "%";
        db.execute(baseSQL, [sqlReadySearchTerm])
        .then(([results, fields]) => {
            if(results && results.length) {
                res.send({
                    resultsStatus: "info",
                    message: `${results.length} results found`,
                    results: results
                })
            } else {
                db.query('SELECT id, title, dsecription, thumbnail, created FROM posts ORDER BY created DESC LIMIT 8',[])
                .then(([results, fields]) => {
                    res.send({
                        resultsStatus: "info",
                        message: "No results where found for your search...but here are 8 posts",
                        results: results
                    })
                })
            }
        })
        .catch((err) => next(err))
    }
})

module.exports = router;

// text on different object than the file