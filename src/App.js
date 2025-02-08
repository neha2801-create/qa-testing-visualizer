import React from 'react';
import Header from './component/layouts/Header';
import Footer from './component/layouts/Footer';
import KidsQATestingApp from './component/features/KidsQATestingApp';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <KidsQATestingApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;