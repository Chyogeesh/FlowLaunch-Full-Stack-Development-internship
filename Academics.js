export default function Academics({ data }) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
        <div className="space-y-6">
          {data.academics.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-xl font-semibold">{item.institution}</h3>
              <p className="text-gray-600">{item.degree}</p>
              <p className="text-gray-500 text-sm">{item.year}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Experience</h2>
        <div className="space-y-6">
          {data.experience.map((item, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-xl font-semibold">{item.company}</h3>
              <p className="text-gray-600">{item.position}</p>
              <p className="text-gray-500 text-sm mb-2">{item.duration}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
