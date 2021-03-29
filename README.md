**Greedy Search**

Greedy Search (Estratégia Gulosa) é um algoritmo que busca encontrar a melhor resposta para cada passo, esperando alcançar um resultado global ótimo. O algoritmo guloso define, em cada iteração, o objeto mais “apetitoso” e a partir desse objeto ele constrói a solução do algoritmo. Ele toma suas decisões a partir das informações disponíveis na iteração corrente, sem se preocupar com as consequências decorrentes dessas decisões. A escolha que faz em cada iteração é dada como definitiva.
É bom lembrar que Algoritmo guloso não é o mesmo que algoritmo de força bruta. Greedy significa que a cada passo o algoritmo vai selecionar a melhor opção a seguir, já brute-force (força bruta) procura seleciona a opção mais simples, óbvia ou direta, repetindo essa tentativa até encontrar o resultado desejado.

Exemplo:

"Problema do empacotamento

No problema de bin packing (ou problema do empacotamento), objetos de diferentes volumes devem ser embalados em um número finito de bandejas ou recipientes de volume V de uma forma que minimize o número de recipientes utilizados. Na teoria da complexidade computacional, este é um problema de combinatória NP-difícil.

Podem ser utilizadas heurísticas gulosas para obtenção de uma solução aproximada, tais como: algoritmo first fit, algoritmo best fit, dentre outros. "

**A Search**

O algoritmo A* procura o caminho em um grafo de um vértice inicial até um vértice final. Assim como algoritmo Breadth First Search (Busca em Largura) e a formalidade do algoritmo de Dijkstra, ele é a combinação de aproximações heurísticas.
Sua aplicação vai de aplicativos de busca de rotas de deslocamento entre localidades, até a resolução de quebra cabeça. Esse algoritmo é bastante utilizado para jogos.

Algoritmo A*
    
    Sejam
        Q = conjunto de nós a serem pesquisados;
        S = o estado inicial da busca
    Faça:
        Inicialize Q com o nó de busca (S) como única entrada;
        Se Q está vazio, interrompa. Se não, escolha o melhor elemento de Q;
        Se o estado (n) é um objetivo, retorne n;
        (De outro modo) Remova n de Q;
        Encontre os descendentes do estado (n) que não estão em visitados e crie todas as extensões de n para cada descendente;
        Adicione os caminhos estendidos a Q e vá ao passo 2;
    
**Graph Search**

Algoritmo de busca é aquele que visita todos os vértices de um grafo, passando pelos arcos de um vértice a outro. 
Graph Search no facebook: essa função permite que o usuário realize sua busca através de seus amigos, dentro do próprio facebook. A busca social retorna o que foi curtido e compartilhado pelos usuários da rede, como jogos, músicas, interesses, entre outros. Para executar essa ação o serviço cruza informações e disponibiliza de mais de 40 filtros que auxiliam o usuário a encontrar os resultados bem específicos, entre dados fornecidos por amigos, amigos de amigos ou público.

