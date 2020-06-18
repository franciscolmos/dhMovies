module.exports = (sequelize, dataTypes) => {
    let alias = "Peliculas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncremental: true
        },
        title: {
            type: dataTypes.STRING,
        },
        awards: {
            type: dataTypes.INTEGER,
        },
        release_date:{
            type: dataTypes.DATEONLY,
        },
        length:{
            type: dataTypes.INTEGER,
        },
        genre_id: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: "movies",
        timestamps: false
    }
    const Pelicula = sequelize.define(alias, cols, config);
    return Pelicula;
}