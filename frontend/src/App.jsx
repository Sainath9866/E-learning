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
import { Sql } from "./sql/sql-main";
import { Cpp } from "./cpp/cpp-main"
import {Java} from "./java/java-main"
import ProtectedRoute from "./LanCom/Protected-Route";
import Tests from "./tests/tests-main"
import Sql_test from "./tests/sql-test"
import Cpp_test from "./tests/cpp-test"
import Java_test from "./tests/java-test"
import ContactPage from "./LanCom/contact";

import Landing from "./Landing"



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>} />
          <Route path="/sql-1" element={<ProtectedRoute><Sql1 /></ProtectedRoute>} />
          <Route path="/sql-2" element={<ProtectedRoute><Sql2 /></ProtectedRoute>} />
          <Route path="/sql-3" element={<ProtectedRoute><Sql3 /></ProtectedRoute>} />
          <Route path="/sql-4" element={<ProtectedRoute><Sql4 /></ProtectedRoute>} />
          <Route path="/sql-5" element={<ProtectedRoute><Sql5 /></ProtectedRoute>} />
          <Route path="/sql-6" element={<ProtectedRoute><Sql6 /></ProtectedRoute>} />
          <Route path="/sql-7" element={<ProtectedRoute><Sql7 /></ProtectedRoute>} />
          <Route path="/sql-8" element={<ProtectedRoute><Sql8 /></ProtectedRoute>} />
          <Route path="/sql-9" element={<ProtectedRoute><Sql9 /></ProtectedRoute>} />
          <Route path="/sql-10" element={<ProtectedRoute><Sql10 /></ProtectedRoute>} />
          <Route path="/sql-11" element={<ProtectedRoute><Sql11 /></ProtectedRoute>} />

          <Route path="/cpp-1" element={<ProtectedRoute><Cpp1 /></ProtectedRoute>} />
          <Route path="/cpp-2" element={<ProtectedRoute><Cpp2 /></ProtectedRoute>} />
          <Route path="/cpp-3" element={<ProtectedRoute><Cpp3 /></ProtectedRoute>} />
          <Route path="/cpp-4" element={<ProtectedRoute><Cpp4 /></ProtectedRoute>} />
          <Route path="/cpp-5" element={<ProtectedRoute><Cpp5 /></ProtectedRoute>} />
          <Route path="/cpp-6" element={<ProtectedRoute><Cpp6 /></ProtectedRoute>} />
          <Route path="/cpp-7" element={<ProtectedRoute><Cpp7 /></ProtectedRoute>} />

          <Route path="/java-1" element={<ProtectedRoute><Java1 /></ProtectedRoute>} />
          <Route path="/java-2" element={<ProtectedRoute><Java2 /></ProtectedRoute>} />
          <Route path="/java-3" element={<ProtectedRoute><Java3 /></ProtectedRoute>} />
          <Route path="/java-4" element={<ProtectedRoute><Java4 /></ProtectedRoute>} />
          <Route path="/java-main" element={<ProtectedRoute><Java /></ProtectedRoute>} />


          <Route path="/sql-main" element={<ProtectedRoute><Sql /></ProtectedRoute>} />
          <Route path="/cpp-main" element={<ProtectedRoute><Cpp /></ProtectedRoute>} />
          <Route path="/tests/tests-main" element={<ProtectedRoute><Tests /></ProtectedRoute>} />
          <Route path="/tests/sql-test" element={<ProtectedRoute><Sql_test/></ProtectedRoute>} />
          <Route path="/tests/cpp-test" element={<ProtectedRoute><Cpp_test /></ProtectedRoute>} />
          <Route path="/tests/java-test" element={<ProtectedRoute><Java_test/></ProtectedRoute>} />
          
          <Route path="/contactus" element={<ProtectedRoute><ContactPage/></ProtectedRoute>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App