export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'academics', label: 'Academics/Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'extras', label: 'Extras' }
  ];

  return (
    <nav className="flex space-x-4">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded-md ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
