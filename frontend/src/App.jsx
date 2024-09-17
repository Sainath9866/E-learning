import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./LanCom/signup";
import { Signin } from "./LanCom/signin";
import { Dashboard } from "./LanCom/dashboard";
import { Sql1 } from "./sql/sql-1";
import { Sql2 } from "./sql/sql-2";
import { Sql3 } from "./sql/sql-3";
import { Sql4 } from "./sql/sql-4";
import { Sql5 } from "./sql/sql-5";
import { Sql6 } from "./sql/sql-6";
import { Sql7 } from "./sql/sql-7";
import { Sql8 } from "./sql/sql-8";
import { Sql9 } from "./sql/sql-9";
import { Sql10 } from "./sql/sql-10";
import { Sql11 } from "./sql/sql-11";
import { Cpp1 } from "./cpp/cpp-1";
import { Cpp2 } from "./cpp/cpp-2";
import { Cpp3 } from "./cpp/cpp-3";
import { Cpp4 } from "./cpp/cpp-4";
import { Cpp5 } from "./cpp/cpp-5";
import { Cpp6 } from "./cpp/cpp-6";
import { Cpp7 } from "./cpp/cpp-7";

import { Java1 } from "./java/java-1";
import { Java2 } from "./java/java-2";
import { Java3 } from "./java/java-3";
import { Java4 } from "./java/java-4";


import Landing from "./Landing"

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sql-1" element={<Sql1 />} /> 
          <Route path="/sql-2" element={<Sql2 />} /> 
          <Route path="/sql-3" element={<Sql3 />} />   
          <Route path="/sql-4" element={<Sql4 />} />   
          <Route path="/sql-5" element={<Sql5 />} />
          <Route path="/sql-6" element={<Sql6 />} />
          <Route path="/sql-7" element={<Sql7 />} />
          <Route path="/sql-8" element={<Sql8 />} />
          <Route path="/sql-9" element={<Sql9 />} />
          <Route path="/sql-10" element={<Sql10 />} />
          <Route path="/sql-11" element={<Sql11 />} />
          <Route path="/cpp-1" element={<Cpp1 />} />
          <Route path="/cpp-2" element={<Cpp2 />} />
          <Route path="/cpp-3" element={<Cpp3 />} />
          <Route path="/cpp-4" element={<Cpp4 />} />
          <Route path="/cpp-5" element={<Cpp5 />} />
          <Route path="/cpp-6" element={<Cpp6 />} />
          <Route path="/cpp-7" element={<Cpp7 />} />
          <Route path="/java-1" element={<Java1 />} />
          <Route path="/java-2" element={<Java2 />} />
          <Route path="/java-3" element={<Java3 />} />
          <Route path="/java-4" element={<Java4 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App