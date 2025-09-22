"use strict";
import { Models } from "../models/index.js";

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

export const createUser = (data) => {
    return Models.Users.create(data)
        .then(function (data) {
            console.log(data)
            return data;
        })
        .catch(err => {
            throw err;
        });
}

export const updateUser = (data) => {
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

export const updateUsersBy = (data) => {
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