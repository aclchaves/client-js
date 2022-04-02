function consultar(){
    $.ajax({
        url: "http://localhost:8080/formapagamentos",
        type: "get",        

        success: function(response){
            preencherTabela(response);
        }
    });
}

function preencherTabela(formasPagamento){
    $("#tabela tbody tr").remove();

    $.each(formasPagamento, function(i, formasPagamento){
        var linha = $("<tr>");

        linha.append(
            $("<td>").text(formasPagamento.id),
            $("<td>").text(formasPagamento.descricao)
        );

        linha.appendTo("#tabela");
    });
}

$("#btn-consultar").click(consultar);



/*function consultarRestaurantes(){
    $.ajax({
        url: "http://localhost:8080/restaurantes",
        type: "get",        

        success: function(response){
            $("#conteudo").text(JSON.stringify(response));
        }
    });
}

function fecharRestaurante(){
    $.ajax({
        url: "http://localhost:8080/restaurantes/1/fechamento",
        type: "put",

        success: function(response){
            alert("Restaurante foi fechado!");
        }
    });
}

function consultarCozinhas(){
    $.ajax({
        url: "http://localhost:8080/cozinhas",
        type: "get",        

        success: function(response){
            $("#conteudo").text(JSON.stringify(response));
        }
    });
}111

$("#botao").click(consultarCozinhas);*/