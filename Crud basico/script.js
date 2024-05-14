function carregarItemParaEdicao() {
 
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get('index'));
  
    if (!isNaN(index)) {
      var itens = localStorage.getItem("itens");
      if (itens) {
        itens = JSON.parse(itens);
        if (itens.length > index) {
          var item = itens[index];
          
          document.getElementById("modelo").value = item.modelo;
          document.getElementById("marca").value = item.marca;
          document.querySelector('select[name="Tipo"]').value = item.tipo;
          document.getElementById("quant").value = item.quantidade;
          document.querySelector('input[name="webmaster"][value="' + item.condicao + '"]').checked = true;
          item.diferenciais.forEach(function(diferencial) {
            document.getElementById("tecnologia" + diferencial).checked = true;
          });
        }
      }
    }
  }
  
  carregarItemParaEdicao();
  
  function salvarItem() {
    var modelo = document.getElementById("modelo").value;
    var marca = document.getElementById("marca").value;
    var tipo = document.querySelector('select[name="Tipo"]').value;
    var quantidade = document.getElementById("quant").value;
    var condicao = document.querySelector('input[name="webmaster"]:checked').value;
    var diferenciais = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
      diferenciais.push(checkbox.value);
    });
  
    var item = {
      modelo: modelo,
      marca: marca,
      tipo: tipo,
      quantidade: quantidade,
      condicao: condicao,
      diferenciais: diferenciais
    };
  
    var items = localStorage.getItem("itens") ? JSON.parse(localStorage.getItem("itens")) : [];
  
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get('index'));
  
    if (!isNaN(index)) {
      items[index] = item;
    } else {
      items.push(item);
    }
  
    localStorage.setItem("itens", JSON.stringify(items));
  
    alert("Item salvo com sucesso!");
  }
  
   // Pagina 2
   function carregarItens() {
    var itens = localStorage.getItem("itens");
    if (itens) {
      itens = JSON.parse(itens);
      if (itens.length > 0) {
        var listaHtml = "";
        itens.forEach(function(item, index) {
          listaHtml += "<tr>";
          listaHtml += "<td>" + item.modelo + "</td>";
          listaHtml += "<td>" + item.marca + "</td>";
          listaHtml += "<td>" + item.tipo + "</td>";
          listaHtml += "<td>" + item.quantidade + "</td>";
          listaHtml += "<td>" + item.condicao + "</td>";
          listaHtml += "<td>" + item.diferenciais.join(", ") + "</td>";
          listaHtml += "<td>";
          listaHtml += "<button class='icon-button' onclick='excluirItem(" + index + ")'><i class='fas fa-trash-alt'></i></button>";
          listaHtml += "<button class='icon-button' onclick='editarItem(" + index + ")'><i class='fas fa-edit'></i></button>";
          listaHtml += "<button class='icon-button' onclick='testarItem(" + index + ")'><i class='fas fa-check-circle'></i></button>";
          listaHtml += "</td>";
          listaHtml += "</tr>";
        });
        document.getElementById("lista-itens").innerHTML = listaHtml;
      } else {
        document.getElementById("lista-itens").innerHTML = "<tr><td colspan='7'>Nenhum item cadastrado.</td></tr>";
      }
    } else {
      document.getElementById("lista-itens").innerHTML = "<tr><td colspan='7'>Nenhum item cadastrado.</td></tr>";
    }
  }
  
  function excluirItem(index) {
    var itens = localStorage.getItem("itens");
    if (itens) {
      itens = JSON.parse(itens);
      var itemExcluido = itens[index]; // Acessa o item que será excluído
      var confirmMessage = "Detalhes do Item:\n";
      confirmMessage += "\nModelo: " + itemExcluido.modelo + "\n";
      confirmMessage += "Marca: " + itemExcluido.marca + "\n";
      confirmMessage += "Tipo: " + itemExcluido.tipo + "\n";
      confirmMessage += "Quantidade: " + itemExcluido.quantidade + "\n";
      confirmMessage += "Condição: " + itemExcluido.condicao + "\n";
      confirmMessage += "Diferenciais: " + itemExcluido.diferenciais.join(", ") + "\n";
      confirmMessage += "\nTem certeza que deseja excluir este item?";
      
      if (confirm(confirmMessage)) {
        itens.splice(index, 1);
        localStorage.setItem("itens", JSON.stringify(itens));
        carregarItens();
      }
    }
  }
  
  
  function editarItem(index) {
    window.location.href = "pagina1.html?index=" + index;
  }
  
  function testarItem(index) {
    ligar();
    desligar();
    aumentarVolume();
    diminuirVolume();
    alert("Teste do item foi bem sucedido! \nDetalhes:\n- Ligar: bem sucedido\n- Desligar: bem sucedido\n- Aumentar Volume: bem sucedido\n- Diminuir Volume: bem sucedido");
  }
  
  function ligar() {
  }
  
  function desligar() {
  }
  
  function aumentarVolume() {
  }
  
  function diminuirVolume() {
  }
  
  carregarItens();