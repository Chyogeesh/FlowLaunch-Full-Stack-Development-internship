export default function Skills({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Technical Skills</h2>
      <div className="flex flex-wrap gap-4">
        {data.map((skill, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
