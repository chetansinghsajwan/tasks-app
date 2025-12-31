import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { LoginPage } from '@/pages/login'
import { SignupPage } from '@/pages/signup'
import { TasksPage } from '@/pages/tasks'
import { TaskPage } from '@/pages/task'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/task/1' replace />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route path='/tasks' element={<TasksPage />} />
                <Route path='/tasks/:id' element={<TaskPage />} />
            </Routes>
        </BrowserRouter>
    )
}
