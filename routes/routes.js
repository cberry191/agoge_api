import { deleteMembership, getMemberships, newMembership, updateMembership } from '../controllers/membershipController.js';
import { deleteUser, getUsers, newUser, updateUser } from '../controllers/userController.js';

export const routes = (app) => {
    app.route('/users')
    .post(newUser)
    .get(getUsers)
    .put(updateUser)
    .delete(deleteUser)

    app.route('/memberships')
    .post(newMembership)
    .get(getMemberships)
    .put(updateMembership)
    .delete(deleteMembership)
}