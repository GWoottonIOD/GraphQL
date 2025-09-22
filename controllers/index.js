import { getDebts, createDebt, getDebtsBy, updateDebt, deleteDebtsBy,  lockDebts, unlockDebts, deleteDebtsByUserID, deleteAllDebts} from "./debtController.js";

const debtController = {
    getDebts, getDebtsBy, createDebt, updateDebt, deleteAllDebts, lockDebts, unlockDebts, deleteDebtsByUserID, deleteAllDebts, deleteDebtsBy
}
export default debtController