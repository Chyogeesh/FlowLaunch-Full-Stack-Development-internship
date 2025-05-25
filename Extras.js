export default function Extras({ data }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Goals</h3>
        <ul className="list-disc pl-5 space-y-2">
          {data.goals.map((goal, index) => (
            <li key={index} className="text-gray-700">{goal}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Hobbies</h3>
        <ul className="list-disc pl-5 space-y-2">
          {data.hobbies.map((hobby, index) => (
            <li key={index} className="text-gray-700">{hobby}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Certifications</h3>
        <ul className="list-disc pl-5 space-y-2">
          {data.certifications.map((cert, index) => (
            <li key={index} className="text-gray-700">{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
