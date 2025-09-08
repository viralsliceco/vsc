export default function ContactPage() {
    return (
        <div className="min-h-screen ">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-white mb-1">Contact Us</h1>
                    <p className="text-center text-zinc-400 mb-4">We're here to help! Please fill out the form below and we'll get back to you in 24 hours window.</p>
                    {/* Typeform Embed */}
                    <div className="w-full h-[800px] bg-black rounded-lg shadow-lg overflow-hidden">
                        <iframe
                            src="https://form.typeform.com/to/pBEv6kbf"
                            width="100%"
                            height="100%"
                            allow="camera; microphone; autoplay; encrypted-media;"
                            title="Contact Form"
                            className="w-full h-full"
                        />
                    </div>
                    
                    {/* Fallback link in case iframe doesn't work */}
                    <div className="mt-4 text-center">
                        <p className="text-sm text-zinc-600">
                            Having trouble with the form?{' '}
                            <a 
                                href="https://form.typeform.com/to/pBEv6kbf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-green-600 hover:text-blue-800 underline"
                            >
                                Open it in a new window
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}