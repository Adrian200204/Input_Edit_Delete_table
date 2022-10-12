const btnSubmit = document.getElementById("btn-submit");
const inputnim = document.getElementById("input-nim");
const inputnama = document.getElementById("input-nama");
const dataContainer = document.querySelector("tbody.data-container");

// Why we can't use var keyword -> hoisting

let mhsDatas = [];

function renderData() {
  dataContainer.innerHTML = "";
  mhsDatas.forEach(function (el, i) {
    dataContainer.innerHTML += `
              <tr>
                <th>${i + 1}</th>
                <th>${el.nim}</th>
                <th>${el.name}</th>
                <th>
                  <button mhsId="${i}" class="edit-btn">Edit</button>
                  ||
                  <button
                    mhsId="${i}"
                    class="delete-btn"
                  >
                    Delete
                  </button>
                </th>
              </tr>
   `;
  });

  const edit_btn = document.querySelectorAll(".edit-btn");
  edit_btn.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
      const button_id = e.target.getAttribute("mhsId");
      edit_data(button_id);
    });
  });

  const delete_btn = document.querySelectorAll(".delete-btn");
  delete_btn.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
      const button_id = e.target.getAttribute("mhsId");
      delete_data(button_id);
    });
  });
}

function edit_data(id) {
  mhsDatas.forEach((mhs, i) => {
    if (i == id) {
      mhs.nim = prompt("Nim akan diganti menjadi =");
      mhs.name = prompt("Nama akan diganti menjadi =");
    }
  });
  renderData();
}

function delete_data(id) {
  if (confirm("Yakin ingin menghapus?")) {
    const arrayan = mhsDatas.filter((mhs, i) => i != id);
    mhsDatas = arrayan;
  } else {
    txt = "Cancel";
  }
  renderData();
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  mhsDatas.push({ nim: inputnim.value, name: inputnama.value });

  renderData();
});
