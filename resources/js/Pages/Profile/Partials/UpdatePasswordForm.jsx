import { useRef, Fragment } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <Fragment>
            <section className={className}>

                <div className="col-lg-6">
                    <div className="central-meta">
                        <div className="editing-info">
                            <h5 className="f-title"><i className="ti-lock"></i>Change Password</h5>

                            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                                <div className="form-group">
                                    <input
                                        type="password"
                                        id="current_password"
                                        name="current_password"
                                        value={data.current_password}
                                        ref={currentPasswordInput}
                                        onChange={(e) => setData('current_password', e.target.value)}
                                        required
                                    />
                                    <label className="control-label" htmlFor="current_password">Current password</label><i className="mtrl-select"></i>
                                    <InputError message={errors.current_password} className="mt-2" />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={data.password}
                                        ref={passwordInput}
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                                    <label className="control-label" htmlFor="password">New password</label><i className="mtrl-select"></i>
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        ref={currentPasswordInput}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />
                                    <label className="control-label" htmlFor="password_confirmation">Confirm password</label><i className="mtrl-select"></i>
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="submit-btns">
                                        <button type="button" className="mtr-btn"><span>Cancel</span></button>
                                        <button type="submit" className="mtr-btn"><span>Update</span></button>
                                    </div>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                                    </Transition>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
