'use client'

export default function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-text-border rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left font-bold text-primary-navy hover:bg-background-light transition flex justify-between items-center"
      >
        <span>{question}</span>
        <span className="text-accent-teal text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-background-light border-t border-text-border">
          <p className="text-text-medium">{answer}</p>
        </div>
      )}
    </div>
  )
}
