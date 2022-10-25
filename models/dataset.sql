CREATE TABLE public.product (id SERIAL, name VARCHAR(50), price INT, quantity INT, shop INT);
CREATE TABLE public.shop (id INT, name VARCHAR(50), address VARCHAR(255),contact VARCHAR(255));
CREATE TABLE public.account (id INT, username VARCHAR(50), shop VARCHAR(255),password VARCHAR(255), role varchar(100));

INSERT INTO public.shop (id, name, address, contact) VALUES (1, 'Kenel Shop', '571 Ngo Quyen', '0383888888');
INSERT INTO public.shop (id, name, address, contact) VALUES (2, 'Wall Shop', '45 Le Duan', '0383777777');
INSERT INTO public.shop (id, name, address, contact) VALUES (3, 'Harman Shop', '123 Nguyen Van Linh', '0383777777');

INSERT INTO public.product (id, name, price, quantity, shop) VALUES (1, 'Puppy', 10000, 10, 1);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (2, 'Doll', 20000, 20, 1);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (3, 'Car', 30000, 30, 1);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (4, 'Robot', 10000, 10, 2);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (5, 'Squishy', 20000, 20, 2);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (6, 'Laser', 30000, 30, 2);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (7, 'Snap Phone', 10000, 10, 3);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (8, 'Comb', 20000, 20, 3);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (9, 'Sunglasses', 30000, 30, 3);


CREATE TABLE public.account (id INT, username VARCHAR(50), shop VARCHAR(255),password VARCHAR(255), role varchar(50));
INSERT INTO public.account (id, username, shop, password, role) VALUES (1, 'kenel', 'Kenel Shop', '123456', 'seller');
INSERT INTO public.account (id, username, shop, password, role) VALUES (2, 'wall', 'Wall Shop', '123456', 'seller');
INSERT INTO public.account (id, username, shop, password, role) VALUES (3, 'harman', 'Harman Shop', '123456', 'seller');
INSERT INTO public.account (id, username, shop, password, role) VALUES (4, 'admin', 'Admin', '123456', 'admin');






