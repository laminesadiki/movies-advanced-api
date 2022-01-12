const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    genres: {
        type: Array,
        required: true
    },
    director: {
        type: Array,
        required: true
    },
    actors: {
        type: Array,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    },
});

const MovieModel = mongoose.model("movies",MovieSchema);

module.exports = MovieModel;