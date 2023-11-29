import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const [selectedRoles, setSelectedRoles] = useState({});

    useEffect(() => {
        const roles = {};
        users.forEach(user => {
            roles[user._id] = user.role;
        });
        setSelectedRoles(roles);
    }, [users]);

    const handleUpdateUser = user => {
        const updatedRole = selectedRoles[user._id] || user.role;
        axiosSecure.patch(`/users/admin/${user._id}`, { role: updatedRole })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is now ${selectedRoles[user._id]}!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };

    const handleRoleChange = (userId, role) => {
        setSelectedRoles({ ...selectedRoles, [userId]: role });
    };

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-pink-400 text-white font-bold text-lg">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? (
                                        'Admin'
                                    ) : (
                                        <div>
                                            <select
                                                value={selectedRoles[user._id] || "user"}
                                                onChange={(e) =>
                                                    handleRoleChange(user._id, e.target.value)
                                                }
                                            >
                                                <option value="user">User</option>
                                                <option value="surveyor">Surveyor</option>
                                                <option value="admin">Admin</option>
                                                <option value="pro-user">Pro User</option>
                                            </select>
                                            <button
                                                onClick={() => handleUpdateUser(user)}
                                                className="btn btn-sm bg-pink-600"
                                            >
                                                <GrUpdate className="text-white text-2xl"></GrUpdate>
                                            </button>
                                        </div>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg"
                                    >
                                        <FaTrashAlt className="text-red-600 f"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
