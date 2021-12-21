let dataBarang = ["Buku Tulis", "Pensil", "Spidol"];
function showBarang() {
  let listBarang = document.getElementById("list-barang");

  listBarang.innerHTML = "";

  for (let i = 0; i < dataBarang.length; i++) {
    let btnEdit = "<a href='#' onclick='editBarang(" + i + ")'>Edit</a>";
    let btnHapus = "<a href='#'onclick='deleteBarang(" + i + ")'>Hapus</a>";
    listBarang.innerHTML +=
      "<li>" + dataBarang[i] + " [" + btnEdit + " |" + btnHapus + "]</li>";
  }
}
function addBarang() {
  let input = document.querySelector("input[name=barang]");
  dataBarang.push(input.value);
  showBarang();
}
function editBarang(id) {
  let newBarang = prompt("Nama baru", dataBarang[id]);
  dataBarang[id] = newBarang;
  showBarang();
}
function deleteBarang(id) {
  dataBarang.splice(id, 1);
  showBarang();
}
showBarang();
