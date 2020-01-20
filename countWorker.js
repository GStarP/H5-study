var count = 0;

function incCount() {
  count = count + 1;
  postMessage(count);
  setTimeout(incCount, 500);
}

incCount();