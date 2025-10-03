import './App.css'
import Footer from './Footer';
import Header from './Header';
import MainBody from './MainBody';

export default function App(){
  return (
    <>
      <Header></Header>
      <MainBody id="main"></MainBody>
      <Footer></Footer>
    </>
  );
}