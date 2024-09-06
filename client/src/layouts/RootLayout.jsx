import { Route, Routes } from "react-router-dom";
import OfferLetterPage from "../components/Main/OfferLetter";
import LOP from "../components/Main/LOP";
import RecommendationForm from "../components/Main/RecommendationForm";
import Sidebar from "../components/Main/Sidebar";
import Hero from "@/components/Main/Hero";
import Admin from "@/components/Admin/Admin";
import Info from "@/components/Main/Info";
import AcceptancePage from "@/components/Admin/AcceptancePage";
import StudentData from "@/components/Admin/StudentData";
import CoursesPage from "@/components/Admin/CoursesPage";
import CourseDescription from "@/components/Admin/CourseDescription";
import DocumentUpload from "@/components/Admin/DocumentUpload";
import Pap from "@/components/Main/Pap";
import Agreement from "@/components/Admin/Agreement";
import Call from "@/components/Admin/Call";
import Message from "@/components/Admin/Message";
import Details from "@/components/Admin/Details";
import EnrollForm from "@/components/Admin/EnrollForm";

function RootLayout({
  isSidebarOpen,
  handleToggleSidebar,
  isRightSidebarOpen,
  handleToggleRightSidebar,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            handleToggleSidebar={handleToggleSidebar}
            isRightSidebarOpen={isRightSidebarOpen}
            handleToggleRightSidebar={handleToggleRightSidebar}
          />
        }
      >
        <Route index element={<Hero />} />
        <Route path="/offer-letter" element={<OfferLetterPage />} />
        <Route path="/promotion-letter" element={<LOP />} />
        <Route path="/recommendation-form" element={<RecommendationForm />} />
        <Route path="/info" element={<Info />} />
        <Route path="/pap" element={<Pap />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/acceptance-page" element={<AcceptancePage />} />
        <Route path="/admin/student-data" element={<StudentData />} />
        <Route path="/CoursesData" element={<CoursesPage />} />
        <Route path="/admin/document-upload" element={<DocumentUpload />} />
        <Route path="/course/:id" element={<CourseDescription />} />
        <Route path="/course/:id/enroll" element={<EnrollForm />} />
        <Route path="/Agreement" element={<Agreement />} />
        <Route path="/admin/call" element={<Call />} />
        <Route path="/admin/message" element={<Message />} />
        <Route path="/admin/details" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default RootLayout;
