import './App.css';
import WhosYourDaddy from './WhosYourDaddy';

function App() {
  return (
   <WhosYourDaddy id="1">
     <div>
       <h1>Foo bar baz</h1>
       <article>
         <WhosYourDaddy id="2">
           <h2>Krugle rapante</h2>
           <p>Foo bar baz</p>
           <p><WhosYourDaddy id="3">Foo bar baz</WhosYourDaddy></p>
         </WhosYourDaddy>
       </article>
     </div>
   </WhosYourDaddy>
  );
}

export default App;
