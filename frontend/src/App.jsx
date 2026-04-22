import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventFormPage from "./pages/EventFormPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage";
import RegistrationsListPage from "./pages/RegistrationsListPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />
        <Route path="/events/:eventId/register" element={<RegistrationPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/events/new" element={<EventFormPage mode="create" />} />
        <Route path="/admin/events/:eventId/edit" element={<EventFormPage mode="edit" />} />
        <Route path="/admin/events/:eventId/registrations" element={<RegistrationsListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
