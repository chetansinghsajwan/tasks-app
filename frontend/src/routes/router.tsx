import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { LoginPage } from '@/pages/login'
import { SignupPage } from '@/pages/signup'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/login' replace />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    )
}
