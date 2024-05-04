import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Platform from "./pages/Platform";
import Marketing from "./pages/Marketing";
import RoadMap from "./pages/RoadMap";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="platform" />} />

            <Route path="platform" element={<Platform />} />

            <Route path="marketing" element={<Marketing />} />

            <Route path="roadmap" element={<RoadMap />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
