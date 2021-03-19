import Head from 'next/head'



export default function Home() {



  const onChange = async (e) => {

    const spinner = document.getElementById("divSpinner");
    spinner.classList.remove('d-none');
    spinner.classList.add('d-block');

    const download = document.getElementById('btnDownload');
    download.classList.remove('d-block');
    download.classList.add('d-none');

    document.getElementById('lblNome').innerHTML = e.target.files[0].name;

    
    const file = e.target.files[0];
    const filename = encodeURIComponent(file.name);
    
    const res = await fetch(`/api/upload-url?file=${filename}`);
    const { url, fields } = await res.json();
    
    const formData = new FormData();

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    });
   
    if (upload.ok) {

      const file = url + filename
      const resp = await fetch(`/api/convert?file=${file}`);
      console.log(resp);
      const caminho = await resp.json();
      console.log(caminho)

      spinner.classList.remove('d-block');
      spinner.classList.add('d-none');

      download.classList.remove('d-none');
      download.classList.add('d-block');


      let linkDownload = caminho.url;
      download.setAttribute('href', linkDownload);

     
    } else {
      console.error('Upload failed.');
    }
    

  }

  

  return (
  <>
      <Head>
        <title>Converter HEIC to JPG</title>
        <meta name="description" content="O melhor conversor online de HEIC to JPEG/JPG do Brasil" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Converter HEIC to JPG" />
        <meta property="og:description" content="HEIC to JPG é um conversor online totalmente gratuito desenvolvido pela Rocktools.com.br" />
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
      </Head>

        <div className="container-fluid">
          <div className="row mb-5 ">
            <div className="col-sm-1">
              
    </div>
          <div className="col-sm-4">
            <h1 className="display-4">Converter HEIC para JPG</h1>
            beta v1
            <input type="file" name="file" id="file" className="inputfile" accept=".heic" multiple="" onChange={(e) => onChange(e)}/>

    </div>
            <div className="col-sm-8">
              
    </div>
        </div>
        
        <div className="row">
          <div className="col-sm-1">

          </div>
          <div className="col-sm-4 d-flex justify-content-between align-middle border-bottom pb-3">
            <div>
              <label id="lblNome" />
      </div>
            <div id="divEvents">
              <div className="spinner-border text-warning d-none" role="status" id="divSpinner">
                <span className="sr-only"></span>
              </div>

              <a href="" className="btn btn-outline-warning d-none" id="btnDownload" download>Download</a>
      </div>

          </div>
          <div className="col-sm-8">

          </div>
        </div>


        </div>
</>
  )
}
