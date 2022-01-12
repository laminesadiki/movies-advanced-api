const joi = require("joi");

const movieValidation = (data) => {
    const schema = joi.object({
        id: joi.number().required(),
        title: joi.string().required(),
        year: joi.number().required(),
        runtime: joi.number().required(),
        genres: joi.array().required(),
        director: joi.array().required(),
        actors: joi.array().required(),
        plot: joi.string().required(),
        posterUrl: joi.string().required(),
    });

    return schema.validate(data);
}



module.exports = movieValidation;