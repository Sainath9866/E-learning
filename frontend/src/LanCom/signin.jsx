import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Error during sign-in:", error);
            // Optionally, you can set an error state here to display an error message to the user
            alert("An error occurred during signup: " + error.response?.data?.message || error.message);
            
        }
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center bg-white rounded-lg w-80 p-4">
                <Heading label={"Sign in"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="harkirat@gmail.com"
                    label={"Email"}
                />
                <InputBox
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="123456"
                    label={"Password"}
                />
                <div className="pt-4">
                    <Button onClick={handleSignIn} label={"Sign in"} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
        </div>
    );
};
