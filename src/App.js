import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="page-container">
        <div className="content-wrap">
        <Layout>
        <h1>Welcome</h1>
        <p>
          Post Stories from Best and Worst of your life and choose for them to be read by the world or 
          completely private like your own personal diary.
        </p>
        </Layout>
        </div>
        <Footer />
    </div>
  );
}

export default App;
