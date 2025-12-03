"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AuthForm({ mode }) {
    const isSignup = mode === "signup";
    const router = useRouter();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function switchMode(path) {
        setFullName("")
        setEmail("")
        setEmail("");
        router.push(path);
    }

    return (
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md border border-gray-100">
            <h2 className="text-lg font-semibold">Welcome</h2>
            <p className="text-sm text-gray-500 mb-6">
                Join the movement for environmental action
            </p>

            <div className="flex bg-gray-100 rounded-full p-1 mb-6">
                <button
                    onClick={() => switchMode("/login")}
                    className={`flex-1 py-2 rounded-full text-sm ${mode === "login"
                        ? "bg-white shadow font-semibold"
                        : "text-gray-500"
                        }`}>
                    Login
                </button>

                <button
                    onClick={() => switchMode("/signup")}
                    className={`flex-1 py-2 rounded-full text-sm ${mode === "signup"
                        ? "bg=white shadow font-semibold"
                        : "text-gray-500"
                        }`} > Sign Up</button>
            </div>

            <form className="flex flex-col gap-5">

                {isSignup && (
                    <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-800">Full Name</label>
                        <input
                            place holder="John Doe"
                            className="p-3 bg-gray-100 rounded border border-gray-200"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                )}

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-800">Email</label>
                    <input
                        placeholder="Email"
                        className="p-3 bg-gray-100 rounded border border-gray-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-800">Password</label>
                    <input
                        placeholder="password"
                        className="p-3 bg-gray-100 rounded border border-gray-200"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className="bg-green-600 text-white py-3 rounded-lg mt-3 hover:bg-green-700 transition"
                >
                    {isSignup ? "Create Account" : "Login"}
                </button>
            </form>
        </div>
    );

}