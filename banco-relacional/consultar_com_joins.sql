select * from cidades c inner join prefeitos p on c.id = p.cidade_id;
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;


select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union all -- simulando full join, o all é opcional
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id