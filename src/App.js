import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={100}
          messages={200}
          shares={300}
          name="nome 1"
          description="descricao 1"
          music="musica 1"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        />
        <Video 
          likes={400}
          messages={500}
          shares={600}
          name="nome 2"
          description="descricao 2"
          music="Musica 2"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"

        />
        </div>
    </div>
  );
}

export default App;
