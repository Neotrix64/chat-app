import {useState} from "react"
import './index.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { toaster } from "sonner"
import { apiClient } from '@/lib/api-Client';
import { SIGNUP_ROUTE } from "@/utils/constants"



const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const validateSignUp = () => {
        if (!email.length) {
            console.log("El campo de email está vacío");
            return false;
        }
        if (!password.length) {
            console.log("El campo de contraseña está vacío");
            return false;
        }
        if (password !== confirmPassword) {
            console.log("Las contraseñas no coinciden");
            return false;
        }
        return true;
    };
    

    //7

    const handleLogin = async (e) => {
    }
    
    const handleSignUp = async (e) => {
        e.preventDefault(); // Previene el reinicio de la página
        if (validateSignUp()) {
            try{
                const response = await apiClient.post(SIGNUP_ROUTE, { email, password });
            console.log({ response });
            }catch(error){
                console.log("El email esta repetido "+error);
            }
        }
    }
    

  return (
    <form action="">
        <div className="text-center bg-gray text-white m-9">
            <span className="text-xl text-black">Auth</span>
            <Tabs className=""  defaultValue="login">
                <TabsList className="bg-transparent rounded-none flex">
                    <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-purple-500 p-3 transition-all duration-300">Log in</TabsTrigger>
                    <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-purple-500 p-3 transition-all duration-300 w-96">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="flex flex-col gap-5 mt-10">
                    <Input 
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6 text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6 text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleLogin}>Login</Button>
                </TabsContent>
                <TabsContent value="signup" className="flex flex-col gap-5">
                <Input 
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6 text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6 text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input 
                    placeholder="Confirm Password"
                    type="password"
                    className="rounded-full p-6 text-black"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button onClick={handleSignUp}>Register</Button>
                </TabsContent>
            </Tabs>
        </div>
    </form>
  )
}

export default Auth