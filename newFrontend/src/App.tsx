import { ToastContainer } from "react-toastify"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SuspenseAndErrorBoundary from "./utils/SuspendAndErrorBoundary"
import Dashboard from "./dashboard/Dashboard"

function App() {

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/upload" element={<CertificateUpload />} />
          <Route path='/user/:activepage' element={<UserProfile />} />
          <Route path="/certificates" element={<CertificateDetails />} />
          <Route path="/Edit" element={<Edit />} /> */}
          <Route
            path="*"
            element={
              <div>
                <h1>404 NOT FOUND</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

export const Loadable = (Component: any) => (props: any) => {

  return (
    <SuspenseAndErrorBoundary>
      <Component {...props} />
    </SuspenseAndErrorBoundary>
  );
};