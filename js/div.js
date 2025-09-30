let n1, n2, adds;
        let min = 1, max = 9; // nível 1 padrão (1 algarismo)

        // Define níveis por quantidade de algarismos
        function setNivel(nivel) {
            // Marca o botão ativo no layout
            document.querySelectorAll(".nivel-btn").forEach(btn => btn.classList.remove("active"));
            document.getElementById("nivel" + nivel).classList.add("active");

            if (nivel === 1) { min = 2; max = 9; }      // 1 algarismo
            else if (nivel === 2) { min = 10; max = 99; } // 2 algarismos
            else if (nivel === 3) { min = 100; max = 999; } // 3 algarismos
            gerarNumeros();
        }

        // Gera números com: divisor < dividendo e divisão exata
        function gerarNumeros() {
           
            do {
                document.getElementById("ans").textContent = "Qual é o quociente?";
                n1 = Math.floor(Math.random() * (max - min + 1)) + min; // dividendo
                n2 = Math.floor(Math.random() * (max - min + 1)) + min; // divisor
            } while (n2 >= n1 || n1 % n2 !== 0);

            document.getElementById("num1").value = n1;
            document.getElementById("num2").value = n2;
            adds = n1 / n2; // quociente inteiro
        
        }

        // Confere a resposta
        function Game() {
            const userStr = document.getElementById("result").value.trim();
            if (userStr === "") { alert("Digite o valor"); return; }

            const resposta = parseInt(userStr, 10);
            if (Number.isNaN(resposta)) { alert("Digite um número inteiro"); return; }

            if (resposta === adds) {
                document.getElementById("ans").textContent = "Muito bem! Sua resposta está correta!";

            } else {
                document.getElementById("ans").textContent = "Resposta errada. Tente novamente!";

            }

            document.getElementById("result").value = "";
            
        }

        // Inicia no nível 1
        gerarNumeros();
        setNivel(1);