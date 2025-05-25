export default function Profile({ data }) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <img 
          src={data.image} 
          alt={data.name} 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
        <h2 className="text-xl text-blue-600 mb-4">{data.title}</h2>
        <p className="text-gray-600 mb-6">{data.bio}</p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="material-icons mr-2">email</span>
              {data.contact.email}
            </li>
            <li className="flex items-center">
              <span className="material-icons mr-2">phone</span>
              {data.contact.phone}
            </li>
            <li className="flex items-center">
              <span className="material-icons mr-2">location_on</span>
              {data.contact.location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
