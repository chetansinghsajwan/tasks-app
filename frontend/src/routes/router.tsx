import { OnboardingPage } from '@/pages/onboarding'
import { BrowserRouter, Route, Routes } from 'react-router'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<OnboardingPage />} />
            </Routes>
        </BrowserRouter>
    )
}
