import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { LoginPage } from '@/pages/login'
import { SignupPage } from '@/pages/signup'
import { TasksPage } from '@/pages/tasks'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/tasks' replace />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/tasks' element={<TasksPage />} />
            </Routes>
        </BrowserRouter>
    )
}
