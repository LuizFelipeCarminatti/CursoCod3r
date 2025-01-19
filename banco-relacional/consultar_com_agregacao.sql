select regiao as 'Região', sum(populacao) as Total from estados
group by regiao
order by Total desc;

-- No lugar de sum usar avg para resultado da media