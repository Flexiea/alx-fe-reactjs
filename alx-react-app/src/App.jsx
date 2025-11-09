import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <WelcomeMessage />

<UserProfile 
  name="Alice" 
  age={25} 
  bio="Loves hiking and photography" 
/>

<Footer />

      <Footer />
    </div>
  );
}

export default App;
