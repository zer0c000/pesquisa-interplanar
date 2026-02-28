// ═══════════════════════════════════════════════════════════════════════
// INTER.PLANAR — Backend Google Sheets
// ═══════════════════════════════════════════════════════════════════════
// Recebe dados via GET query params e salva na planilha.
// ═══════════════════════════════════════════════════════════════════════

var COLUNAS = [
  'timestamp','idade','genero','estado','cidade','renda','profissao',
  'curte_eletronica','generos','frequencia','gasto','decisao','obs_eventos',
  'barreiras','barreira_custo','barreira_distancia','obs_barreiras',
  'evento_virtual','usaria','animacao','preco_ingresso','combo','kit_itens',
  'preco_combo','obs_kit','patrocinio_influencia','marcas_desejadas',
  'atrativos','objecoes','dispositivos','usa_metaverso','descoberta',
  'obs_digital','contato','comentario'
];

function doGet(e) {
  try {
    // Se não tem parâmetro timestamp, é só um ping
    if (!e.parameter.timestamp) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'ok', message: 'API ativa' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Criar cabeçalhos na primeira vez
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUNAS);
      var headerRange = sheet.getRange(1, 1, 1, COLUNAS.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#00CC55');
      headerRange.setFontColor('#0A0A0F');
    }

    // Ler cada campo dos query params
    var row = COLUNAS.map(function(col) {
      return e.parameter[col] || '';
    });

    sheet.appendRow(row);

    // Retornar 1x1 pixel transparente (pra funcionar com new Image())
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'erro', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  return doGet(e);
}
