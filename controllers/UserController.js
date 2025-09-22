"use strict";
import { Models } from "../models/index.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import jwt from "jsonwebtoken";

export const getUsers = () => {
    return Models.Users.findAll()
        .then(function (data) {
            return data;
        })
        .catch(err => {
            throw err;
        });
};

export const getUsersBy = (data) => {
    return Models.Users.findAll({
        where:
            { [data.filter]: data.value }
    })
        .then(function (data) {
            return data;
        })
        .catch(err => { 
            throw err;
        });
}

export const createUser = async (data) => {
    console.log(data.password)
    data.password = await bcrypt.hash(password, 10);
    console.log(data.password)
    return Models.Users.create(data)
        .then(function (data) {
            console.log(data)
            return data;
        })
        .catch(err => {
            throw err;
        });
}

export const updateUser = async (data) => {
    data.password? data.password = await bcrypt.hash(password, 10): null
    const returnData = data;
    return Models.Users.update(data, {
        where: {
            id:
                data.id
        }
    })
        .then(function (data) {
            console.log(returnData)
            return returnData;
        })
        .catch(err => {
            throw err;
        });
}

export const updateUsersBy = async (data) => {
    data.password? data.password = await bcrypt.hash(password, 10): null
    const returnData = data;
    return Models.Users.update(data, {
        where: { [data.filter]: data.value }
    })
        .then(function (data) {
            return returnData;
        })
        .catch(err => {
            throw err;
        });
}

export const deleteUsersBy = (data) => {
    const returnData = data;
    return Models.Users.destroy({
        where: { [data.filter]: data.value }
    })
        .then(function (data) {
            return returnData;
        })
        .catch(err => {
            throw err;
        });
}

export const deleteAllUsers = (data) => {
    return Models.Users.truncate()
        .then(function (data) {
            return data;
        })
        .catch(err => {
            throw err;
        });
}

export const loginUser = (data) => {
    return Models.Users.findOne({ where: { username: data.username } }).then(
        async function (user) {
            // If the user exists and the password is correct, send the user data as a response
            if (user && (await bcrypt.compare(data.password, user.password))) {
                // Replace "your-secret-key" with your actual secret key
                const secretKey = process.env.JWT_SECRET;

                // Create a payload with user information
                const payload = {
                    userId: user.id,
                    username: user.username,
                };

                // Generate a token with jwt.sign
                const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
                console.log(token)

                user.token = token
                // Send the user data and token in the response
                return [user]  ;
            } else {
                return "Invalid User";
            }
        }
    ).catch(err => {
        throw err;
    });
};

export const lockUsers = () => {
    return Models.Users.findAll({
        // export const [results, metadata] = await sequelize.query(
        //     "SELECT c.*, u.id AS userId FROM comments c JOIN users u ON c.userId = u.id"
        //   );
        // transaction: t1,
        lock: {
            // level: t1.LOCK,
            of: Models.Users
        }
    });
}

export const unlockUsers = () => {
    return Models.Users.findAll({
        unlock: {
            // level: t1.LOCK,
            of: Users
        }
    });
}