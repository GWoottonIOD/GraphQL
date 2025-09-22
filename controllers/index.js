import { getDebts, createDebt, getDebtsBy, updateDebt, updateDebtsBy, deleteDebtsBy,  lockDebts, unlockDebts, deleteAllDebts} from "./DebtController.js";
import { getUsers, createUser, getUsersBy, updateUser, updateUsersBy, deleteUsersBy,  lockUsers, unlockUsers, deleteAllUsers} from "./UserController.js";

export const DebtController = {
    getDebts, getDebtsBy, createDebt, updateDebt, updateDebtsBy, deleteAllDebts, lockDebts, unlockDebts, deleteAllDebts, deleteDebtsBy
}

export const UserController = {
    getUsers, createUser, getUsersBy, updateUser, updateUsersBy, deleteUsersBy,  lockUsers, unlockUsers, deleteAllUsers
}
