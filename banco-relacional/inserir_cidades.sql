insert into cidades (nome, area, estado_id)
values  ('Campinas', 795, 25),
		('Niterói', 133.9, 19),
        ('Caruaru', 920.6, (select id from estados where sigla = 'PE')),
		('Juazeiro do Norte', 248.2, (select id from estados where sigla = 'CE'));
        
select * from estados;

select * from cidades