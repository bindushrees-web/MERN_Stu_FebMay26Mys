import { ManagingApiState } from "./components/P1";
import { UseEffectLifecycle } from "./components/P2";
import { AxiosLifeCycle } from "./components/P3";
import { CRUDOperation } from "./components/P4";
import { PaginationCaching } from "./components/P5";
import { UploadErrorBoundary } from "./components/P6"
import './App.css'

function App() {
  return (
    <>
     {/* <ManagingApiState /> */}
     {/* < UseEffectLifecycle /> */}
     {/* < AxiosLifeCycle /> */}
     {/* < CRUDOperation /> */}
     {/* < PaginationCaching /> */}
     < UploadErrorBoundary />
    </>
  )
}

export default App
