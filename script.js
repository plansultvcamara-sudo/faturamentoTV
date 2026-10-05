const views = {
  inicio: {
    title: 'Início',
    icon: 'calendar-days',
    content: `<section class="calendar-view"><div class="panel calendar-panel"><div class="calendar-head"><h2 id="calendarLabel"></h2><div class="calendar-head-actions"><button class="calendar-today-btn" id="calendarToday" type="button">Hoje</button><button class="icon-button" id="calendarPrev" type="button" aria-label="Mês anterior"><i data-lucide="chevron-left"></i></button><button class="icon-button" id="calendarNext" type="button" aria-label="Próximo mês"><i data-lucide="chevron-right"></i></button></div></div><div class="calendar-weekdays"><span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span></div><div class="calendar-grid" id="calendarDays"></div></div><div class="panel notes-panel"><div class="panel-head"><h2 id="notesTitle">Selecione um dia</h2></div><p class="notes-hint" id="notesHint">Clique em um dia do calendário para ver ou lançar anotações.</p><div class="notes-list" id="notesList"></div><form class="notes-form" id="notesForm" hidden><textarea id="notesInput" placeholder="Escreva uma anotação..." rows="3" required></textarea><button type="submit" class="primary-button"><i data-lucide="plus"></i><span>Adicionar</span></button></form></div></section>`
  },
  atestado: {
    title: 'Atestado',
    content: `<div class="page-heading"><div><p class="eyebrow">Terça-feira, 25 de agosto</p><h1>Bom dia, Marina.</h1><p>Acompanhe o pulso do seu workspace em um só lugar.</p></div><div class="date-label"><i data-lucide="calendar-days"></i> Últimos 30 dias</div></div><div class="stats-grid"><article class="stat-card"><div class="stat-top"><span>Projetos ativos</span><div class="stat-icon teal"><i data-lucide="layers-3"></i></div></div><div class="stat-value">08</div><div class="stat-delta">↗ 12% neste mês</div></article><article class="stat-card"><div class="stat-top"><span>Horas registradas</span><div class="stat-icon coral"><i data-lucide="clock-3"></i></div></div><div class="stat-value">184h</div><div class="stat-delta">↗ 8,4% neste mês</div></article><article class="stat-card"><div class="stat-top"><span>Entregas no prazo</span><div class="stat-icon blue"><i data-lucide="check-check"></i></div></div><div class="stat-value">94%</div><div class="stat-delta">↗ 3,2% neste mês</div></article><article class="stat-card"><div class="stat-top"><span>Em revisão</span><div class="stat-icon yellow"><i data-lucide="message-square-more"></i></div></div><div class="stat-value">12</div><div class="stat-delta neutral">Sem alteração</div></article></div><div class="dashboard-grid"><section class="panel"><div class="panel-head"><h2>Ritmo de entregas</h2><span>Entregas concluídas</span></div><div class="chart-wrap"><div class="chart-grid"></div><svg class="chart-svg" viewBox="0 0 700 190" preserveAspectRatio="none"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#79d2c3" stop-opacity=".35"/><stop offset="1" stop-color="#79d2c3" stop-opacity="0"/></linearGradient></defs><path class="chart-area" d="M0,153 C45,140 55,112 95,122 S142,145 180,113 S220,74 263,90 S300,137 345,101 S396,44 440,68 S485,101 525,81 S570,37 612,51 S660,82 700,25 L700,190 L0,190Z"/><path class="chart-line" d="M0,153 C45,140 55,112 95,122 S142,145 180,113 S220,74 263,90 S300,137 345,101 S396,44 440,68 S485,101 525,81 S570,37 612,51 S660,82 700,25"/><circle class="chart-dot" cx="525" cy="81" r="5"/><circle class="chart-dot" cx="700" cy="25" r="5"/></svg><div class="chart-labels"><span>01 ago</span><span>08 ago</span><span>15 ago</span><span>22 ago</span><span>Hoje</span></div></div></section><section class="panel"><div class="panel-head"><h2>Projetos recentes</h2><button class="text-link" data-view="projects">Ver todos <i data-lucide="arrow-right"></i></button></div><div class="project-list"><div class="project-row"><div class="project-symbol orange">NB</div><div><strong>Nova marca · Bloom</strong><span>Atualizado há 2h</span></div><div><div class="progress"><i style="width:82%"></i></div><div class="progress-label">82%</div></div></div><div class="project-row"><div class="project-symbol blue">AP</div><div><strong>App mobile · Cora</strong><span>Atualizado ontem</span></div><div><div class="progress"><i style="width:64%"></i></div><div class="progress-label">64%</div></div></div><div class="project-row"><div class="project-symbol green">WE</div><div><strong>Website · Estúdio 27</strong><span>Atualizado há 2 dias</span></div><div><div class="progress"><i style="width:45%"></i></div><div class="progress-label">45%</div></div></div></div></section></div>`
  },
  'adicional-noturno': {
    title: 'Adicional Noturno',
    content: `<section class="night-analysis"><div class="panel upload-panel"><div class="panel-head"><h2>Relatório de apuração</h2><span>PDF</span></div><label class="pdf-dropzone" id="pdfDropzone" for="pdfInput"><i data-lucide="upload-cloud"></i><strong>Selecione ou arraste o PDF aqui</strong><small>O arquivo será analisado somente neste navegador.</small><input id="pdfInput" type="file" accept="application/pdf,.pdf"></label><p class="pdf-status" id="pdfStatus" role="status">Aguardando arquivo.</p></div><section class="panel results-panel"><div class="panel-head"><h2>Horas por colaborador</h2><div class="results-actions"><span id="resultCount">0 registros</span><button class="primary-button export-button" id="exportNightExcel" type="button" disabled><i data-lucide="file-spreadsheet"></i><span>Gerar Relatório</span></button></div></div><div class="table-wrap"><table class="night-results"><thead><tr><th class="night-check-col"><input type="checkbox" id="selectAllNight"></th><th>Matrícula</th><th>Colaborador</th><th>Horas no total</th></tr></thead><tbody id="nightResults"><tr><td colspan="4" class="empty-results">Envie um PDF para ver os resultados.</td></tr></tbody></table></div></section></section>`
  },
  faturamento: {
    title: 'Faturamento',
    icon: 'receipt',
    content: `<section class="billing-frame" aria-label="Faturamento"><div class="billing-loading" role="status"><span class="loading-spinner" aria-hidden="true"></span><span>Carregando faturamento...</span></div><iframe src="https://script.google.com/macros/s/AKfycbw8laAZtg_9plDVtIvMRhhM-y2h398Ji6C5ZnMgHxmhgbVTU5wNv0Qn5dbLLotjF-JRmQ/exec" title="Faturamento" loading="lazy"></iframe></section>`
  },
  'auxilio-creche': {
    title: 'Auxílio Creche',
    icon: 'baby',
    content: `<section class="billing-frame" aria-label="Auxílio Creche"><div class="billing-loading" role="status"><span class="loading-spinner" aria-hidden="true"></span><span>Carregando auxílio creche...</span></div><iframe src="https://script.google.com/macros/s/AKfycbx8PgHynhLi3QetjixYyYS_vpbKv5Csry1SwiSZbZThlFj2qrI0tOuQasGBaYnVRT9T/exec" title="Auxílio Creche" loading="lazy"></iframe></section>`
  },
  inss: { title: 'INSS', icon: 'landmark', description: 'Acesse os detalhes das suas contribuições e descontos de INSS.' },
  ferias: { title: 'Férias', icon: 'calendar-range', description: 'Consulte seu período aquisitivo, saldo e programação de férias.' }
};

const frame = document.querySelector('#contentFrame');
const appShell = document.querySelector('.app-shell');
const toast = document.querySelector('#toast');
const searchBox = document.querySelector('#searchBox');
const searchInput = document.querySelector('#searchInput');
const searchResults = document.querySelector('#searchResults');
let toastTimer;

function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function updateSearchResults() {
  const query = normalizeText(searchInput.value.trim());
  const matches = Object.entries(views).filter(([, view]) => !query || normalizeText(view.title).includes(query));
  searchResults.innerHTML = matches.map(([viewName, view]) => `<button class="search-result" data-view="${viewName}" role="option"><i data-lucide="${view.icon || 'file-check-2'}"></i><span>${view.title}</span></button>`).join('');
  searchResults.classList.toggle('visible', searchInput === document.activeElement && matches.length > 0);
  window.lucide?.createIcons();
}

function closeSearch() {
  searchResults.classList.remove('visible');
  searchInput.value = '';
}

function renderView(viewName) {
  const view = views[viewName];
  frame.classList.toggle('billing-active', viewName === 'faturamento' || viewName === 'auxilio-creche');
  if (view.content) {
    frame.innerHTML = view.content;
  } else {
    frame.innerHTML = `<div class="panel empty-view"><div class="empty-view-inner"><div class="large-icon"><i data-lucide="${view.icon}"></i></div><p class="eyebrow">Área de benefícios</p><h2>${view.title}</h2><p>${view.description}</p><button class="primary-button" data-view="atestado"><i data-lucide="arrow-left"></i><span>Voltar para Atestado</span></button></div></div>`;
  }
  const billingFrame = frame.querySelector('.billing-frame');
  const billingIframe = billingFrame?.querySelector('iframe');
  billingIframe?.addEventListener('load', () => billingFrame.classList.add('is-loaded'), { once: true });
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === viewName));
  window.lucide?.createIcons();
  setupNightAnalysis();
  setupCalendar();
  closeSidebar();
}

function showToast() {
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

function closeSidebar() {
  document.querySelector('#sidebar').classList.remove('open');
  document.querySelector('#sidebarOverlay').classList.remove('visible');
}

function formatNightHours(minutes) {
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
}

function downloadNightExcel(records, period) {
  if (!window.XLSX || !records.length) return;
  const rows = [
    ['Adicional Noturno'],
    ['Período', period || 'Não identificado'],
    [],
    ['Matrícula', 'Colaborador', 'Total de horas'],
    ...records.map(record => [record.matricula, record.nome, formatNightHours(record.minutes)])
  ];
  const worksheet = window.XLSX.utils.aoa_to_sheet(rows);
  worksheet['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }];
  worksheet['!cols'] = [{ wch: 14 }, { wch: 42 }, { wch: 18 }];
  const workbook = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(workbook, worksheet, 'Adicional Noturno');
  window.XLSX.writeFile(workbook, 'adicional-noturno.xlsx');
}

function getPdfLines(items) {
  const rows = [];
  items.forEach(item => {
    const text = String(item.str || '').trim();
    if (!text) return;
    const y = Math.round(item.transform[5]);
    let row = rows.find(entry => Math.abs(entry.y - y) <= 3);
    if (!row) { row = { y, items: [] }; rows.push(row); }
    row.items.push({ x: item.transform[4], text });
  });
  return rows.sort((a, b) => b.y - a.y).map(row => row.items.sort((a, b) => a.x - b.x).map(item => item.text).join(' ').replace(/\s+/g, ' ').trim());
}

function readNightTotals(lines) {
  // Ex.: "208366 HELISSON RAFAEL DE OLIVEIRA LEITE Saldo 1: 00:00"
  const employeePattern = /^(\d{5,6})\s+(\p{L}[\p{L} .'-]{2,}?)\s*(?:Saldo\b.*)?$/u;
  // Ex.: "Total Colaborador: 051 Trabalhando Noturno 026:22" ou "344 Horas Extras 70% Noturnas 003:19"
  const situationPattern = /^(?:Total\s+Colaborador:?\s*)?(\d{3})\s+\D.*?\s(\d{1,4}):(\d{2})$/i;
  const records = new Map();
  let employee = null;
  lines.forEach(line => {
    if (/^Total\s+Geral/i.test(line)) { employee = null; return; }
    const employeeMatch = line.match(employeePattern);
    if (employeeMatch) {
      const matricula = employeeMatch[1];
      // Um colaborador repetido no topo da página continua o mesmo bloco
      employee = records.get(matricula) || { matricula, nome: employeeMatch[2].trim(), minutes: 0, hasTotal: false };
      records.set(matricula, employee);
      return;
    }
    const situationMatch = employee && line.match(situationPattern);
    if (situationMatch) {
      employee.minutes += Number(situationMatch[2]) * 60 + Number(situationMatch[3]);
      employee.hasTotal = true;
    }
  });
  return [...records.values()].filter(record => record.hasTotal).map(({ hasTotal, ...record }) => record);
}

function setupNightAnalysis() {
  const input = document.querySelector('#pdfInput');
  const dropzone = document.querySelector('#pdfDropzone');
  if (!input || !dropzone || !window.pdfjsLib) return;
  const status = document.querySelector('#pdfStatus');
  const resultBody = document.querySelector('#nightResults');
  const resultCount = document.querySelector('#resultCount');
  const exportButton = document.querySelector('#exportNightExcel');
  const selectAllCheckbox = document.querySelector('#selectAllNight');
  let recordsForExport = [];
  let periodForExport = '';

  const getCheckedMatriculas = () => new Set(
    [...resultBody.querySelectorAll('.night-row-check:checked')].map(checkbox => checkbox.closest('tr').dataset.matricula)
  );
  const syncSelectAll = () => {
    const checkboxes = [...resultBody.querySelectorAll('.night-row-check')];
    const checkedCount = checkboxes.filter(checkbox => checkbox.checked).length;
    selectAllCheckbox.checked = checkboxes.length > 0 && checkedCount === checkboxes.length;
    selectAllCheckbox.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
  };

  const analyze = async file => {
    if (!file || (file.type !== 'application/pdf' && !/\.pdf$/i.test(file.name))) { status.textContent = 'Selecione um arquivo PDF válido.'; return; }
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    status.textContent = 'Lendo o PDF...';
    resultBody.innerHTML = '<tr><td colspan="4" class="empty-results">Analisando páginas...</td></tr>';
    try {
      const pdf = await window.pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
      const lines = [];
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        lines.push(...getPdfLines((await page.getTextContent()).items));
      }
      console.debug('Adicional Noturno - linhas extraídas do PDF:', lines);
      const records = readNightTotals(lines);
      periodForExport = lines.find(line => /^Período:/i.test(line))?.replace(/^Período:\s*/i, '') || '';
      recordsForExport = records;
      exportButton.disabled = records.length === 0;
      selectAllCheckbox.disabled = records.length === 0;
      resultBody.innerHTML = records.length ? records.map(record => `<tr data-matricula="${record.matricula}"><td><input type="checkbox" class="night-row-check" checked></td><td>${record.matricula}</td><td>${record.nome}</td><td><strong>${formatNightHours(record.minutes)}</strong></td></tr>`).join('') : '<tr><td colspan="4" class="empty-results">Nenhum “Total Colaborador” foi encontrado.</td></tr>';
      resultCount.textContent = `${records.length} registro${records.length === 1 ? '' : 's'}`;
      status.textContent = `${pdf.numPages} página${pdf.numPages === 1 ? '' : 's'} analisada${pdf.numPages === 1 ? '' : 's'}.`;
      syncSelectAll();
    } catch (error) {
      resultBody.innerHTML = '<tr><td colspan="4" class="empty-results">Não foi possível ler este PDF.</td></tr>';
      resultCount.textContent = '0 registros';
      status.textContent = 'Erro ao analisar o arquivo. Verifique se ele contém texto selecionável.';
      recordsForExport = [];
      periodForExport = '';
      exportButton.disabled = true;
      selectAllCheckbox.disabled = true;
    }
  };
  exportButton.addEventListener('click', () => {
    const checkedMatriculas = getCheckedMatriculas();
    downloadNightExcel(recordsForExport.filter(record => checkedMatriculas.has(record.matricula)), periodForExport);
  });
  selectAllCheckbox.addEventListener('change', () => {
    resultBody.querySelectorAll('.night-row-check').forEach(checkbox => { checkbox.checked = selectAllCheckbox.checked; });
    selectAllCheckbox.indeterminate = false;
  });
  resultBody.addEventListener('change', event => {
    if (event.target.classList.contains('night-row-check')) syncSelectAll();
  });
  input.addEventListener('change', () => { analyze(input.files[0]); input.value = ''; });
  dropzone.addEventListener('drop', event => analyze(event.dataTransfer.files[0]));
  ['dragenter', 'dragover'].forEach(type => dropzone.addEventListener(type, event => { event.preventDefault(); dropzone.classList.add('dragging'); }));
  ['dragleave', 'drop'].forEach(type => dropzone.addEventListener(type, event => { event.preventDefault(); dropzone.classList.remove('dragging'); }));
}

const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
// Cole aqui o link /exec do Apps Script ligado à planilha de anotações.
const NOTES_API_URL = 'https://script.google.com/macros/s/AKfycbxrInQZEVlwuhnDtc6ofIJ76cI4rzmylWuyD_HkDqB2I0RKDdVcLGY2JEdn3-SmiGgObA/exec';
let calendarDate = new Date();
let selectedDate = null;
let notesByDate = {};
let notesLoaded = false;

function toDateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function renderCalendar(date) {
  const label = document.querySelector('#calendarLabel');
  const grid = document.querySelector('#calendarDays');
  if (!label || !grid) return;
  const year = date.getFullYear();
  const month = date.getMonth();
  label.textContent = `${monthNames[month]} de ${year}`;
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const today = new Date();
  const cells = [];
  for (let i = firstWeekday - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    cells.push({ day, muted: true, key: toDateKey(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1, day) });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    cells.push({ day, muted: false, today: isToday, key: toDateKey(year, month, day) });
  }
  for (let day = 1; cells.length % 7 !== 0; day++) {
    cells.push({ day, muted: true, key: toDateKey(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1, day) });
  }
  grid.innerHTML = cells.map(cell => {
    const hasNotes = (notesByDate[cell.key] || []).length > 0;
    const classes = ['calendar-day', cell.muted && 'muted', cell.today && 'today', cell.key === selectedDate && 'selected'].filter(Boolean).join(' ');
    return `<button type="button" class="${classes}" data-date="${cell.key}">${cell.day}${hasNotes ? '<i class="calendar-day-dot"></i>' : ''}</button>`;
  }).join('');
}

function formatDateLabel(dateKey) {
  const [year, month, day] = dateKey.split('-').map(Number);
  return `${String(day).padStart(2, '0')} de ${monthNames[month - 1]} de ${year}`;
}

function renderNotesPanel() {
  const title = document.querySelector('#notesTitle');
  const hint = document.querySelector('#notesHint');
  const list = document.querySelector('#notesList');
  const form = document.querySelector('#notesForm');
  if (!title || !list || !form) return;
  document.querySelector('.calendar-view')?.classList.toggle('has-selection', Boolean(selectedDate));
  if (!selectedDate) {
    title.textContent = 'Selecione um dia';
    hint.textContent = 'Clique em um dia do calendário para ver ou lançar anotações.';
    hint.hidden = false;
    list.innerHTML = '';
    form.hidden = true;
    return;
  }
  title.textContent = formatDateLabel(selectedDate);
  if (!NOTES_API_URL) {
    hint.hidden = false;
    hint.textContent = 'Link da planilha de anotações ainda não configurado.';
    list.innerHTML = '';
    form.hidden = true;
    return;
  }
  form.hidden = false;
  if (!notesLoaded) {
    hint.hidden = false;
    hint.textContent = 'Carregando anotações...';
    list.innerHTML = '';
    return;
  }
  const notes = (notesByDate[selectedDate] || []).slice().sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt)));
  hint.hidden = notes.length > 0;
  hint.textContent = 'Nenhuma anotação para este dia ainda.';
  list.innerHTML = notes.map(note => `<div class="note-item"><p>${note.text.replace(/</g, '&lt;')}</p><button type="button" class="note-delete" data-id="${note.id}" aria-label="Excluir anotação"><i data-lucide="trash-2"></i></button></div>`).join('');
  window.lucide?.createIcons();
}

async function loadNotes() {
  if (!NOTES_API_URL) { notesLoaded = true; renderNotesPanel(); return; }
  try {
    const response = await fetch(NOTES_API_URL);
    const data = await response.json();
    notesByDate = {};
    (data.notes || []).forEach(note => {
      if (!notesByDate[note.date]) notesByDate[note.date] = [];
      notesByDate[note.date].push(note);
    });
  } catch (error) {
    console.error('Não foi possível carregar as anotações.', error);
  } finally {
    notesLoaded = true;
    renderCalendar(calendarDate);
    renderNotesPanel();
  }
}

async function addNote(date, text) {
  if (!NOTES_API_URL) return;
  const form = document.querySelector('#notesForm');
  const submitButton = form?.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = true;
  try {
    const response = await fetch(NOTES_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'add', date, text })
    });
    const data = await response.json();
    if (data.ok && data.note) {
      if (!notesByDate[date]) notesByDate[date] = [];
      notesByDate[date].push(data.note);
      renderCalendar(calendarDate);
      renderNotesPanel();
    }
  } catch (error) {
    console.error('Não foi possível salvar a anotação.', error);
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
}

async function deleteNote(id, date) {
  if (!NOTES_API_URL) return;
  try {
    const response = await fetch(NOTES_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'delete', id })
    });
    const data = await response.json();
    if (data.ok) {
      notesByDate[date] = (notesByDate[date] || []).filter(note => note.id !== id);
      renderCalendar(calendarDate);
      renderNotesPanel();
    }
  } catch (error) {
    console.error('Não foi possível excluir a anotação.', error);
  }
}

function setupCalendar() {
  const grid = document.querySelector('#calendarDays');
  if (!grid) return;
  selectedDate = null;
  renderCalendar(calendarDate);
  renderNotesPanel();
  if (!notesLoaded) loadNotes();

  document.querySelector('#calendarPrev').addEventListener('click', () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
    renderCalendar(calendarDate);
  });
  document.querySelector('#calendarNext').addEventListener('click', () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
    renderCalendar(calendarDate);
  });
  document.querySelector('#calendarToday').addEventListener('click', () => {
    calendarDate = new Date();
    renderCalendar(calendarDate);
  });
  grid.addEventListener('click', event => {
    const dayButton = event.target.closest('.calendar-day');
    if (!dayButton) return;
    selectedDate = selectedDate === dayButton.dataset.date ? null : dayButton.dataset.date;
    renderCalendar(calendarDate);
    renderNotesPanel();
  });
  document.querySelector('#notesForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('#notesInput');
    const text = input.value.trim();
    if (!text || !selectedDate) return;
    addNote(selectedDate, text);
    input.value = '';
  });
  document.querySelector('#notesList').addEventListener('click', event => {
    const deleteButton = event.target.closest('.note-delete');
    if (!deleteButton || !selectedDate) return;
    deleteNote(deleteButton.dataset.id, selectedDate);
  });
}

document.addEventListener('click', event => {
  const viewTrigger = event.target.closest('[data-view]');
  if (viewTrigger) {
    renderView(viewTrigger.dataset.view === 'projects' ? 'atestado' : viewTrigger.dataset.view);
    closeSearch();
  }
  if (event.target.closest('#openSidebar')) {
    if (window.innerWidth <= 900) {
      document.querySelector('#sidebar').classList.add('open');
      document.querySelector('#sidebarOverlay').classList.add('visible');
    } else {
      appShell.classList.toggle('sidebar-collapsed');
    }
  }
  if (event.target.closest('#closeSidebar, #sidebarOverlay')) closeSidebar();
  if (!event.target.closest('#searchBox')) closeSearch();
});

searchInput.addEventListener('focus', updateSearchResults);
searchInput.addEventListener('input', updateSearchResults);
searchInput.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeSearch();
    searchInput.blur();
  }
});

document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

window.addEventListener('load', () => {
  renderView('inicio');
  window.lucide?.createIcons();
});
