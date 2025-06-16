import { useState, useEffect } from "react";

const API = "/api/clients";

export function useDataClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener todos los clientes al cargar
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setClients(data);
    } catch (err) {
      setError("Error cargando clientes");
    } finally {
      setLoading(false);
    }
  };

  const addClient = async (clientData) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clientData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setClients(prev => [...prev, data.user]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateClient = async (id, updates) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      const updated = await res.json();
      setClients(prev => prev.map(c => (c._id === id ? updated : c)));
    } catch (err) {
      setError("Error al actualizar cliente");
    } finally {
      setLoading(false);
    }
  };

  const deleteClient = async (id) => {
    setLoading(true);
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      setClients(prev => prev.filter(c => c._id !== id));
    } catch (err) {
      setError("Error al eliminar cliente");
    } finally {
      setLoading(false);
    }
  };

  return {
    clients,
    loading,
    error,
    addClient,
    updateClient,
    deleteClient,
  };
}
