function consultar(){
    $.ajax({
        url: "http://localhost:8080/formapagamentos",
        type: "get",        

        success: function(response){
            preencherTabela(response);
        }
    });
}

function cadastrar(){
    var formapagamentoJson = JSON.stringify({
        "descricao": $("#campo-descricao").val()
    });

    console.log(formapagamentoJson);

    $.ajax({
        url: "http://localhost:8080/formapagamentos",
        type: "post",
        data: formapagamentoJson,
        contentType: "application/json",

        success: function(response){
            alert("Forma de pagamento adicionada!");
        },

        error: function(error){
            if(error.status == 400){
                var problem = JSON.parse(error.responseText);
                alert(problem.userMessage);
            }else{
                alert("Error ao cadastrar forma de pagamento!");
            }
        }
    });
    
}

function excluir (formaPagamento){
    
    var url = "http://localhost:8080/formapagamentos/" + formaPagamento.id;

   $.ajax({
    url: url,
    type: "delete",    

    success: function(response){
        consultar();

        alert("Forma de pagamento removida!");
    },

    error: function(error){
        //tratando todos os erros da categoria 4xx
        if(error.status >= 400 &&  error.status <= 499){
            var problem = JSON.parse(error.responseText);
            alert(problem.userMessage);
        }else{
            alert("Error ao remover forma de pagamento!");
        }
    }
});
}


function preencherTabela(formasPagamento){
    $("#tabela tbody tr").remove();

    $.each(formasPagamento, function(i, formasPagamento){
        var linha = $("<tr>");

        var linkAcao = $("<a href='#'>")
            .text("Excluir")
            .click(function(event){
                event.preventDefault();
                excluir(formasPagamento);
            });

        linha.append(
            $("<td>").text(formasPagamento.id),
            $("<td>").text(formasPagamento.descricao),
            $("<td>").append(linkAcao)
        );

        linha.appendTo("#tabela");
    });
}

$("#btn-consultar").click(consultar);
$("#btn-cadastrar").click(cadastrar);



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