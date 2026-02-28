// ═══════════════════════════════════════════════════════════════════════
// INTER.PLANAR — Backend Google Sheets para receber respostas
// ═══════════════════════════════════════════════════════════════════════
//
// COMO CONFIGURAR:
//
// 1. Crie uma nova planilha no Google Sheets
// 2. Vá em Extensões > Apps Script
// 3. Apague o código padrão e cole este script
// 4. Clique em "Implantar" > "Nova Implantação"
// 5. Tipo: "App da Web"
// 6. Executar como: "Eu"
// 7. Quem tem acesso: "Qualquer pessoa"
// 8. Clique em "Implantar"
// 9. Copie a URL gerada
// 10. Cole a URL no arquivo interplanar-pesquisa.html na variável GOOGLE_SHEETS_URL
//
// Pronto! Cada resposta do formulário HTML será salva como uma nova linha
// na planilha automaticamente.
// ═══════════════════════════════════════════════════════════════════════

// Colunas esperadas (na ordem que aparecerão na planilha)
var COLUNAS = [
  'timestamp',
  'idade',
  'genero',
  'estado',
  'cidade',
  'renda',
  'profissao',
  'curte_eletronica',
  'generos',
  'frequencia',
  'gasto',
  'decisao',
  'obs_eventos',
  'barreiras',
  'barreira_custo',
  'barreira_distancia',
  'obs_barreiras',
  'evento_virtual',
  'usaria',
  'animacao',
  'preco_ingresso',
  'combo',
  'kit_itens',
  'preco_combo',
  'obs_kit',
  'patrocinio_influencia',
  'marcas_desejadas',
  'atrativos',
  'objecoes',
  'dispositivos',
  'usa_metaverso',
  'descoberta',
  'obs_digital',
  'contato',
  'comentario'
];

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Criar cabeçalhos na primeira vez
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUNAS);
      // Formatar cabeçalho
      var headerRange = sheet.getRange(1, 1, 1, COLUNAS.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#00CC55');
      headerRange.setFontColor('#0A0A0F');
    }
    
    // Parsear dados recebidos
    var data = JSON.parse(e.postData.contents);
    
    // Montar linha na ordem das colunas
    var row = COLUNAS.map(function(col) {
      return data[col] || '';
    });
    
    // Adicionar à planilha
    sheet.appendRow(row);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', message: 'Resposta salva!' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'erro', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Necessário para CORS
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'INTER.PLANAR Survey API ativa' }))
    .setMimeType(ContentService.MimeType.JSON);
}
