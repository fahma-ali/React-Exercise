import React, { useContext } from "react";
import ContactContext from "./ContactContext";

export const ContactItem = ({ list,setEditInfo,setContact }) => {
    const { dispatch } = useContext(ContactContext);

    return (
        <li>
            <h3>{list.name}
                {
                   list.favorite && '  ★'
                }
            </h3>

            <p>Email: {list.email}</p>

            <p>Phone: {list.phone}</p>

            <button
                onClick={() =>
                    dispatch({
                        type: "favorite",
                        payload: list.id
                    })
                }
            >{
                list.favorite? 'Unfavorite':'favorite'
            }
               
            </button>

            <button onClick={() =>{
                setEditInfo(list)
                setContact(list)
                console.log("edit data",list)
            }}>
                Edit
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "delete",
                        payload: list.id
                    })
                }
            >
                Delete
            </button>
        </li>
    );
};