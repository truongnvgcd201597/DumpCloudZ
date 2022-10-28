CREATE TABLE public.product (id SERIAL, name VARCHAR(50), price INT, quantity INT, shop INT);
CREATE TABLE public.shop (id INT, name VARCHAR(50), address VARCHAR(255),contact VARCHAR(255));
CREATE TABLE public.users (id INT, name VARCHAR(50), shop INT,password VARCHAR(255), role varchar(100));

INSERT INTO public.shop (id, name, address, contact) VALUES (1, 'Shop 1', 'Address 1', 'Contact 1');
INSERT INTO public.shop (id, name, address, contact) VALUES (2, 'Shop 2', 'Address 2', 'Contact 2');
INSERT INTO public.shop (id, name, address, contact) VALUES (3, 'Shop 3', 'Address 3', 'Contact 3');

INSERT INTO public.product (id, name, price, quantity, shop) VALUES (1, 'Product 1', 100, 10, 1);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (2, 'Product 2', 200, 20, 1);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (3, 'Product 3', 300, 30, 1);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (4, 'Product 4', 400, 40, 2);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (5, 'Product 5', 500, 50, 2);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (6, 'Product 6', 600, 60, 2);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (7, 'Product 7', 700, 70, 3);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (8, 'Product 8', 800, 80, 3);
INSERT INTO public.product (id, name, price, quantity, shop) VALUES (9, 'Product 9', 900, 90, 3);

INSERT INTO public.users (id, name, shop, password, role) VALUES (1, 'shop1', 1, '123456', 'shop');
INSERT INTO public.users (id, name, shop, password, role) VALUES (2, 'shop2', 2, '123456', 'shop');
INSERT INTO public.users (id, name, shop, password, role) VALUES (3, 'director', 0, '123456', 'director');
select * from product;
select * from users;

DROP TABLE users
-- admin
INSERT INTO public.users (id, name, shop, password, role) VALUES (4, 'Admin', 0, '123456', 'director');



CREATE TABLE USERS (
    SERIAL ID INT,
    NAME VARCHAR(255),
    SHOP VARCHAR(255),
    PASSWORD VARCHAR(255),
    ROLE VARCHAR(255),
);