import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export function OnboardingPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [displayName, setDisplayName] = useState('')

    function SignupWithUsername() {
        console.log('SignupWithUsername')
    }

    function LoginWithUsername() {
        console.log('LoginWithUsername')
    }

    function ContinueWithGoogle() {}

    function ContinueWithApple() {}

    function ContinueWithGitHub() {}

    function LoginWithOAuthView() {
        return (
            <div className='flex flex-col justify-center items-center w-full h-full gap-3'>
                <Button
                    className='w-100 h-12 text-base'
                    onClick={ContinueWithGoogle}
                >
                    Continue with Google
                </Button>
                <Button
                    className='w-100 h-12 text-base'
                    onClick={ContinueWithApple}
                >
                    Continue with Apple
                </Button>
                <Button
                    className='w-100 h-12 text-base'
                    onClick={ContinueWithGitHub}
                >
                    Continue with Github
                </Button>
                OR
                <div className='flex w-100'>
                    <Button
                        variant='link'
                        className='h-12 text-base'
                        onClick={() => setLoginMethod('username-login')}
                    >
                        Login with username
                    </Button>
                    <Button
                        variant='link'
                        className='h-12 text-base'
                        onClick={() => setLoginMethod('username-signup')}
                    >
                        Signup with username
                    </Button>
                </div>
            </div>
        )
    }

    function SignupWithUsernameView() {
        return (
            <div className='flex flex-col justify-center items-center w-full h-full gap-2'>
                <Input
                    placeholder='Full name'
                    required
                    className='w-100'
                    value={fullName}
                    onChange={(e: any) => setFullName(e.target.value)}
                />
                <Input
                    placeholder='Display name'
                    className='w-100'
                    value={displayName}
                    onChange={(e: any) => setDisplayName(e.target.value)}
                />
                <Input
                    placeholder='Username'
                    required
                    className='w-100'
                    value={username}
                    onChange={(e: any) => setUsername(e.target.value)}
                />
                <Input
                    placeholder='Email'
                    type='email'
                    required
                    className='w-100'
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                <Input
                    placeholder='Password'
                    type='password'
                    required
                    className='w-100'
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <Input
                    placeholder='Confirm password'
                    type='password'
                    required
                    className='w-100'
                    value={confirmPassword}
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                />
                <Button className='w-100' onClick={SignupWithUsername}>
                    Signup
                </Button>
                OR
                <div className='flex'>
                    Already have an account?
                    <Button
                        variant='link'
                        onClick={() => setLoginMethod('username-login')}
                    >
                        Login with email
                    </Button>
                </div>
                <div className='flex'>
                    Continue with
                    <Button
                        variant='link'
                        onClick={() => setLoginMethod('oauth')}
                    >
                        OAuth
                    </Button>
                </div>
            </div>
        )
    }

    function LoginWithUsernameView() {
        return (
            <div className='flex flex-col justify-center items-center w-full h-full gap-2'>
                <Input
                    placeholder='Username'
                    required
                    className='w-100'
                    value={username}
                    onChange={(e: any) => setUsername(e.target.value)}
                />
                <Input
                    placeholder='Password'
                    type='password'
                    required
                    className='w-100'
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <Button
                    className='w-100 h-12 text-base'
                    onClick={LoginWithUsername}
                >
                    Login
                </Button>
                <div className='flex gap-2'>
                    Don't have an account?{' '}
                    <Button
                        variant='link'
                        onClick={() => setLoginMethod('username-signup')}
                    >
                        Sign Up
                    </Button>
                </div>
                <div className='flex gap-2'>
                    Continue with{' '}
                    <Button
                        variant='link'
                        onClick={() => setLoginMethod('oauth')}
                    >
                        OAuth
                    </Button>
                </div>
            </div>
        )
    }

    type LoginMethod = 'oauth' | 'username-login' | 'username-signup'

    const [loginMethod, setLoginMethod] = useState<LoginMethod>('oauth')

    function GetView() {
        if (loginMethod === 'oauth') {
            // return <LoginWithOAuthView />
            return LoginWithOAuthView()
        } else if (loginMethod === 'username-login') {
            // return <LoginWithUsernameView />
            return LoginWithUsernameView()
        } else if (loginMethod === 'username-signup') {
            // return <SignupWithUsernameView />
            return SignupWithUsernameView()
        } else {
            return undefined
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='flex rounded-4xl w-[80%] h-[80%]'>
                <div className='bg-green-100 rounded-l-4xl w-[55%] h-full flex justify-center items-center flex-col'></div>
                <div className='bg-blue-100 rounded-r-4xl w-[45%] h-full flex justify-center items-center flex-col'>
                    <div className='w-150 h-150'>{GetView()}</div>
                </div>
            </div>
        </div>
    )
}
