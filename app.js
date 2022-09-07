var box = document.getElementById("box");

function render(){
    box.innerHTML = "";
    box.style.height = "40vh";
    var render = `
    <div class="inputContent">
        <input type="number" name="real" id="real" class="inputNumber">
        <button class="btnConvert" onclick="main()"><p><i class="fa-solid fa-play"></i></p></button>
</div>`;
    box.innerHTML += render;
}

function main() {
  let valueInput = document.getElementById("real").value * 100;

  let valueReturn = [Math.floor(valueInput / 100)];
  let rest = Math.floor(valueInput % 100);

  if (rest != 0) {
    valueReturn.push(Math.floor(rest / 50));
    rest = Math.floor(rest % 50);
  } else {
    valueReturn.push(0);
  }
  if (rest != 0) {
    valueReturn.push(Math.floor(rest / 25));
    rest = Math.floor(rest % 25);
  } else {
    valueReturn.push(0);
  }
  if (rest != 0) {
    valueReturn.push(Math.floor(rest / 10));
    rest = Math.floor(rest % 10);
  } else {
    valueReturn.push(0);
  }
  if (rest != 0) {
    valueReturn.push(Math.floor(rest / 5));
    rest = Math.floor(rest % 5);
  } else {
    valueReturn.push(0);
  }

  box.innerHTML = "";
  box.style.height = "60vh";
  var render = `
    <div class="tabela">
    <table>
        <tr>
            <th>Type</th>
            <th>Amount</th>
        </tr>
        <tr>
            <td>1 Real</td>
            <td>${valueReturn[0]}</td>
        </tr>
        <tr>
            <td>50 Cents</td>
            <td>${valueReturn[1]}</td>
        </tr>
        <tr>
            <td>25 Cents</td>
            <td>${valueReturn[2]}</td>
        </tr>
        <tr>
            <td>10 Cents</td>
            <td>${valueReturn[3]}</td>
        </tr>
        <tr>
            <td>5 Cents</td>
            <td>${valueReturn[4]}</td>
        </tr>
    </table>
    <button class="btnConvert" onclick="render()"><p><i class="fa-solid fa-backward"></i></p></button>
</div>
`;
  box.innerHTML += render;
}
