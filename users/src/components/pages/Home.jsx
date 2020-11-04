import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
      };

    return (
        <div className="container">
            <h1>Home page</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>

                            </tr>
                        ))

                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home;