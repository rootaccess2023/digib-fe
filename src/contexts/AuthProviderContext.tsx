import { createContext, useContext, useState } from "react"

interface User {
    id: number,
    email: string,
    first_name?: string,
    last_name?: string,
    created_at?: Date,
}

interface UserContextType {
    user: User | null,
    setUser: (user: User | null) => void,
}

interface Token {
    token: string,
}

interface TokenContextType {
    token: Token | null,
    setToken: (token: Token | null) => void,
}


interface AuthProviderProps {
    children: React.ReactNode,
}

const UserContext = createContext<UserContextType | undefined>(undefined);
const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const AuthProviderContext: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<Token | null>(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            <TokenContext.Provider value={{token, setToken}}>
                {children}
            </TokenContext.Provider>
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser must be used within a UserContext.Provider")
    }
    return context;
}

export const useToken = () => {
    const context = useContext(TokenContext)
    if (!context) {
        throw new Error("useToken must be used within a TokenContext.Provider")
    }
    return context;
}