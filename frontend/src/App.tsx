import Header from "./assets/components/Header";
import Salescard from "./assets/components/Salescard";


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Salescard />
          </div>
        </section>
      </main>
    </>
  )

}

export default App;
