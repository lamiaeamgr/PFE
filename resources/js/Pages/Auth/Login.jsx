import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
        
            <Head title="Log in" />
        <div className="theme-layout">
            <div className="container-fluid pdng0">
                <div className="row merged">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="land-featurearea">
                            <div className="land-meta">
                                <h1>Winku</h1>
                                <p>
                                    Winku is free to use for as long as you want with two active projects.
                                </p>
                                <div className="friend-logo">
                                    <span><img src="images/wink.png" alt="Winku Logo" /></span>
                                </div>
                                <a href="#" title="" className="folow-me">Follow Us on</a>
                            </div>    
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="login-reg-bg">
                            <div className="log-reg-area sign">
                                <h2 className="log-title">Login</h2>
                                <p>
                                    Don’t use Winku Yet? <a href="#" title="">Take the tour</a> or <a href="#" title="">Join now</a>
                                </p>
                                <form method="post"  onSubmit={submit}>
                                    <div className="form-group">    
                                        <input type="email" id="Email" required="required" onChange={(e) => setData('email', e.target.value)}/>
                                        <label className="control-label" htmlFor="Email">Email</label><i className="mtrl-select"></i>
                                    </div>
                                    <div className="form-group">    
                                        <input type="password" id="password" required="required" onChange={(e) => setData('password', e.target.value)}/>
                                        <label className="control-label" htmlFor="password">Password</label><i className="mtrl-select"></i>
                                    </div>
                                    <InputError message={errors.password} className="mt-2" />

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" defaultChecked /><i className="check-box"></i>Always Remember Me.
                                        </label>
                                    </div>
                                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="forgot-pwd"
                        >
                            Forgot your password?
                        </Link>
                    )}
                                    <div className="submit-btns">
                                        <PrimaryButton className="ms-4 mtr-btn signin" disabled={processing}>
                        Log in
                    </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 

           
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
                </form>*/}</> 
    );
}
