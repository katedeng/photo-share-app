import mongoose from 'mongoose';



// create a schema
const schemaInfo = mongoose.Schema({
    version: String,
    load_date_time: { type: Date, default: Date.now },
});

// the schema is useless so far
// we need to create a model using it
const SchemaInfo = mongoose.model('SchemaInfo', schemaInfo);

// make this available 
export default SchemaInfo;