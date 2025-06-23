export default function Header() {
    return (
        <header className="sticky top-0 bg-white shadow z-50">
            <nav className="flex justify-between items-center max-w-6xl mx-auto py-4 px-6">
                <div className="text-2xl font-bold">Institution Name</div>
                <div className="space-x-4">
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#services" className="hover:text-blue-600">Services</a>
                    <a href="#contact" className="hover:text-blue-600">Contact</a>
                </div>
            </nav>
        </header>
    );
}
  