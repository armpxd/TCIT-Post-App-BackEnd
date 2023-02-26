import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true
})

