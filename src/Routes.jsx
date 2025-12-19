import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/Loading/LoadingScreen'

const HomePage = React.lazy(() => import('./pages/Home/Home'));
const AboutPage = React.lazy(() => import('./pages/About/About'));
const CompaniesPage = React.lazy(() => import('./pages/Companies/Companies'));
const Jobs_DetailsPage = React.lazy(() => import('./pages/Job_Application/Job_Application'));
const LoginPage = React.lazy(() => import('./pages/Login/Login'));
const SignUpPage = React.lazy(() => import('./pages/SignUp/SignUp'));


export default function AppRoutes() {
    return (
        <React.Suspense fallback={<LoadingScreen />}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/companies' element={<CompaniesPage />} />
                <Route path='/job_application' element={<Jobs_DetailsPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
            </Routes>
        </React.Suspense>
    );
}




