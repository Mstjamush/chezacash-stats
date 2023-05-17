import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Index from "./Components/Body";
import BulkUpload from "./Components/Body/BulkUpload";
import CreateReport from "./Components/Body/CreateReport";
import NotFound from "./Components/Body/NotFound";
import PnrUpload from "./Components/Body/PnrUpload";
import Base from "./Components/Layout/Base";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route path="/" element={<BulkUpload />}></Route>
            <Route path="/registrations" element={<Index />}></Route>
            <Route path="/deposits" element={<Index />}></Route>
            <Route path="/withdrawals" element={<Index />}></Route>
            <Route path="/stakes" element={<Index />}></Route>
            <Route path="/payouts" element={<Index />}></Route>

            <Route path="/bettingTax" element={<Index />}></Route>
            <Route path="/profitAndLoss" element={<Index />}></Route>
            <Route path="/withholdingTax" element={<Index />}></Route>
            <Route path="/winningAmount" element={<Index />}></Route>
            <Route path="/stakeAfterTax" element={<Index />}></Route>
            <Route path="/exciseDuty" element={<Index />}></Route>
            <Route path="/create-report" element={<CreateReport />}></Route>
            <Route path="/bulk-upload" element={<BulkUpload />}></Route>
            <Route path="/pnr-upload" element={<PnrUpload />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
