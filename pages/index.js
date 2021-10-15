import React, { useState } from 'react';
import Head from 'next/head'



export default function Home() {

  const [downloads, setDownloads] = useState([]);



  const onUpload = async (e) => {

    const length = e.target.files.length;
    for (var i = 0; i < length; i++) {

      const file = e.target.files[i];
      const filename = encodeURIComponent(file.name);

      const formData = new FormData();
      formData.append("arquivo", file);

      const _init = {
        method: 'GET',
      };

      let requestAPI = new URL(`https://converter.blog.br/Converter/upload`);
      let upload = await fetch(requestAPI, {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          return response.text();
        })
        .then(text => {
          const str = '[data-id="' + i + '"]';
          const down = document.querySelectorAll(str)[0];
          down.setAttribute("href", `https://converter.blog.br/Converter/download/${text}`);
          down.classList.remove("none");
          down.classList.add("block");
        })
        .catch((error) => {
          console.log('error: ' + error);
          return error;
        });




    }




    const modal = document.getElementsByClassName('modal_aviso_carregando_upload')[0];
    modal.classList.remove("block");
  }

  const onChange = async (e) => {

    const length = e.target.files.length;

    let str = [];
    for (var i = 0; i < length; i++) {
      const download = {
        name: e.target.files[i].name,
        file: e.target.files[i],
        hash: '',
        id: i,
      }

      str.push(download);
    }

    setDownloads(str);

    const modal = document.getElementsByClassName('modal_aviso_carregando_upload')[0];
    modal.classList.add("block");
    setTimeout(function () { onUpload(e); }, 1000);


  }



  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Converter Heic to JPEG gratuitamente</title>
        <meta name="description" content="O conversor HEICtoJPG é uma ferramenta online gratuita que converte fotos do iOS 11 ou posterior de HEIC para JPEG / JPG, com tecnologia desenvolvida pela Rocktools" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Converter Heic to JPEG gratuitamente | Rocktools" />
        <meta property="og:description" content="O conversor HEICtoJPG é uma ferramenta online gratuita que converte fotos do iOS 11 ou posterior de HEIC para JPEG / JPG, com tecnologia desenvolvida pela Rocktools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@digitalrocktools" />
        <meta name="twitter:creator" content="@digitalrocktools" />
        <meta name="twitter:title" content="Converter Heic to JPEG gratuitamente | Rocktools" />
        <meta name="twitter:description" content="O conversor HEICtoJPG é uma ferramenta online gratuita que converte fotos do iOS 11 ou posterior de HEIC para JPEG / JPG, com tecnologia desenvolvida pela Rocktools" />
        <meta name="copyright" content="HEIC to JPEG from Rocktools" />
        <meta name="author" content="Rocktools" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </Head>

      <header className="menu">
        <div className="logo">HEIC para JPEG</div>

      </header>


      <section id="section_convert">
        <div className="container">
          <section id="container_upload">
            <div className="upload">
              <h1>HEIC para JPEG</h1>
              <p>Selecione os arquivos HEIC para converter</p>
            </div>
            <div className="modal" id="modal">
              <div className="modal_container_arquivos">
                <p className="modal_aviso_limite_de_arquivos">Você só pode enviar no máximo 3 arquivos</p>

                <div className="input_fields_wrap">
                  <div id="modal_line_arquivos" className="modal_line_arquivos">
                    {downloads && downloads.map((d, index) => {
                      return <Downloads download={d} key={index} />
                    })
                    }

                  </div>
                </div>
                <p className="modal_aviso_carregando_upload">convertendo...</p>
                <div className="modal_upload">

                  <label htmlFor="upload">
                    <span className="btn" aria-hidden="true" id="button_upload">
                      Upload
                    </span>
                    <input type="file" name="file" id="upload" className="arquivo none" multiple accept=".heic" onChange={(event) => onChange(event)} />
                  </label>


                </div>
              </div>
            </div>
          </section>
        </div>
      </section >



      <section id="container_passos">
        <header>
          <h2>Como converter arquivos HEIC para JPEG?</h2>
        </header>
        <p>A nossa ferramenta online e gratuita irá converter todas as suas imagens de HEIC para o formato JPEG de forma rápida e fácil
          não pedimos o seu e-mail ou cadastro para você fazer conversão em massa,
          basta escolher todos os arquivos que você quer converter e tá feito.
        </p>
        <div className="container_column_passos">
          <section className="column">
            <h3>Envie os arquivos heic</h3>
            <p>Selecione os arquivos do seu computador!</p>
          </section>
          <section className="column">
            <h3>Aguarde a conversão</h3>
            <p>Assim que você seleciona os seus arquivos HEIC nosso sistema já inicia as conversões. Só aguadar!</p>
          </section>
          <section className="column">
            <h3>Baixe seu jpg</h3>
            <p>Assim que a conversão terminar os seus arquivos vão aparecer com um botão de download, só baixar!</p>
          </section>
        </div>
      </section>


      <section id="footer">

        <div id="redes_sociais">
          <h3>Matenha-se conectado aos nossos produtos</h3>
          <a className="" href=""><i className="fab fa-facebook contato_endereco_info_link"></i></a>
          <a className="" href=""><i className="fab fa-instagram contato_endereco_info_link"></i></a>
          <a className="" href=""><i className="fab fa-linkedin contato_endereco_info_link"></i></a>
          <a className="" href=""><i className="fab fa-twitter contato_endereco_info_link"></i></a>
        </div>

        <div id="container_footer">
          <div className="footer_rocktools">
            <h2>Rocktools</h2>
            <p>Cresça o seu negócio on-line.
              Rocktools é uma empresa de crescimento, vamos te ajudar a escalar o seu negócio!</p>
          </div>
          <div></div>
          <div></div>
          <div></div>

        </div >

      </section >
    </>
  )
}

const Downloads = ({ download }) => {

  const onDownload = async (e) => {

    let requestAPI = new URL(`https://converter.blog.br/Converter/download/${e.target.getAttribute("data-hash")}`);
    let upload = await fetch(requestAPI, {
      method: 'GET',
    })
      .then(response => {
        return response.text();
      })
      .then(text => {
        const str = '[data-id="' + i + '"]';
        const down = document.querySelectorAll(str)[0];
        down.setAttribute("data-hash", text);
        down.classList.remove("none");
        down.classList.add("block");
      })
      .catch((error) => {
        console.log('error: ' + error);
        return error;
      });

  }

  return (
    <>
      <input type="text" name={download.name} defaultValue={download.name} readOnly />
      <a id="button_upload" data-name={download.name} data-id={download.id} className="none">Download</a>
    </>
  )
}

