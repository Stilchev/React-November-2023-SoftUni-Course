import UserItem from "./UserItem";
import { useEffect, useState } from "react";

import * as userService from "../services/userService";
import CreateUserModal from "./CreateUserModal";
import UserInfoModal from "./UserInfoModal";
import UserDeleteModal from "./UserDeleteModal";

const UserListTable = () => {
    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false)
    const [showInfoModal, setShowInfoModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [showDelete, setShowDelete] = useState(false)

    useEffect(() => {
        userService.getAll()
            .then(result => setUsers(result))

    }, [])

    const createUserClickHandler = () => {
        setShowCreate(true);
    }

    const userInfoClickHandler = (userId) => {
        setSelectedUser(userId)

        // const userDetails = await userService.getOne(userId)
        // console.log(userDetails);

        setShowInfoModal(true)

    }

    const hideCreateUserModal = () => {
        setShowCreate(false);
    }

    const hideInfoModal = () => {
        setShowInfoModal(false)
    }

    const userCreateHandler = async (e) => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.currentTarget));

        const newUser = await userService.create(data);

        setUsers(state => [...state, newUser]);

        setShowCreate(false);
    }

    const hideDeleteModal = () => {
        setShowDelete(false)
    }

    const deleteUserHandler = async () => {
        const result = await userService.deleteOne(selectedUser);
        setUsers(state=>state.filter(user=>user._id!==selectedUser))
        setShowDelete(false)
    }

    const deleteUserClickHandler = (userId) => {
        setSelectedUser(userId)
        setShowDelete(true)
    }

    return (
        <div className="table-wrapper">
            {showCreate &&
                <CreateUserModal
                    hideModal={hideCreateUserModal}
                    onCreateUser={userCreateHandler}

                />}

            {showInfoModal && <UserInfoModal
                hideInfoModal={hideInfoModal}
                userId={selectedUser}
            />}

            {showDelete && <UserDeleteModal
                hideDelete={() => setShowDelete(false)}
                onDelete={deleteUserHandler}
            />}

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="svg-inline--fa fa-arrow-down Table_icon__+HHgn icon" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map(user => (
                        <UserItem
                            _id={user._id}
                            key={user._id}
                            onInfoClick={userInfoClickHandler}
                            onDeleteClick={deleteUserClickHandler}
                            // firstName={user.firstName}
                            // lastName={user.lastName}
                            // email={user.email}
                            // imageUrl={user.imageUrl}
                            // phoneNumber={user.phoneNumber}
                            // createdAt={user.createdAt}
                            // updatedAt={user.updatedAt}

                            {...user}
                        />
                    ))}

                </tbody>
            </table>

            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>


        </div>

    )
}

export default UserListTable;