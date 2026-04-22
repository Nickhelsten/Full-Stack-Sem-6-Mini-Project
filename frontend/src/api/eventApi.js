import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

const api = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUpcomingEvents = async () => {
  const response = await api.get("/events");
  return response.data;
};

export const getEventById = async (eventId) => {
  const response = await api.get(`/events/${eventId}`);
  return response.data;
};

export const registerForEvent = async (eventId, formData) => {
  const response = await api.post(`/events/${eventId}/registrations`, formData);
  return response.data;
};

export const getAdminEvents = async () => {
  const response = await api.get("/admin/events");
  return response.data;
};

export const createEvent = async (formData) => {
  const response = await api.post("/admin/events", formData);
  return response.data;
};

export const updateEvent = async (eventId, formData) => {
  const response = await api.put(`/admin/events/${eventId}`, formData);
  return response.data;
};

export const deleteEvent = async (eventId) => {
  await api.delete(`/admin/events/${eventId}`);
};

export const getRegistrationsByEvent = async (eventId) => {
  const response = await api.get(`/admin/events/${eventId}/registrations`);
  return response.data;
};

export const getApiErrorMessage = (error) => {
  const validationErrors = error?.response?.data?.validationErrors;
  if (validationErrors?.length) {
    return validationErrors.join(", ");
  }

  return error?.response?.data?.message || error?.message || "Something went wrong. Please try again.";
};
