import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('Waiting..')

  async function getQuote(){
		try{
			const data = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
			const res = await data.json();
			console.log(res);
			setQuote(res)
		}
		catch(e){
			console.log(`Error: ${e}`)
		}
  }
	function handleQuote(){
		getQuote();
	}
	useEffect(()=>{
		 getQuote();
	},[])

  return (
    <div className="App">
      <h2>Useless facts 🥱</h2>
      <section className="information">
      <h4>{quote.text}</h4>
			<p>Source url: <a href={quote.source_url}>{quote.source_url}</a></p>
      <button onClick={handleQuote}>Get another fact</button>
      </section>
    </div>
  )
}

export default App
