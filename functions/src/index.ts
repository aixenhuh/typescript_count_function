import * as functions from 'firebase-functions';
import * as database from '../database/config';

exports.countViewFunction = functions.https.onRequest(async (req,res) => {
    var postId : string = req.query.postId;
    var postList = database.db.collection('posts').doc(postId);
    postList.get().then(function(doc:any) {
        var viewCount:number = 0;
        console.log(doc.data().viewCount);
        if(doc.data().viewCount == null || doc.data().viewCount =="") {
            viewCount = 1;
        } else {
            viewCount = doc.data().viewCount + 1;
        }
        postList.update({
            "viewCount" : viewCount
        })
    });
});