import Users from "./users.js"
import { DataTypes, Model } from "sequelize";
import {sequelize} from "../dbConnect.js";

export default class Debts extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Debts.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },

    userID: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: Users, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },
    duedate: {
        type: DataTypes.DATE, allowNull: true, required: false
    },
    total: {
        type: DataTypes.INTEGER, allowNull: false, required: false
    },
    paid: {
        type: DataTypes.BOOLEAN, allowNull: true, required: true
    },
    amount: {
        type: DataTypes.INTEGER, allowNull: false, required: true
    },
    createdAt: {
        type: DataTypes.DATE, allowNull: true, required: false
    },
    updatedAt: {
        type: DataTypes.DATE, allowNull: true, required: false
    },
},
    {
        sequelize: sequelize, modelName: 'Debts', 
        timestamps: true, 
        freezeTableName: true
    }
)