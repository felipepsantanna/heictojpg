import Head from 'next/head'


export default function Home() {

  const onDowload = (e) => {
    e.preventDefault();
    const button = e.currentTarget;
    const url = button.getAttribute('data-download');
  }

  const onChange = (e) => upload(e);

  const upload = (e) => {
    const body = new FormData();
    body.append('file', e.target.files[0]);

    const spinner = document.getElementById("divSpinner");
    spinner.classList.remove('d-none');
    spinner.classList.add('d-block');

    const download = document.getElementById('btnDownload');
    download.classList.remove('d-block');
    download.classList.add('d-none');
    
    document.getElementById('lblNome').innerHTML = e.target.files[0].name;

   const save = fetch('/api/save', { 
      method: 'POST',
      body
    }).then(
      response => response.json() // if the response is a JSON object
   ).then(success => {
     const url = success.url;
     fetch('/api/convert', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ url })
     }).then(
       response => response.json() // if the response is a JSON object
     ).then(success => {
       
       spinner.classList.remove('d-block');
       spinner.classList.add('d-none');
       
       download.classList.remove('d-none');
       download.classList.add('d-block');
       
       
       let linkDownload = success.download.replace('./public', '')
       download.setAttribute('href', linkDownload);

       console.log(success);
     } // Handle the success response object
     ).catch(
       error => console.log(error) // Handle the error response object
     );
     // Handle the success response object
   }).catch(
      error => console.log(error) // Handle the error response object
   );
    

    
  };

  

  return (
  <>
      <Head>
        <title>Converter HEIC to JPG</title>
        <meta name="description" content="O melhor conversor online de HEIC to JPEG/JPG do Brasil" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Converter HEIC to JPG" />
        <meta property="og:description" content="HEIC to JPG é um conversor online totalmente gratuito desenvolvido pela Rocktools.com.br" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
      </Head>

        <div className="container-fluid">
          <div className="row mb-5 ">
            <div className="col-sm-1">
              
    </div>
          <div className="col-sm-4">
              <h1 className="display-4">Converter HEIC para JPG</h1>
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
