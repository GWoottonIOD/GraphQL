"use strict";
import { Models } from "../models/index.js";

export const getDebts = () => {
    return Models.Debts.findAll()
        .then(function (data) {
            return data;
        })
        .catch(err => {
            throw err;
        });
};

export const getDebtsBy = (filter, value) => {
    return Models.Debts.findAll({ where: { [filter]: value } })
        .then(function (data) {
            // console.log(data)
            return data;
        })
        .catch(err => {
            throw err;
        });
}

export const createDebt = (data, res) => {
    Models.Debts.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

export const updateDebt = (req, res) => {
    Models.Debts.update(req.body, {
        where: {
            id:
                req.params.id
        }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

export const updateDebtsBy = (req, res) => {
    Models.Debts.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

export const deleteDebtsBy = (req, res) => {
    Models.Debts.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

export const deleteAllDebts = (data, res) => {
    Models.Debts.truncate().then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

export const deleteDebtsByUserID = (req, res) => {
    Models.Debts.destroy({ where: { userid: req.params.userid } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

export const lockDebts = (req, rest) => {
    Models.Debts.findAll({
        // export const [results, metadata] = await sequelize.query(
        //     "SELECT c.*, u.id AS userId FROM comments c JOIN users u ON c.userId = u.id"
        //   );
        // transaction: t1,
        lock: {
            // level: t1.LOCK,
            of: Models.Debts
        }
    });
}

export const unlockDebts = (req, rest) => {
    Models.Debts.findAll({
        unlock: {
            // level: t1.LOCK,
            of: Debts
        }
    });
}