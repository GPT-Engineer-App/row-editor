import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Upload, Eye, Download } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // updated to use sidebar layout
import UploadCSV from "./pages/UploadCSV.jsx";
import ViewData from "./pages/ViewData.jsx";
import DownloadCSV from "./pages/DownloadCSV.jsx";
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home", // Feel free to change this to your liking
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Upload CSV",
    to: "/upload-csv",
    icon: <Upload className="h-4 w-4" />,
  },
  {
    title: "View Data",
    to: "/view-data",
    icon: <Eye className="h-4 w-4" />,
  },
  {
    title: "Download CSV",
    to: "/download-csv",
    icon: <Download className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="upload-csv" element={<UploadCSV />} />
              <Route path="view-data" element={<ViewData />} />
              <Route path="download-csv" element={<DownloadCSV />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
