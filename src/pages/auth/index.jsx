import {useState} from "react"
import './index.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleLogin = async () =>{
        
    }

    const handleSignUp = async () =>{
        
    }

  return (
    <form action="">
        <div className="text-center bg-gray text-white m-9">
            <span class="text-xl text-black">Auth</span>
            <Tabs className="" defaultValue="login">
                <TabsList class="bg-transparent rounded-none flex">
                    <TabsTrigger value="login" class="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-purple-500 p-3 transition-all duration-300">Log in</TabsTrigger>
                    <TabsTrigger value="signup" class="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-purple-500 p-3 transition-all duration-300 w-96">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="flex flex-col gap-5 mt-10">
                    <Input 
                    placeholder="Email"
                    type="email"
                    className="rounded=full p-6 text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                    placeholder="Password"
                    type="password"
                    className="rounded=full p-6 text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleLogin}>Login</Button>
                </TabsContent>
                <TabsContent value="signup" className="flex flex-col gap-5">
                <Input 
                    placeholder="Email"
                    type="email"
                    className="rounded=full p-6 text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                    placeholder="Password"
                    type="password"
                    className="rounded=full p-6 text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input 
                    placeholder="Confirm Password"
                    type="password"
                    className="rounded=full p-6 text-black"
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