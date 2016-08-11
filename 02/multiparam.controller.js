var app = angular.module("myApp", []);

app.controller("control", function ($scope) {
    $scope.cadastrar = cadastrar;
    
    $scope.contatos= [];

    function cadastrar(contato) {
        $scope.contatos.push({
            nome: contato.nome,
            idade: contato.idade,
            telefone: contato.telefone    
        });
    console.log($scope.contatos);
    }
})