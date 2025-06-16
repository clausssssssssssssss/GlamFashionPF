import React from "react";

const ListClients = ({ clients, onEdit, onDelete }) => {
  return (
    <div>
      {clients.map((client) => (
        <div key={client._id} className="grid grid-cols-6 gap-4 p-2 border-b text-sm">
          <span>{client.name}</span>
          <span>{client.lastName}</span>
          <span>{client.birthday?.split("T")[0]}</span>
          <span>{client.email}</span>
          <span>{client.phone || "-"}</span>
          <span className="flex gap-2">
            <button onClick={() => onEdit(client)} className="text-blue-500">Edit</button>
            <button onClick={() => onDelete(client._id)} className="text-red-500">Delete</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ListClients;
