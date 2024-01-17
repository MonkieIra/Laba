import { useState } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Par from './components/Par/par';


function App() {

  let links = ['Главная', 'Новости' , 'Мои достижения' , 'Товары' , 'Фото'];

  const [isShow , setIsShow] = useState(true);




  return (
    <div className="App">
      <Header img="https://freepngimg.com/save/139511-vector-single-flowers-free-clipart-hd/600x564" text='Ирина Матросова'/>
      <Nav links={links}/>
      <button onClick={() => { setIsShow(! isShow) }}>
          { isShow ? 'Скрыть' : 'Показать' }
        </button>
        { isShow && <Par par='В северных лесах живёт сова. Но не простая сова, а полярная. Эта сова белая. Лапы мохнатые, покрыты перьями. Густые перья берегут ноги птицы от мороза.' />}
      <Footer copyright='@copyright все права защищены' year={(new Date()).getFullYear()}/>
    </div>
  );
}

export default App;
