import "../../../Style/leitorPDF.css";

function LeitorPDF() {
  let caminhoPDF = localStorage.getItem("caminhoRelativo")?.toString();

  return (
    <>
      <body className="pdfBody">
        <div className="conteudo">
          <embed src={caminhoPDF} type="application/pdf" />
        </div>
      </body>
    </>
  );
}

export default LeitorPDF;
