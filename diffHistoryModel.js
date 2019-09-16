const mongoose = require('mongoose');
const { Schema } = mongoose;

const operations = { INSERT: 'insert', UPDATE: 'update', REMOVE: 'remove' };

const historySchema = new Schema(
    {
        collectionName: String,
        collectionId: Schema.Types.ObjectId,
        diff: {},
        user: {},
        reason: String,
        operation: { type: String, enum: Object.values(operations) },
        version: { type: Number, min: 0 }
    },
    {
        timestamps: true
    }
);

module.exports = {
    model: mongoose.model('History', historySchema),
    operations
};
