const mongoose = require('mongoose');

// Table that contains the voting categories
var categorySchema = new mongoose.Schema({
    category: { type: String, unique: true, required: true },
    active: { type: Boolean, required: true },
    order: { type: Number, required: true }
});

// Function that returns the active categories in order
categorySchema.statics.getActive = async function() {
    return await this.find({ active: true }).sort({ order: 'asc' });
};

module.exports = mongoose.model('Category', categorySchema);