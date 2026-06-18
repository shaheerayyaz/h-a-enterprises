'use client'

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  mediaType,   // "video" | "image" | null
  mediaSrc     // "/videos/file.mp4"
}) {
  return (
    <div className="card">

      {/* MEDIA SECTION (OPTIONAL) */}
      {mediaSrc && (
        <div className="mb-6 rounded-lg h-48 overflow-hidden border border-text-border">
          
          {mediaType === "video" ? (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source src={mediaSrc} type="video/mp4" />
            </video>
          ) : (
            <img
              src={mediaSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}

        </div>
      )}

      {/* ICON */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* TITLE */}
      <h3 className="text-2xl font-bold mb-3 text-primary-navy">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-text-medium mb-6">
        {description}
      </p>

      {/* FEATURES */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-accent-teal text-xl mt-1">✅</span>
            <span className="text-text-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="text-accent-teal font-semibold hover:text-accent-teal-dark transition"
      >
        Learn More →
      </a>

    </div>
  )
}