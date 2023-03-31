import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function videoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@mdteixeira</h3>
        <p>Descrição do video</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoMusicFooter__text">
          <p>Título da música</p>
            
          </div>
        </div>
      </div>
      <img 
      className="videoFooter__record"
      alt="Imagem de um vinil girando"
      src="https://privaty.com.br/wp-content/uploads/2023/03/vinil.png"
      
      />
    </div>
  );
}

export default videoFooter;
