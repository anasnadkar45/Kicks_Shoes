import { Avatar } from '@nextui-org/react';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function UserDetails({ formData, setFormData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("formData after handleInputChange:", formData);
  };

  const oldPassword = formData.password;

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFormData({
        ...formData,
        profile: URL.createObjectURL(file),
        profileFile: file,
      });
      console.log("formData after handleFileChange:", formData);
    }
  };

  const handleUserDetails = (e) => {
    e.preventDefault();
    // handleInputChange(e);
    // handleFileChange(e);
    console.log("formData after handleUserDetails:", formData);
  };

  const [showPassword, setShowPasword] = useState(false)
  // const [save , setSave] = useState('')
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
      <Avatar src={formData.profile} className='h-24 w-24 mb-4 rounded-full' />
      <div className='w-full max-w-md bg-white rounded-md p-6 shadow-md'>
        <form onSubmit={handleUserDetails} className='flex flex-col gap-4'>
          <label className='w-full'>
            Profile Picture:
            <div className="max-w-md h-40 rounded-full border-2 border-dashed flex items-center justify-center">
              <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
                <svg className="w-10 h-10 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your  file</span> or drag and drop your file here</p>
              </label>
              <input id="file" type="file" accept="image/*"
                onChange={handleFileChange} className="hidden" />
            </div>
          </label>
          <label className='w-full'>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className='w-full bg-transparent border-2 rounded-md p-2 border-gray-200 focus:outline-none focus:border-2 focus:border-[#6366f1]'
            />
          </label>
          <label className='w-full'>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className='w-full bg-transparent border-2 rounded-md p-2 border-gray-200 focus:outline-none focus:border-2 focus:border-[#6366f1]'
            />
          </label>

          <label className='relative '>
          <p className='text-left text-[13px]'>Currunt Password</p>
            <div className='flex items-center'>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={oldPassword}
                // onChange={handleInputChange}
                className='w-full bg-transparent border-2 rounded-md p-2 border-gray-200 focus:outline-none focus:border-2 focus:border-[#6366f1]'
              />
              <span
                className='absolute right-2 cursor-pointer'
                onClick={() => setShowPasword((prev) => !prev)}
              >
                {showPassword ? <AiOutlineEyeInvisible className='text-gray-400' /> : <AiOutlineEye className='text-gray-400' />}
              </span>
            </div>
          </label>

          <label className='relative '>
          <p className='text-left text-[13px]'>New Password</p>
            <div className='flex items-center'>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                // value={formData.password}
                onChange={handleInputChange}
                className='w-full bg-transparent border-2 rounded-md p-2 border-gray-200 focus:outline-none focus:border-2 focus:border-[#6366f1]'
              />
              <span
                className='absolute right-2 cursor-pointer'
                onClick={() => setShowPasword((prev) => !prev)}
              >
                {showPassword ? <AiOutlineEyeInvisible className='text-gray-400' /> : <AiOutlineEye className='text-gray-400' />}
              </span>
            </div>
          </label>

          <button
            type="submit"
            className='w-full py-2 text-white bg-[#6366f1] rounded focus:outline-none hover:bg-[#4f4fcb] transition duration-300'
          >
            Save
          </button>
        </form>
      </div>
    </div>

  );
}

export default UserDetails;
