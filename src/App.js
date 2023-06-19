import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#09a509ff",
              color: "white",
              fontWeight: "bold",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
              fontWeight: "bold",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
