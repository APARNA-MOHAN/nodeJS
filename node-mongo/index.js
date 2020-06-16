const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to server'); //if that doesn't happen, then that means that we have connected properly to the server, so we'll say `connected correctly to server`

    const db = client.db(dbname);//to connect to the database,
    const collection = db.collection("dishes");
    collection.insertOne({"name": "Uthappizza", "description": "test"},
    (err, result) => {
        assert.equal(err,null);//the assert will check to see if error is equal to null, so the assert function allows us to perform various checks on values

        console.log("After Insert:\n");
        console.log(result.ops);//So, after we insert, then we see that we get the result value that is returned there, so this result. This result will also provide this OPS property which says how many operations have just been carried out successfully.


        //try to search in all collection and then convertto array
        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);//make sure error is nt null
            
            console.log("Found:\n");
            console.log(docs);//docs return all the docs in the collection dat match whatever criteria dat we've mentioned

            //remove the collection
            db.dropCollection("dishes", (err, result) => {
                assert.equal(err,null);

                client.close();
            });
        });
    });

});