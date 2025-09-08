'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import api from '@/utils/api';

const Signup = () => {
  const router = useRouter();

  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post('/signup', {
        username: name,
        email: email,
        password: password,
        role: 'admin', // 👈 force role to admin
      });

      if (response.status === 200 || response.status === 201) {
        // ✅ Navigate to signin page after signup
        router.push('/Admin/signin');
      }
    } catch (error: any) {
      console.error('Signup error:', error?.response?.data || error.message);
      // you can show toast or error message here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-custom-gradient min-h-screen">
      <div className="max-w-[1024px] w-screen mx-auto h-[100%] gap-[3rem] flex flex-col">
        <div className="h-[40%]">
          <h1 className="font-[Poppins] text-white text-[45px] font-bold leading-[67.5px] tracking-[0.04em] text-left from-font decoration-none pt-[5rem] pl-4">
            Admin Sign Up
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-[50%] flex flex-col gap-4 items-center"
        >
          <div className="w-[90%] flex flex-col justify-between gap-3 mt-4">
            <label className="font-[Poppins] text-[18px] font-normal leading-[19.8px] text-left text-lightblue">
              Name
            </label>
            <input
              className="w-full rounded-[15px] h-[40px] border border-black p-2 focus:outline-none"
              type="text"
              name="Name"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="font-[Poppins] text-[18px] font-normal leading-[19.8px] text-left text-lightblue">
              Email
            </label>
            <input
              className="w-full rounded-[15px] h-[40px] border border-black p-2 focus:outline-none"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="font-[Poppins] text-[18px] font-normal leading-[19.8px] text-left text-lightblue">
              Password
            </label>
            <input
              className="w-full rounded-[15px] h-[40px] border border-black p-2 focus:outline-none"
              type="password"
              name="Password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex items-center gap-2">
              <Switch id="acceptance" />
              <label
                className="font-[Poppins] text-[14px] font-normal"
                htmlFor="acceptance"
              >
                I accept the terms and policy
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white bg-lightpurple border px-[100px] py-3 font-[Poppins] text-[20px] font-normal leading-[30px] tracking-[0.04em] rounded-[30px]"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          <div className="flex flex-col justify-center items-center">
            <p className="font-[Poppins] text-[16px] font-light leading-[24px] tracking-[0.02em] text-left ">
              or signup with
            </p>
            <Image
              src="/logos_google.png"
              alt="google logo"
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
          </div>

          <div className="flex justify-center items-center w-[90%] mx-auto">
            <Link
              className="font-[poppins] text-sm font-light leading-6 tracking-wide text-left"
              href="/Admin/signin"
            >
              Already Have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
