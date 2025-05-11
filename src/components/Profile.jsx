

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  ">
      
      {/* Judul Profile */}
      <h2 className="text-3xl font-bold text-gray-700 mt-10 mb-8">Profile</h2>

      {/* Kartu Profile */}
      <div className="border-transparent bg-gray-100 rounded-lg shadow-lg w-[550px] px-10 flex justify-between items-start">
        
        {/* Bagian kiri: Info profil */}
        <div className="flex flex-col">
          <div className='my-3'>
            <h4 className="text-lg font-semibold text-gray-400">Nama</h4>
            <p className="text-sm font-bold">Tony Stark</p>
          </div>
          <div className='my-3'>
            <h4 className="text-lg font-semibold text-gray-400">Alamat</h4>
            <p className="text-sm font-bold">Malibu Mansion</p>
          </div>
          <div className='my-3'>
            <h4 className="text-lg font-semibold text-gray-400">No. HP</h4>
            <p className="text-sm font-bold">212-970-4133</p>
          </div>
          <div className='my-3'>
            <h4 className="text-lg font-semibold text-gray-400">Email</h4>
            <p className="text-sm font-bold">@starkenterprises.com</p>
          </div>
          <div className='my-3'>
            <h4 className="text-lg font-semibold text-gray-400">Motto</h4>
            <p className="text-sm font-bold">The best thing about a boolean is even if you are wrong, you are only off by a bit.</p>
          </div>
        </div>

        {/* Bagian kanan: Foto */}
        <img
          src="https://i.pravatar.cc/100"
          alt="avatar"
          className="rounded-full w-20 object-cover my-10"
        />
      </div>
    </div>
  );
};

export default Profile;
