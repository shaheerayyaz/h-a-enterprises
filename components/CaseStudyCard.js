'use client'

export default function CaseStudyCard({ salon, location, challenge, solution, result, resultValue, video}) {
  return (
    <div className="mb-12 pb-12 border-b border-text-border last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image/Video Placeholder */}
        <div className="relative bg-background-light rounded-lg h-64 lg:h-80 overflow-hidden border-2 border-dashed border-text-border">
  <video
    className="w-full h-full object-cover"
    src={video} type="video/mp4"
    controls
    autoPlay
    muted
    loop
    playsInline
  >
    Your browser does not support the video tag.
  </video>
</div>

        {/* Content */}
        <div>
          <h3 className="text-3xl font-bold text-primary-navy mb-2">{salon}</h3>
          <p className="text-accent-teal font-semibold mb-6">{location}</p>

          <div className="mb-6">
            <h4 className="font-bold text-primary-navy mb-2">Challenge:</h4>
            <p className="text-text-medium">{challenge}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-primary-navy mb-2">Solution:</h4>
            <p className="text-text-medium">{solution}</p>
          </div>

          <div className="p-4 bg-background-light rounded-lg border border-accent-teal">
            <p className="text-sm text-text-medium mb-1">Result:</p>
            <p className="text-2xl font-bold text-accent-teal">{resultValue}</p>
            <p className="text-text-medium">{result}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
